import type { Metadata } from "next";
import {
  business,
  inquiryEmail,
  packages,
  socials,
  studioMemberships,
  studioRates,
} from "@/lib/content";

const shareImage = {
  url: "/photos/GoldenHourMinis-8559.jpg",
  alt: "A golden hour portrait session by Paige Rebbecca Photography",
};

/**
 * Prefer an explicit site address. On Vercel, the production hostname is used
 * until NEXT_PUBLIC_SITE_URL is set to the real domain. Local dev uses localhost
 * so share tags and the sitemap can be checked. A production build without either
 * address leaves absolute URLs off until the domain is set.
 */
export function getSiteUrl(): string | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    const withProtocol = /^https?:\/\//i.test(explicit)
      ? explicit
      : `https://${explicit}`;
    return withProtocol.replace(/\/$/, "");
  }

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  if (process.env.NODE_ENV === "development") return "http://localhost:3000";

  return undefined;
}

export function pageShare(
  path: string,
  title: string,
  description: string,
): Metadata {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return {};

  return {
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [shareImage],
    },
    twitter: {
      title,
      description,
      images: [shareImage.url],
    },
  };
}

export function rootMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const description =
    "Family, engagement, maternity, newborn, and wedding photographer in Plymouth, Sheboygan, Sheboygan Falls, Kohler, and Fond du Lac, Wisconsin. Studio rentals in downtown Plymouth.";

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: {
      default: "Paige Rebbecca Photography",
      template: "%s · Paige Rebbecca Photography",
    },
    description,
    ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
    openGraph: {
      title: "Paige Rebbecca Photography",
      description,
      siteName: "Paige Rebbecca Photography",
      locale: "en_US",
      type: "website",
      ...(siteUrl ? { url: "/", images: [shareImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: "Paige Rebbecca Photography",
      description,
      ...(siteUrl ? { images: [shareImage.url] } : {}),
    },
  };
}

function pricedOffer(name: string, price: string, detail: string) {
  const exact = price.match(/^\$(\d+)$/);
  return {
    "@type": "Offer",
    name,
    priceCurrency: "USD",
    ...(exact ? { price: exact[1] } : {}),
    description: exact ? detail : `${detail} ${price}`.trim(),
    itemOffered: {
      "@type": "Service",
      name,
      areaServed: business.areas,
    },
  };
}

export function localBusinessJsonLd() {
  const siteUrl = getSiteUrl();
  const sessionOffers = packages.flatMap((item) =>
    item.options.map((option) =>
      pricedOffer(
        `${item.name}: ${option.name}`,
        option.price,
        item.summary,
      ),
    ),
  );
  const studioOffers = [
    ...studioRates.map((rate) =>
      pricedOffer(rate.name, rate.price, rate.detail),
    ),
    ...studioMemberships.map((plan) =>
      pricedOffer(
        `${plan.name} studio membership`,
        plan.price.replace(/\/month$/, ""),
        `${plan.price}, ${plan.detail}`,
      ),
    ),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Paige Rebbecca Photography",
    email: inquiryEmail,
    image: siteUrl ? `${siteUrl}${shareImage.url}` : shareImage.url,
    ...(siteUrl ? { url: siteUrl } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.studioStreet,
      addressLocality: "Plymouth",
      addressRegion: "WI",
      addressCountry: "US",
    },
    areaServed: business.areas.map((name) => ({
      "@type": "City",
      name,
    })),
    serviceType: [
      "Family photography",
      "Engagement photography",
      "Maternity photography",
      "Newborn lifestyle photography",
      "Wedding photography",
      "Photography studio rental",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sessions and studio rental",
      itemListElement: [...sessionOffers, ...studioOffers],
    },
    sameAs: socials.map((item) => item.href),
  };
}
