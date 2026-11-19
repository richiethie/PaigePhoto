"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";
import { Photo } from "@/components/Photo";

const SLIDE_MS = 4000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [motionOk, setMotionOk] = useState(true);
  const [cycling, setCycling] = useState(false);
  const slide = heroSlides[index];
  const upcoming = heroSlides[(index + 1) % heroSlides.length];
  const earlier = heroSlides[(index - 1 + heroSlides.length) % heroSlides.length];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!motionOk) return;
    const timer = window.setTimeout(() => {
      setCycling(true);
      setIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, motionOk]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured photographs"
      className="relative overflow-x-hidden bg-[#241c18] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,236,214,0.16),transparent_36%)]" />
      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-10 px-5 pt-28 pb-8 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="hero-rise">
          <p className="text-xs tracking-[0.32em] text-white/70 uppercase">
            Plymouth, Wisconsin
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Lasting memories, still close enough to feel.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
            Natural, warm, light and airy photographs of families, couples,
            maternity, newborns, and milestones in Plymouth and nearby.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="bg-[#f3efe8] px-5 py-3 text-xs tracking-[0.2em] text-stone-950 uppercase"
            >
              View the work
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 px-5 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white/10"
            >
              Book a session
            </Link>
          </div>
        </div>

        <div className="hero-rise hero-rise-late relative w-full sm:pr-10">
          <figure className="absolute top-7 right-0 hidden w-[80%] rotate-2 bg-[#ddd6cb] p-3 pb-10 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:block">
            <Photo
              photo={upcoming}
              labeled={false}
              className="aspect-[4/5] w-full brightness-[0.78]"
            />
          </figure>
          <figure className="relative bg-[#f3efe8] p-3 pb-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[90%]">
            <div className="relative aspect-[4/5] w-full">
              {cycling ? (
                <div className="absolute inset-0">
                  <Photo photo={earlier} labeled={false} className="h-full w-full" />
                </div>
              ) : null}
              <div
                key={slide.id}
                className={cycling ? "hero-swap absolute inset-0" : "absolute inset-0"}
              >
                <Photo photo={slide} labeled={false} className="h-full w-full" />
              </div>
            </div>
          </figure>
        </div>
        </div>
      </div>
    </section>
  );
}
