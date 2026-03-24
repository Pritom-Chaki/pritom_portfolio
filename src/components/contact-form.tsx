"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [source, setSource] = useState("direct");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const s = searchParams.get("source");
    if (s) setSource(s);
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors"
          style={{
            borderColor: "var(--bdr)",
            backgroundColor: "var(--card-bg)",
            color: "var(--fg)",
          }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors"
          style={{
            borderColor: "var(--bdr)",
            backgroundColor: "var(--card-bg)",
            color: "var(--fg)",
          }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your message..."
          className="w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors resize-vertical"
          style={{
            borderColor: "var(--bdr)",
            backgroundColor: "var(--card-bg)",
            color: "var(--fg)",
          }}
        />
      </div>

      {source !== "direct" && (
        <p className="text-xs" style={{ color: "var(--muted-fg)" }}>
          Source: {source}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center"
        style={{ opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-center font-medium" style={{ color: "var(--primary)" }}>
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-center font-medium" style={{ color: "#ef4444" }}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
