import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import {
  business,
  studioIncludes,
  studioMemberships,
  studioNotes,
  studioPhotos,
  studioRates,
} from "@/lib/content";
import { pageShare } from "@/lib/site";

const title = "Photography studio rental in Plymouth, WI";
const description =
  "Rent the Paige Rebbecca Photography studio at 411 E Mill Street in downtown Plymouth, Wisconsin. One-time rentals are $75 for 3 hours, with monthly memberships available.";

export const metadata: Metadata = {
  title,
  description,
  ...pageShare("/studio", title, description),
};

export default function StudioPage() {
  const [lead, ...rest] = studioPhotos;

  return (
    <main className="px-5 pt-28 pb-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-stone-500 uppercase">
            Studio rentals & memberships
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-6xl leading-tight">
            A creative space in downtown Plymouth.
          </h1>
          <p className="mt-6 max-w-xl leading-7 text-stone-600">
            The studio at {business.studioStreet}, {business.studioCity}, is
            open to photographers, content creators, and anyone who wants to
            take their own photos. It is warm, light, and airy, with natural
            light and a variety of backdrops, furniture, props, and seasonal
            setups.
          </p>
          <Link
            href="/contact?topic=studio"
            className="mt-8 inline-block bg-stone-950 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase"
          >
            Inquire about availability
          </Link>
        </Reveal>
        <Reveal delay={90}>
          <Photo photo={lead} className="aspect-[4/5] w-full" />
        </Reveal>
      </div>

      <section className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2">
        {rest.map((photo, index) => (
          <Reveal key={photo.id} delay={index * 80}>
            <Photo photo={photo} className="aspect-[4/3] w-full" />
          </Reveal>
        ))}
      </section>

      <Reveal className="mx-auto mt-20 max-w-6xl">
        <h2 className="font-serif text-5xl">One-time studio rentals</h2>
        <p className="mt-4 max-w-xl leading-7 text-stone-600">
          A single visit, with no monthly commitment.
        </p>
        <div className="mt-8 divide-y divide-stone-300/80 border-y border-stone-300/80">
          {studioRates.map((rate) => (
            <div
              key={rate.name}
              className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <div>
                <h3 className="font-serif text-3xl">{rate.name}</h3>
                <p className="text-sm text-stone-500">{rate.detail}</p>
              </div>
              <p className="text-sm tracking-[0.16em] uppercase">{rate.price}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-20 max-w-6xl">
        <h2 className="font-serif text-5xl">Monthly memberships</h2>
        <p className="mt-4 max-w-xl leading-7 text-stone-600">
          Regular access at a lower rate, if you want the studio without
          leasing a space of your own.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {studioMemberships.map((plan) => (
            <div key={plan.name} className="border border-stone-300/80 p-6">
              <h3 className="font-serif text-3xl">{plan.name}</h3>
              <p className="mt-3 text-sm tracking-[0.16em] uppercase">
                {plan.price}
              </p>
              <p className="mt-4 leading-7 text-stone-600">{plan.detail}</p>
              <p className="mt-4 text-sm leading-6 text-stone-500">
                Includes available backdrops, furniture, and props, with
                scheduling based on availability.
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-serif text-4xl">The space</h2>
          <ul className="mt-5 space-y-3 leading-7 text-stone-700">
            {studioIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-serif text-4xl">A few things to know</h2>
          <ul className="mt-5 space-y-3 leading-7 text-stone-700">
            {studioNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal className="mx-auto mt-20 max-w-6xl border-t border-stone-300/80 pt-12">
        <h2 className="font-serif text-5xl">Interested in renting?</h2>
        <p className="mt-4 max-w-xl leading-7 text-stone-600">
          Whether you want one visit or a membership, Paige can check
          availability and answer questions by email.
        </p>
        <Link
          href="/contact?topic=studio"
          className="mt-8 inline-block bg-stone-950 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase"
        >
          Contact Paige
        </Link>
      </Reveal>
    </main>
  );
}
