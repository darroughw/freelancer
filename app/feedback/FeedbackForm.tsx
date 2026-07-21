"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: data.get("company"),
    };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return <p className="feedback-success">Thanks — got it. Appreciate you taking the time.</p>;
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit} noValidate>
      <div className="feedback-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" />
      </div>

      <div className="feedback-field">
        <label htmlFor="email">
          Email <span className="feedback-optional">(optional, if you want a reply)</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="feedback-field">
        <label htmlFor="message">What&apos;s on your mind?</label>
        <textarea id="message" name="message" required rows={6} />
      </div>

      {/* Honeypot — hidden from real users; bots that fill every field trip it. */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="feedback-error" role="alert">{errorMsg}</p>
      )}

      <button type="submit" className="feedback-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send feedback"}
      </button>
    </form>
  );
}
