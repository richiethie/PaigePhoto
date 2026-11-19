import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Family, couples, wedding, children, and portrait photographs by Paige Carey in Plymouth, Wisconsin.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-28 pb-20">
      <Reveal className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
          The work
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-6xl leading-tight">
          Portfolio
        </h1>
        <p className="mt-6 max-w-xl leading-7 text-stone-600">
          Families, couples and weddings, children, and portraits. The
          photographs live on this page.
        </p>
      </Reveal>

      <nav className="sticky top-20 z-30 mt-10 border-y border-stone-300/80 bg-[#f3efe8]/95 backdrop-blur">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4 text-xs tracking-[0.2em] uppercase sm:px-8">
          {portfolio.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="whitespace-nowrap hover:text-stone-500">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {portfolio.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto max-w-6xl scroll-mt-36 px-5 py-16 sm:px-8"
        >
          <Reveal>
            <h2 className="font-serif text-5xl">{section.title}</h2>
            <p className="mt-3 max-w-xl text-stone-600">{section.text}</p>
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {section.galleries.flatMap((gallery) => gallery.photos).map((photo, index) => (
              <Reveal key={photo.id} delay={(index % 3) * 80}>
                <Photo
                  photo={photo}
                  labeled={false}
                  className="aspect-[4/5] w-full"
                />
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
