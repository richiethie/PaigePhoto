"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { inquiryEmail } from "@/lib/content";

const studioMessage = `I'd like to rent the studio.

One-time rental or membership:
Preferred date:
Hours:
What I'm using the space for:`;

export function ContactForm() {
  const topic = useSearchParams().get("topic");
  const studioRental = topic === "studio";
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim();
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subjectLine = studioRental
      ? `Studio rental inquiry from ${name}`
      : `Session inquiry from ${name}`;

    if (inquiryEmail) {
      const subject = encodeURIComponent(subjectLine);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${inquiryEmail}?subject=${subject}&body=${body}`;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <Reveal delay={90} className="bg-white p-8">
        <h2 className="font-serif text-4xl">Thank you.</h2>
        <p className="mt-4 leading-7 text-stone-600">
          {inquiryEmail
            ? "Your email app should open with this note. Paige replies within 24–48 hours."
            : "This preview keeps your note on the page only. Instagram is the way to reach Paige until an email address is added to the form."}
        </p>
      </Reveal>
    );
  }

  return (
    <Reveal delay={90}>
    <form onSubmit={onSubmit} className="grid gap-5 bg-white p-6 sm:p-8">
      {studioRental ? (
        <p className="text-xs tracking-[0.18em] text-stone-500 uppercase">
          Studio rental inquiry
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs tracking-[0.16em] uppercase text-stone-500">
          First name
          <input
            name="firstName"
            required
            autoComplete="given-name"
            className="border border-stone-200 px-3 py-3 text-base tracking-normal text-stone-950 normal-case"
          />
        </label>
        <label className="grid gap-2 text-xs tracking-[0.16em] uppercase text-stone-500">
          Last name
          <input
            name="lastName"
            required
            autoComplete="family-name"
            className="border border-stone-200 px-3 py-3 text-base tracking-normal text-stone-950 normal-case"
          />
        </label>
      </div>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase text-stone-500">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="border border-stone-200 px-3 py-3 text-base tracking-normal text-stone-950 normal-case"
        />
      </label>
      <label className="grid gap-2 text-xs tracking-[0.16em] uppercase text-stone-500">
        Message
        <textarea
          name="message"
          required
          rows={6}
          defaultValue={studioRental ? studioMessage : undefined}
          className="border border-stone-200 px-3 py-3 text-base tracking-normal text-stone-950 normal-case"
        />
      </label>
      <button
        type="submit"
        className="justify-self-start bg-stone-950 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase"
      >
        Send message
      </button>
      {inquiryEmail ? null : (
        <p className="text-sm leading-6 text-stone-500">
          The form is ready for an email address. Until then, Instagram is the
          live way to reach Paige.
        </p>
      )}
    </form>
    </Reveal>
  );
}
