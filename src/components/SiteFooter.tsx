import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SocialIcon } from "@/components/SocialIcon";
import { nav, socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-20">
          <div>
            <Link href="/" className="font-serif text-4xl text-white md:text-5xl">
              Paige Rebbecca
            </Link>
            <p className="mt-3 text-sm text-stone-400">
              Plymouth, Wisconsin · lifestyle photographer
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-white/25 px-5 py-3 text-xs tracking-[0.2em] text-white uppercase hover:bg-white hover:text-stone-950"
            >
              Book a session
            </Link>
            <ul className="mt-6 flex gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-stone-200 hover:border-white hover:text-white"
                  >
                    <SocialIcon name={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="Pages" className="flex flex-wrap gap-x-1 gap-y-3 md:hidden">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-serif text-2xl leading-none text-stone-300 hover:text-white"
              >
                {item.label}
                {index < nav.length - 1 ? (
                  <span aria-hidden="true" className="ml-3 text-stone-600">
                    ·
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>
          <nav aria-label="Pages" className="hidden flex-col md:flex">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-4 border-b border-white/15 py-3 transition-colors hover:border-white/50"
              >
                <span className="w-8 font-serif text-sm text-stone-500 transition-colors group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-block font-serif text-4xl leading-none text-stone-100 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-14 border-t border-white/10 pt-6 text-xs text-stone-500">
          © 2026 Paige Rebbecca Photography
        </p>
      </Reveal>
    </footer>
  );
}
