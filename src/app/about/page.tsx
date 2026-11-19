import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { aboutPhoto, business } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Paige Carey is a mom of four and the photographer behind Paige Rebbecca Photography in Plymouth, Wisconsin.",
};

export default function AboutPage() {
  return (
    <main className="px-5 pt-28 pb-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Photo photo={aboutPhoto} className="aspect-[4/5] w-full" />
        </Reveal>
        <Reveal delay={90}>
          <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
            Let’s get to know each other
          </p>
          <h1 className="mt-3 font-serif text-6xl">Hi, I’m Paige.</h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-stone-600">
            <p>
              I’m Paige, a mom of four, and I love making photographs that feel
              natural, warm, and genuine rather than overly posed.
            </p>
            <p>
              Families, couples, maternity, newborns, and milestones are all
              welcome. Every session is meant to feel comfortable, relaxed, and
              easy to be in.
            </p>
            <p>
              The studio is in downtown {business.studioCity}, at{" "}
              {business.studioStreet}. I also love photographing outdoors and
              in your home, around {business.location}.
            </p>
            <p>
              I want you to look back years from now and remember exactly how
              the moment felt.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-stone-950 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase"
          >
            Contact Paige
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
