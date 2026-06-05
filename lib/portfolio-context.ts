import { portfolioData } from "@/data/portfolio";

type ChatMessage = {
  sender?: "user" | "agent";
  role?: "user" | "assistant";
  text?: string;
  content?: string;
};

export const MISSING_INFO_MESSAGE =
  "I don't have that information in the current portfolio context.";

export function normalizeChatMessages(messages: ChatMessage[]) {
  return messages
    .map((message) => ({
      role:
        message.role === "assistant" || message.sender === "agent"
          ? ("assistant" as const)
          : ("user" as const),
      content: message.content ?? message.text ?? "",
    }))
    .filter((message) => message.content.trim().length > 0);
}

export function buildPortfolioContext() {
  const { personalInfo, education, experience, projects, skills, impactMetrics, languages } =
    portfolioData;

  return `
Personal Information:
- Name: ${personalInfo.name}
- Identity: ${personalInfo.role}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- LinkedIn: ${personalInfo.linkedin}
- GitHub: ${personalInfo.github}
- Bio: ${personalInfo.bio}
- Languages: ${languages.join(", ")}

Impact Metrics:
${impactMetrics.map((metric) => `- ${metric.value} ${metric.label}`).join("\n")}

Education:
${education
  .map(
    (item) => `- ${item.institution}, ${item.location}
  Degree: ${item.degree}
  Period: ${item.period}
  Coursework: ${item.coursework.join(", ")}
  Highlights: ${(item.highlights ?? []).join(" ")}`
  )
  .join("\n")}

Experience:
${experience
  .map(
    (item) => `- ${item.role}
  Company: ${item.company}
  Location: ${item.location}
  Period: ${item.period}
  Focus: ${item.type ?? "Portfolio experience"}
  Impact Metrics: ${item.impactMetrics.join(", ")}
  Highlights: ${item.highlights.join(" ")}
  Skills Used: ${item.skillsUsed.join(", ")}`
  )
  .join("\n")}

Projects:
${projects
  .map(
    (project) => `- ${project.title}
  Category: ${project.type}
  Description: ${project.description}
  Impact: ${project.impact}
  Metrics: ${project.metrics.join(", ")}
  Tech: ${project.techStack.join(", ")}
  Workflow: ${project.visualWorkflow.join(" -> ")}`
  )
  .join("\n")}

Skills:
${skills.map((group) => `- ${group.category}: ${group.skills.join(", ")}`).join("\n")}
`.trim();
}

export function buildSystemPrompt() {
  return `
You are Pushkraj Kohok's AI portfolio assistant.

Use only the portfolio context below to answer questions. Do not invent companies, projects, dates, skills, achievements, preferences, or personal details. If the answer is not present, say: "${MISSING_INFO_MESSAGE}"

Tone:
- Professional, confident, helpful, recruiter-friendly.
- Concise but informative.
- Use bullets when useful.
- Avoid sounding generic.
- Do not mention internal implementation details unless asked.

Behavior:
- For role-fit questions, connect Pushkraj's experience to AI/ML Engineer, Full-Stack AI Engineer, Software Engineer, Backend Engineer, and AI Product Engineer roles.
- For project questions, explain the problem solved, technologies used, impact, and why it is relevant.
- For contact questions, provide email, LinkedIn, GitHub, and phone.

Portfolio Context:
${buildPortfolioContext()}
`.trim();
}

