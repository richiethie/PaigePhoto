import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { business, faqs, packages, servicesPhoto, travelNote } from "@/lib/content";
import { pageShare } from "@/lib/site";

const title = "Family, maternity, and newborn photographer in Plymouth, WI";
const description =
  "Family, engagement, maternity, newborn lifestyle, and wedding photography in Plymouth, Sheboygan, Sheboygan Falls, Kohler, and Fond du Lac, Wisconsin. Prices are listed for each session.";

export const metadata: Metadata = {
  title,
  description,
  ...pageShare("/services", title, description),
};

const serviceFaqs = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqs) }}
      />
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
            Services & pricing
          </p>
          <h1 className="mt-3 font-serif text-6xl leading-tight">
            Natural, warm, light photography.
          </h1>
          <p className="mt-6 max-w-xl leading-7 text-stone-600">
            Outdoor, in-studio, and in-home sessions in Plymouth and the
            surrounding area. Each price is listed with the session. Booking
            starts with a note to Paige.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <Photo photo={servicesPhoto} className="aspect-[4/5] w-full" />
        </Reveal>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <div className="divide-y divide-stone-300/80 border-y border-stone-300/80">
          {packages.map((item, index) => (
            <Reveal
              key={item.name}
              delay={(index % 2) * 60}
              className="grid gap-8 py-12 md:grid-cols-[220px_1fr] md:items-start"
            >
              <Photo photo={item.photo} labeled={false} className="aspect-[4/5] w-full" />
              <div>
                <h2 className="font-serif text-4xl">{item.name}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-stone-600">
                  {item.summary}
                </p>
                <ul className="mt-5 divide-y divide-stone-300/80 border-y border-stone-300/80">
                  {item.options.map((option) => (
                    <li
                      key={option.name}
                      className="grid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:items-baseline"
                    >
                      <p>{option.name}</p>
                      <p className="text-sm tracking-[0.16em] uppercase">
                        {option.price}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-block text-xs tracking-[0.2em] uppercase underline"
                >
                  Book a session
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto mt-16 max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif text-4xl">Where Paige photographs</h2>
        <div className="mt-4 space-y-4 leading-7 text-stone-600">
          <p>
            Paige photographs families, couples, maternity, newborns, and
            milestones in Plymouth, Sheboygan, Sheboygan Falls, Kohler, and
            Fond du Lac, and in the communities around them. Sessions happen
            outdoors, at your home, or in the studio at {business.studioStreet}{" "}
            in downtown Plymouth. That same studio can be rented when she is
            not photographing in it.
          </p>
          <p>{travelNote}</p>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-3xl px-5 sm:px-8">
        <h2 className="font-serif text-4xl">Questions</h2>
        <div className="mt-6 divide-y divide-stone-300/80 border-y border-stone-300/80">
          {faqs.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="cursor-pointer list-none font-medium">
                {item.question}
              </summary>
              <p className="pt-3 leading-7 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
