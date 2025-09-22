import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" });
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json() as {
    name: string;
    email: string;
    message: string;
  };

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = `
*Pesan Baru dari Web*:

*Nama:* ${name}
*Email:* ${email}
*Pesan:* ${message}
  `.trim();

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const result = await telegramRes.json();
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
