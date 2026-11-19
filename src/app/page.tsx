import Link from "next/link";
import { GalleryCard } from "@/components/GalleryCard";
import { Hero } from "@/components/Hero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import {
  collage,
  featuredGalleries,
  highlights,
  philosophyPhotos,
  socials,
  testimonials,
} from "@/lib/content";
const collageHeights = [
  "h-64",
  "h-80",
  "h-72",
  "h-56",
  "h-80",
  "h-64",
  "h-72",
  "h-56",
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="overflow-hidden border-y border-stone-300/70 py-4">
        <div className="ticker-track flex w-max">
          {Array.from({ length: 2 }).map((_, copy) => (
            <p
              key={copy}
              className="px-4 text-xs tracking-[0.28em] text-stone-500 uppercase"
            >
              {"Families  ·  Couples  ·  Maternity  ·  Newborns  ·  Milestones  ·  Weddings  ·  ".repeat(
                4,
              )}
            </p>
          ))}
        </div>
      </section>

      <section id="work" className="scroll-mt-24 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-xs tracking-[0.32em] uppercase">Selected works</h2>
            <Link
              href="/portfolio"
              className="text-xs tracking-[0.2em] uppercase underline"
            >
              Full portfolio
            </Link>
          </Reveal>
          <div className="mt-8 columns-2 gap-4 md:columns-4">
            {collage.map((photo, index) => (
              <Reveal
                key={photo.id}
                delay={(index % 4) * 70}
                className={`mb-4 break-inside-avoid ${collageHeights[index]}`}
              >
                <Photo photo={photo} className="h-full w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {featuredGalleries.map(({ gallery, sectionId }, index) => (
          <GalleryCard
            key={gallery.id}
            gallery={gallery}
            href={`/portfolio#${sectionId}`}
            delay={(index % 3) * 80}
          />
        ))}
      </section>

      <section className="bg-stone-950 px-5 py-16 text-stone-100 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
            <figure>
              <blockquote className="text-sm leading-7 text-stone-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase">
                {item.name}
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="grid grid-cols-2 gap-4">
          {philosophyPhotos.map((photo, index) => (
            <Photo
              key={photo.id}
              photo={photo}
              className={`w-full ${index === 0 ? "mt-10 aspect-[3/4]" : "aspect-[3/4]"}`}
            />
          ))}
        </Reveal>
        <Reveal delay={90}>
          <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
            My philosophy
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Lasting memories through breathtaking, soulful imagery
          </h2>
          <div className="mt-6 space-y-4 leading-7 text-stone-600">
            <p>
              Photography is about more than taking beautiful pictures. It’s
              about preserving the feeling of a moment. The quiet smiles, the
              tiny details, the love, the laughter, and everything in between.
            </p>
            <p>
              The goal is images that feel natural, heartfelt, and timeless —
              families, couples, milestones, and ordinary days that still look
              like you.
            </p>
            <p>
              Every session is relaxed and centered on connection, so years
              from now you can remember exactly how this season felt.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-block bg-stone-700 px-5 py-3 text-xs tracking-[0.2em] text-white uppercase hover:bg-stone-800"
          >
            Learn more
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-b border-stone-300/80 md:border-b-0">
        <div className="mx-auto grid max-w-6xl divide-y divide-stone-300/80 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 70}
              className="border-stone-300/80 md:border-l"
            >
            <Link href={item.href} className="block px-6 py-10">
              <p className="font-serif text-4xl text-stone-400">{item.number}</p>
              <h3 className="mt-6 font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-300/80 px-5 py-16 text-center sm:px-8">
        <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
          Instagram
        </p>
        <h2 className="mt-3 font-serif text-5xl">Recent sessions</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-600">
          New photographs go up on Instagram between gallery updates.
        </p>
        <a
          href={socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block border border-stone-950 px-6 py-3 text-xs tracking-[0.2em] uppercase"
        >
          Follow on Instagram
        </a>
      </section>

      <Reveal className="px-5 py-24 text-center sm:px-8">
        <h2 className="font-serif text-6xl">Let’s connect</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-600">
          Paige would love to hear what you’re hoping to remember. Availability,
          pricing, and the shape of the session all start with a note.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-stone-950 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase"
        >
          Get in touch
        </Link>
      </Reveal>
    </main>
  );
}
