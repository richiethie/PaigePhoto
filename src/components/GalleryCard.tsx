import Link from "next/link";
import type { Gallery } from "@/lib/content";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

type GalleryCardProps = {
  gallery: Gallery;
  href: string;
  delay?: number;
};

export function GalleryCard({ gallery, href, delay = 0 }: GalleryCardProps) {
  const className = "group block";
  const body = (
    <>
      <Photo
        photo={gallery.photo}
        labeled={false}
        className="aspect-[4/5] w-full"
      />
      {gallery.date ? (
        <p className="mt-4 text-xs tracking-[0.18em] text-stone-500 uppercase">
          {gallery.date}
        </p>
      ) : null}
      <h3
        className={`font-serif text-3xl group-hover:underline ${gallery.date ? "mt-1" : "mt-4"}`}
      >
        {gallery.title}
      </h3>
    </>
  );

  const card = (
    <Link href={href} className={className}>
      {body}
    </Link>
  );

  return <Reveal delay={delay}>{card}</Reveal>;
}
