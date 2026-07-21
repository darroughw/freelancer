import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 5;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: a hidden field real users never fill in. If it's set, silently
  // report success without sending anything, so bots don't learn it failed.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof message !== "string" || message.trim().length < MIN_MESSAGE_LENGTH) {
    return NextResponse.json(
      { ok: false, error: "Feedback message is required." },
      { status: 400 }
    );
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ ok: false, error: "Feedback is too long." }, { status: 400 });
  }
  if (typeof email === "string" && email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address doesn't look right." }, { status: 400 });
  }

  const safeName = typeof name === "string" ? name.trim().slice(0, 200) : "";
  const safeEmail = typeof email === "string" ? email.trim().slice(0, 200) : "";

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Feedback isn't wired up yet — try emailing directly instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Site Feedback <onboarding@resend.dev>",
      to: "darrough@gmail.com",
      replyTo: safeEmail || undefined,
      subject: `Site feedback${safeName ? ` from ${safeName}` : ""}`,
      text: `${safeName ? `From: ${safeName}\n` : ""}${safeEmail ? `Email: ${safeEmail}\n` : ""}\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        { ok: false, error: "Something went wrong sending that. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send feedback email", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending that. Please try again." },
      { status: 500 }
    );
  }
}
