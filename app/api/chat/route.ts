import { openai } from "@ai-sdk/openai";
import { type ModelMessage, streamText } from "ai";
import {
  buildSystemPrompt,
  getFallbackAgentResponse,
  normalizeChatMessages,
  streamPlainText,
} from "@/lib/portfolio-context";

export async function POST(req: Request) {
  try {
    const { messages = [] } = await req.json();
    const normalizedMessages = normalizeChatMessages(messages);
    const latestUserMessage =
      [...normalizedMessages].reverse().find((message) => message.role === "user")?.content ?? "";

    if (!latestUserMessage.trim()) {
      return streamPlainText("Please ask a portfolio-related question so I can help.");
    }

    // Demo mode: no real API key is stored in the repository. Create `.env.local`
    // with OPENAI_API_KEY to enable live model streaming locally or on Vercel.
    if (!process.env.OPENAI_API_KEY) {
      return streamPlainText(getFallbackAgentResponse(latestUserMessage));
    }

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: buildSystemPrompt(),
      messages: normalizedMessages as ModelMessage[],
      temperature: 0.2,
    });

    return result.toTextStreamResponse({
      headers: {
        "X-Agent-Mode": "live",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return streamPlainText(
      "AI agent is not configured yet. Please add the required API key in .env.local."
    );
  }
}