const fallbackAnswers: Array<{ patterns: string[]; answer: string }> = [
  {
    patterns: ["who is", "who's", "about pushkraj", "profile", "background"],
    answer:
      "Pushkraj Kohok is an AI/ML Engineer and Full-Stack AI Engineer based in Chicago, currently pursuing an MS in Artificial Intelligence at Illinois Institute of Technology. His work focuses on RAG systems, multi-agent platforms, machine learning, full-stack engineering, cloud deployment, and automation.",
  },
  {
    patterns: ["medorbit"],
    answer:
      "**MedOrbit** is a healthcare AI and multi-agent clinical orchestration project. It transforms consultation transcripts into structured clinical and behavioral insights before doctor-approved patient delivery.\n\n- **Problem solved:** Helps turn unstructured clinical conversations into auditable, reviewable patient communication.\n- **Technologies used:** React, TypeScript, FastAPI, SQLAlchemy, JWT/RBAC, transcript chunking, and multi-agent orchestration.\n- **Impact:** Enabled doctor-approved patient communication using auditable AI workflows.\n- **Relevance:** It shows Pushkraj's ability to build AI systems for sensitive workflows where structure, approval, and reliability matter.",
  },
  {
    patterns: ["teachfusion"],
    answer:
      "**TeachFusion AI** is a RAG and multi-agent teaching platform that generates grounded course plans from uploaded course materials.\n\n- **Problem solved:** Helps educators use AI productively from actual course context instead of generic prompts.\n- **Technologies used:** Gemini APIs, RAG, vector search, course-material chunking, and multi-agent orchestration.\n- **Impact:** Improved lesson-planning efficiency by 30%.\n- **Relevance:** It demonstrates retrieval-grounded generation, agentic planning, and applied AI product thinking.",
  },
  {
    patterns: ["codebleed"],
    answer:
      "**CodeBleed** is an AI security and graph-based repository threat intelligence platform.\n\n- **Problem solved:** Converts repository data into explainable risk signals for faster security triage.\n- **Technologies used:** FastAPI, Neo4j, GitHub ingestion, vis.js, and graph intelligence.\n- **Impact:** Surfaced 4 key risk signals: secrets, dependencies, endpoints, and attack paths.\n- **Relevance:** It shows Pushkraj's ability to combine backend engineering, graph systems, and explainable AI workflows.",
  },
  {
    patterns: ["good fit", "why hire", "role fit", "ai/ml engineer", "full-stack ai"],
    answer:
      "Pushkraj is a strong fit for AI/ML Engineer and Full-Stack AI Engineer roles because he combines AI/ML depth with production engineering experience. He has built RAG dashboards, multi-agent platforms, ML classification systems, vector search integrations, Flask APIs, automation pipelines, and cloud-backed systems, with measurable impact such as 90% DA effort reduction, 80% faster transactions, 10x faster search, and 70% extraction accuracy improvement.",
  },
  {
    patterns: ["strongest", "projects"],
    answer:
      "His strongest projects include:\n\n- **TeachFusion AI**: a RAG and multi-agent teaching platform that generates grounded course plans from uploaded course materials.\n- **MedOrbit**: a healthcare AI system for clinical transcript intelligence and doctor-approved patient communication.\n- **CodeBleed**: a graph-based AI security analysis platform for repository threat intelligence.\n\nTogether, they show applied AI, multi-agent orchestration, retrieval, healthcare workflow design, and explainable security analysis.",
  },
  {
    patterns: ["technologies", "tech stack", "skills", "work with"],
    answer:
      "Pushkraj works with Python, TypeScript, Golang, C++, SQL, React, Next.js, FastAPI, Flask, RAG, LangChain, LLMs, vector databases, PyTorch, TensorFlow, Docker, AWS, Jenkins, and GitLab.",
  },
  {
    patterns: ["professional experience", "work experience", "jobs", "roles", "druva", "vault"],
    answer:
      "Pushkraj has experience as:\n\n- **Full-Stack AI Engineer** at Stealth Startup / The Vault, where he worked on RAG reports, instant-sell workflows, and vector search.\n- **Machine Learning Engineer** at a stealth startup, improving classification precision and extraction accuracy.\n- **Full-Stack Software Engineer** as a freelancer, building marketing automation and leading an e-commerce project.\n- **Full-Stack Software Engineer** at Druva, optimizing Flask APIs, CI/CD, pytest suites, Docker, AWS EC2, Jenkins, and GitLab workflows.\n- **Research Assistant** on an emotion analysis project using MFCCs, Praat, SVM, and Random Forest.",
  },
  {
    patterns: ["contact", "email", "phone", "linkedin", "github", "reach"],
    answer: `You can contact Pushkraj here:\n\n- Email: ${portfolioData.personalInfo.email}\n- Phone: ${portfolioData.personalInfo.phone}\n- LinkedIn: ${portfolioData.personalInfo.linkedin}\n- GitHub: ${portfolioData.personalInfo.github}`,
  },
];

export function getFallbackAgentResponse(question: string) {
  const normalizedQuestion = question.toLowerCase();
  const match = fallbackAnswers.find((item) =>
    item.patterns.some((pattern) => normalizedQuestion.includes(pattern))
  );

  if (match) return match.answer;

  return MISSING_INFO_MESSAGE;
}

export function streamPlainText(text: string) {
  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        const words = text.split(" ");
        for (let index = 0; index < words.length; index += 1) {
          controller.enqueue(encoder.encode(`${index === 0 ? "" : " "}${words[index]}`));
          await new Promise((resolve) => setTimeout(resolve, 24));
        }
        controller.close();
      },
    }),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Agent-Mode": process.env.OPENAI_API_KEY ? "fallback" : "demo",
      },
    }
  );
}
