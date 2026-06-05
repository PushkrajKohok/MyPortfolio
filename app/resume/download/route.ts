import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Pushkraj_Kohok_Resume.pdf");
  const file = await readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Pushkraj_Kohok_Resume.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
