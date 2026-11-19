import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { MotionRoot } from "@/components/MotionRoot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { localBusinessJsonLd, rootMetadata } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f3efe8] font-sans text-stone-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <SiteHeader />
        <MotionRoot>
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </MotionRoot>
      </body>
    </html>
  );
}
