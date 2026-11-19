import type { Metadata } from "next";
import { Suspense } from "react";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { business, contactPhoto, inquiryEmail, socials } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Paige Carey to book a session or ask about the Plymouth, Wisconsin studio.",
};

export default function ContactPage() {
  return (
    <main className="px-5 pt-28 pb-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.1fr]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
            Let’s begin your story together
          </p>
          <h1 className="mt-3 font-serif text-6xl">Contact Paige</h1>
          <p className="mt-6 leading-7 text-stone-600">
            Tell Paige what you want to remember, or ask about a studio rental.
            She replies by email, usually within 24–48 hours.
          </p>
          <a
            href={`mailto:${inquiryEmail}`}
            className="mt-6 inline-block text-sm underline"
          >
            {inquiryEmail}
          </a>
          <p className="mt-4 text-sm leading-6 text-stone-500">
            {business.location}
            <br />
            Studio: {business.studioStreet}, {business.studioCity}
          </p>
          <Photo photo={contactPhoto} className="mt-8 aspect-[4/5] w-full" />
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.18em] uppercase">
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Suspense fallback={<div className="min-h-80 bg-white" />}>
          <ContactForm />
        </Suspense>
      </div>
    </main>
  );
}
