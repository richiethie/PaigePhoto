"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/SocialIcon";
import { nav, socials } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = !onHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const linkClass = solid
    ? "text-stone-700 hover:text-stone-950"
    : "text-white/90 hover:text-white";

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? "bg-[#f3efe8]/95 text-stone-950 backdrop-blur" : "text-white"
      } ${open ? "border-b border-stone-300/80" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="leading-tight">
          <span className="block font-serif text-lg tracking-[0.14em] uppercase sm:text-xl">
            Paige Rebbecca
          </span>
          <span
            className={`block text-[10px] tracking-[0.28em] uppercase ${
              solid ? "text-stone-500" : "text-white/75"
            }`}
          >
            Photography
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs tracking-[0.18em] uppercase lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`rounded-full px-4 py-2 ${
              solid
                ? "bg-stone-950 text-white hover:bg-stone-800"
                : "bg-white text-stone-950 hover:bg-stone-100"
            }`}
          >
            Book
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </header>

      {open ? (
        <div
          id="mobile-nav"
          className="menu-in fixed inset-0 z-40 flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#f3efe8] px-6 pt-24 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-stone-950 lg:hidden"
        >
          <nav className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto">
            {nav.map((item, index) => {
              const current = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="flex items-baseline gap-4 border-b border-stone-300/80 py-3"
                >
                  <span className="w-8 font-serif text-sm text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif text-5xl leading-none ${
                      current ? "text-stone-950" : "text-stone-800"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="shrink-0 pt-5">
            <Link
              href="/contact"
              className="block bg-stone-950 px-5 py-4 text-center text-xs tracking-[0.2em] text-white uppercase"
            >
              Book a session
            </Link>
            <ul className="mt-4 flex justify-center gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-stone-300 text-stone-800"
                  >
                    <SocialIcon name={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
