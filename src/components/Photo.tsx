import Image from "next/image";
import type { PhotoSlot } from "@/lib/content";

type PhotoProps = {
  photo: PhotoSlot;
  className?: string;
  labeled?: boolean;
};

export function Photo({ photo, className = "", labeled = true }: PhotoProps) {
  return (
    <div
      data-photo={photo.id}
      className={`relative overflow-hidden ${className}`}
      style={photo.src ? undefined : { backgroundColor: photo.tone }}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ) : (
        <>
          <span className="sr-only">{photo.alt}</span>
          {labeled ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-stone-700"
            >
              {photo.id}
            </span>
          ) : null}
        </>
      )}
    </div>
  );
}
