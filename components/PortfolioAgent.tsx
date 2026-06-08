"use client";

import React, { useCallback, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, Send, Square, User, Volume2, VolumeX } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface Message {
  sender: "user" | "agent";
  text: string;
  isStreaming?: boolean;
}

const PREDEFINED_QUESTIONS = portfolioData.agentQuestions;

function getPreferredVoice(voices: SpeechSynthesisVoice[]) {
  const englishVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
  const preferredNames = [
    "microsoft david",
    "david",
    "daniel",
    "alex",
    "george",
    "fred",
    "google us english",
    "english united states",
  ];

  return (
    preferredNames
      .map((name) =>
        englishVoices.find((voice) => voice.name.toLowerCase().includes(name))
      )
      .find(Boolean) ??
    englishVoices.find((voice) => voice.name.toLowerCase().includes("male")) ??
    englishVoices[0] ??
    voices[0] ??
    null
  );
}

function formatSpeechText(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/×/g, " times")
    .replace(/\s+/g, " ")
    .trim();
}

function getSpeechSegments(text: string) {
  return formatSpeechText(text)
    .split(/(?<=[.!?])\s+/)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

export default function PortfolioAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "agent",
      text: "Hello! Portfolio context is loaded. Ask about Pushkraj's projects, skills, education, experience, or role fit."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [preferredVoice, setPreferredVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState<number | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const speechRunRef = useRef(0);
  const lastAutoSpokenMessageRef = useRef(0);

  // Keep new chat messages visible without moving the whole page.
  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      setSpeechSupported(true);
      setPreferredVoice(getPreferredVoice(window.speechSynthesis.getVoices()));
    };

    const loadTimer = window.setTimeout(loadVoices, 0);
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.clearTimeout(loadTimer);
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  const stopSpeaking = useCallback(() => {
    if (!speechSupported) return;
    speechRunRef.current += 1;
    window.speechSynthesis.cancel();
    setSpeakingMessageIndex(null);
  }, [speechSupported]);

  const speakMessage = useCallback((text: string, index: number) => {
    if (!speechSupported) return;

    const speechSegments = getSpeechSegments(text);
    if (speechSegments.length === 0) return;

    speechRunRef.current += 1;
    const runId = speechRunRef.current;
    window.speechSynthesis.cancel();

    setSpeakingMessageIndex(index);

    const speakSegment = (segmentIndex: number) => {
      if (speechRunRef.current !== runId) return;

      const segment = speechSegments[segmentIndex];
      if (!segment) {
        setSpeakingMessageIndex(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(segment);
      const isMetricSegment = /\d|%|times|impact|increase|reduced|faster/i.test(segment);

      utterance.voice = preferredVoice;
      utterance.rate = isMetricSegment ? 1.02 : 0.98;
      utterance.pitch = isMetricSegment ? 0.92 : 0.86;
      utterance.volume = 1;
      utterance.onend = () => {
        window.setTimeout(() => speakSegment(segmentIndex + 1), isMetricSegment ? 160 : 110);
      };
      utterance.onerror = () => setSpeakingMessageIndex(null);

      window.speechSynthesis.speak(utterance);
    };

    speakSegment(0);
  }, [preferredVoice, speechSupported]);

  useEffect(() => {
    if (!speechSupported || isTyping) return;

    const latestIndex = messages.length - 1;
    const latestMessage = messages[latestIndex];

    if (
      !latestMessage ||
      latestMessage.sender !== "agent" ||
      latestMessage.isStreaming ||
      !latestMessage.text.trim() ||
      latestIndex <= lastAutoSpokenMessageRef.current
    ) {
      return;
    }

    lastAutoSpokenMessageRef.current = latestIndex;
    speakMessage(latestMessage.text, latestIndex);
  }, [isTyping, messages, speakMessage, speechSupported]);

  const streamAssistantResponse = async (nextMessages: Message[]) => {
    setIsTyping(true);
    setMessages((prev) => [...prev, { sender: "agent", text: "", isStreaming: true }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Chat response failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const lastMsg = updated[updated.length - 1];

          if (lastMsg?.sender === "agent") {
            updated[updated.length - 1] = {
              ...lastMsg,
              text: `${lastMsg.text}${chunk}`,
            };
          }

          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];
      const errorText =
          "I could not complete that response right now. Please try one of the suggested portfolio questions or ask again in a moment.";

        if (lastMsg?.sender === "agent") {
          updated[updated.length - 1] = { ...lastMsg, text: errorText };
        } else {
          updated.push({ sender: "agent", text: errorText });
        }

        return updated;
      });
    } finally {
      setIsTyping(false);
      setMessages((prev) => {
        const updated = [...prev];
        const lastMsg = updated[updated.length - 1];

        if (lastMsg?.sender === "agent") {
          const copy = { ...lastMsg };
          delete copy.isStreaming;
          updated[updated.length - 1] = copy;
        }

        return updated;
      });
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    stopSpeaking();

    const userMessage: Message = { sender: "user", text: text.trim() };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInputValue("");
    await streamAssistantResponse(nextMessages);
  };

  // Helper to format text with bolding and bullet list styling in simulated MD
  const formatMessageText = (text: string) => {
    return text.split("\n").map((line, idx) => {
      const formattedLine = line;

      // Handle bold syntax: **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      const boldParts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(formattedLine)) !== null) {
        // text before bold
        if (match.index > lastIndex) {
          boldParts.push(formattedLine.substring(lastIndex, match.index));
        }
        // bold text itself
        boldParts.push(<strong key={match.index} className="text-white font-bold">{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < formattedLine.length) {
        boldParts.push(formattedLine.substring(lastIndex));
      }

      const content = boldParts.length > 0 ? boldParts : formattedLine;

      // Handle bullet list syntax: * text
      if (line.startsWith("* ")) {
        return (
          <li key={idx} className="ml-5 list-disc text-sm my-1 text-gray-300">
            {line.substring(2)}
          </li>
        );
      }

      // Handle numbered lists: 1. text
      if (/^\d+\.\s/.test(line)) {
        const numContent = line.replace(/^\d+\.\s/, "");
        return (
          <li key={idx} className="ml-5 list-decimal text-sm my-1 text-gray-300">
            {numContent}
          </li>
        );
      }

      return (
        <p key={idx} className="text-sm my-1 text-gray-300 leading-relaxed min-h-[0.75rem]">
          {content}
        </p>
      );
    });
  };

  return (
    <section id="ai-agent" className="py-24 relative overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-4 animate-pulse-slow"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive Assistant</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Ask Pushkraj&apos;s AI Portfolio Agent
          </motion.h2>
          <p className="text-gray-400 text-sm mt-3 font-mono">
            Explore my projects, experience, skills, and role fit through an interactive AI assistant trained on this portfolio.
          </p>
        </div>

        {/* Chat Console Structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl flex flex-col h-[680px] max-h-[82vh] overflow-hidden"
        >
          {/* Top Info Bar */}
          <div className="px-4 sm:px-6 py-4 bg-white/5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/25 flex items-center justify-center">
                <Bot className="w-4.5 h-4.5 text-accent-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-mono leading-none">
                  PK-Agent_v1.0
                </h4>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Portfolio context loaded
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/15 bg-emerald-500/5 rounded-lg px-2.5 py-1 w-fit">
                {speechSupported ? (
                  <Volume2 className="w-3 h-3" />
                ) : (
                  <VolumeX className="w-3 h-3" />
                )}
                {speechSupported ? "Auto voice ready" : "Voice unavailable"}
              </span>
              {speakingMessageIndex !== null && (
                <button
                  type="button"
                  onClick={stopSpeaking}
                  aria-label="Stop voice playback"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 rounded-lg px-2.5 py-1 hover:bg-accent-cyan/10 transition-colors"
                >
                  <Square className="w-3 h-3" />
                  Stop Voice
                </button>
              )}
            </div>
          </div>

          {/* Messages Log Panel */}
          <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg, index) => {
              const isAgent = msg.sender === "agent";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-start gap-3 max-w-[94%] sm:max-w-[85%] ${
                    isAgent ? "self-start" : "self-end ml-auto flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${
                      isAgent
                        ? "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan"
                        : "bg-accent-violet/10 border-accent-violet/20 text-accent-violet"
                    }`}
                  >
                    {isAgent ? <Bot className="w-4.5 h-4.5" /> : <User className="w-4.5 h-4.5" />}
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl border text-sm leading-relaxed ${
                      isAgent
                        ? "bg-slate-900/60 border-white/5 rounded-tl-sm text-gray-300"
                        : "bg-accent-violet/10 border-accent-violet/20 rounded-tr-sm text-white"
                    }`}
                  >
                    {formatMessageText(msg.text)}
                    {isAgent && msg.text.trim() && !msg.isStreaming && (
                      <div className="mt-3 flex items-center gap-2 border-t border-white/5 pt-3">
                        <button
                          type="button"
                          onClick={() =>
                            speakingMessageIndex === index
                              ? stopSpeaking()
                              : speakMessage(msg.text, index)
                          }
                          disabled={!speechSupported}
                          aria-label={
                            speakingMessageIndex === index
                              ? "Stop reading this answer"
                              : "Read this answer aloud"
                          }
                          className="inline-flex items-center gap-1.5 rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 px-2.5 py-1.5 text-[10px] font-mono text-accent-cyan hover:bg-accent-cyan/10 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {speakingMessageIndex === index ? (
                            <Square className="w-3 h-3" />
                          ) : (
                            <Volume2 className="w-3 h-3" />
                          )}
                          {speakingMessageIndex === index ? "Stop" : "Read answer"}
                        </button>
                        {speakingMessageIndex === index && (
                          <span className="text-[10px] font-mono text-gray-500">
                            Speaking with expressive professional pacing
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-3.5 max-w-[85%]">
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center shrink-0">
                  <Bot className="w-4.5 h-4.5" />
                </div>
                <div className="p-4 rounded-2xl border bg-slate-900/60 border-white/5 rounded-tl-sm text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Question Chips Panel */}
          <div className="px-4 sm:px-6 py-3 border-t border-white/5 bg-slate-950/20">
            <span className="text-[10px] font-mono text-gray-500 block mb-2">
              Suggested Questions:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
              {PREDEFINED_QUESTIONS.map((q) => (
                <button
                  key={q.query}
                  disabled={isTyping}
                  onClick={() => void handleSendMessage(q.query)}
                  aria-label={`Ask: ${q.query}`}
                  className="shrink-0 px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-[11px] font-mono text-gray-300 hover:text-white hover:border-accent-cyan/30 hover:bg-accent-cyan/5 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none text-left"
                >
                  {q.query}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input Panel */}
          <div className="p-3 sm:p-4 bg-slate-950/40 border-t border-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void handleSendMessage(inputValue);
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void handleSendMessage(inputValue);
                  }
                }}
                disabled={isTyping}
                aria-label="Ask Pushkraj's AI portfolio agent a question"
                placeholder={isTyping ? "Agent is typing..." : "Type custom question about Pushkraj..."}
                rows={1}
                className="max-h-28 min-h-12 flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                className="p-3 min-h-12 bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-deep rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
