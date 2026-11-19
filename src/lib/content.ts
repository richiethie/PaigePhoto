export type PhotoSlot = {
  id: string;
  alt: string;
  /**
   * Leave unset for a colored placeholder.
   * To use a real photo, add the file under public/photos and set this to its path,
   * for example "/photos/hero-1.jpg".
   */
  src?: string;
  tone: string;
};

export const inquiryEmail = "paigerebbeccaphotography@gmail.com";

export const business = {
  location: "Plymouth, WI and surrounding areas",
  studioStreet: "411 E Mill Street",
  studioCity: "Plymouth, Wisconsin",
  areas: [
    "Plymouth, WI",
    "Sheboygan, WI",
    "Sheboygan Falls, WI",
    "Kohler, WI",
    "Fond du Lac, WI",
  ],
};

export const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/paigerebbeccaphotography",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/17NCsMeij1/?mibextid=wwXIfr",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@paigerebbeccaphotography",
  },
];

export const nav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export const studioPhotos: PhotoSlot[] = [
  {
    id: "studio-window",
    alt: "Studio window dressed with a Christmas tree and sofa",
    tone: "#d7c4b0",
    src: "/photos/Facetune_08-11-2026-16-51-24.jpeg",
  },
  {
    id: "studio-corner",
    alt: "Backdrop corner with a bench and wreaths",
    tone: "#a89080",
    src: "/photos/Facetune_08-11-2026-16-51-41.jpeg",
  },
];

export const studioRates = [
  {
    name: "One-time rental",
    price: "$75",
    detail: "3 hours. For photographers, content creators, or anyone who wants the space without a monthly commitment.",
  },
];

export const studioMemberships = [
  {
    name: "Starter",
    price: "$65/month",
    detail: "3 hours of studio access per month",
  },
  {
    name: "Creator",
    price: "$110/month",
    detail: "6 hours of studio access per month, with extra hours at a discounted rate",
  },
  {
    name: "Professional",
    price: "$175/month",
    detail: "10 hours of studio access per month, with extra hours at a discounted rate",
  },
];

export const studioIncludes = [
  "A warm, light, and airy room in downtown Plymouth",
  "Natural light",
  "Backdrops, furniture, props, and seasonal setups",
  "Flexible scheduling based on availability",
];

export const studioNotes = [
  "Studio rentals are available by appointment only.",
  "Monthly memberships require an initial two-month commitment.",
  "Membership hours can be split between bookings, with a one-hour minimum.",
  "Unused membership hours do not roll over to the next month.",
  "Additional hours are $20 an hour for members.",
  "All bookings depend on studio availability.",
  "Renters may bring their own clients, photographer, or creative team.",
  "The studio must be returned to its original condition after each rental.",
  "A signed rental agreement is required, and commercial renters must carry liability insurance.",
];

export const heroSlides: PhotoSlot[] = [
  {
    id: "hero-1",
    alt: "A family portrait among fall trees",
    tone: "#8fa08a",
    src: "/photos/Jake&NicoleFallFamilyPhotos-7475.jpg",
  },
  {
    id: "hero-2",
    alt: "A portrait in a flower field at sunset",
    tone: "#d7b48a",
    src: "/photos/AlexFlowerField-25.jpg",
  },
  {
    id: "hero-3",
    alt: "A couple walking along the shore",
    tone: "#c4a4a0",
    src: "/photos/Pricilla&Michael-42.jpg",
  },
  {
    id: "hero-4",
    alt: "A girl with her horse in open country",
    tone: "#b7a394",
    src: "/photos/Agirlandherhorse-6.jpg",
  },
];

export const collage: PhotoSlot[] = [
  {
    id: "still-1",
    alt: "A mother holding her daughter in a wildflower field",
    tone: "#cbbba8",
    src: "/photos/Emily&Callipicnicminis-9.jpg",
  },
  {
    id: "still-2",
    alt: "Two friends walking through golden grass",
    tone: "#d7b48a",
    src: "/photos/GoldenHourMinis-8559.jpg",
  },
  {
    id: "still-3",
    alt: "A mother and daughter smiling together",
    tone: "#8fa08a",
    src: "/photos/Emily&Callipicnicminis-6.jpg",
  },
  {
    id: "still-4",
    alt: "A girl sitting on her horse in a field",
    tone: "#c4a4a0",
    src: "/photos/Agirlandherhorse-19.jpg",
  },
  {
    id: "still-5",
    alt: "A close portrait beside a horse",
    tone: "#9a846c",
    src: "/photos/Agirlandherhorse-8.jpg",
  },
  {
    id: "still-6",
    alt: "A family standing in tall grass",
    tone: "#b7c0b2",
    src: "/photos/Jake&NicoleFallFamilyPhotos-6792.jpg",
  },
  {
    id: "still-7",
    alt: "A wedding dress and veil, close up",
    tone: "#a89080",
    src: "/photos/Jarod&Kat-4631.jpg",
  },
  {
    id: "still-8",
    alt: "A child sitting on driftwood at the beach",
    tone: "#d7c4b0",
    src: "/photos/Vals3rdBirthday-0427.jpg",
  },
];

export type GalleryPhoto = PhotoSlot & {
  src: string;
  width: number;
  height: number;
};

export type Gallery = {
  id: string;
  title: string;
  date?: string;
  featured?: boolean;
  photo: PhotoSlot;
  photos: GalleryPhoto[];
};

function galleryPhoto(
  file: string,
  alt: string,
  width: number,
  height: number,
): GalleryPhoto {
  return {
    id: file.replace(/\.[^.]+$/, ""),
    alt,
    tone: "#cbbba8",
    src: `/photos/${file}`,
    width,
    height,
  };
}

export type PortfolioSection = {
  id: string;
  title: string;
  text: string;
  galleries: Gallery[];
};

export const portfolio: PortfolioSection[] = [
  {
    id: "families",
    title: "Families",
    text: "Households, fall minis, and the people you go home with.",
    galleries: [
      {
        id: "jake-nicole",
        title: "Jake & Nicole",
        featured: true,
        photo: {
          id: "gallery-jake",
          alt: "Jake and Nicole with their children in fall trees",
          tone: "#8fa08a",
          src: "/photos/Jake&NicoleFallFamilyPhotos-7475.jpg",
        },
        photos: [
          galleryPhoto("Jake&NicoleFallFamilyPhotos-7475.jpg", "Jake and Nicole with their children in fall trees", 1024, 1536),
          galleryPhoto("Jake&NicoleFallFamilyPhotos-6792.jpg", "Jake and Nicole’s family standing in tall grass", 1024, 1536),
          galleryPhoto("Jake&NicoleFallFamilyPhotos-6926.jpg", "A photo from Jake and Nicole’s family session", 1024, 683),
          galleryPhoto("Jake&NicoleFallFamilyPhotos-7178.jpg", "A photo from Jake and Nicole’s family session", 1024, 683),
        ],
      },
      {
        id: "emily-calli",
        title: "Emily & Calli",
        photo: {
          id: "gallery-emily",
          alt: "Emily and Calli hugging in a wildflower field",
          tone: "#cbbba8",
          src: "/photos/Emily&Callipicnicminis-6.jpg",
        },
        photos: [
          galleryPhoto("Emily&Callipicnicminis-6.jpg", "Emily and Calli hugging in a wildflower field", 1024, 1536),
          galleryPhoto("Emily&Callipicnicminis-9.jpg", "Emily holding Calli in a wildflower field", 1024, 1536),
          galleryPhoto("Emily&Callipicnicminis-14.jpg", "Calli playing beside Emily at sunset", 1024, 1536),
          galleryPhoto("Emily&Callipicnicminis-10.jpg", "Emily and Calli on a picnic blanket", 1024, 683),
          galleryPhoto("Emily&Callipicnicminis-8.jpg", "A photo from Emily and Calli’s picnic session", 1024, 683),
          galleryPhoto("Emily&Callipicnicminis.jpg", "A photo from Emily and Calli’s picnic session", 1024, 683),
        ],
      },
      {
        id: "salena-perry",
        title: "Salena & Perry",
        photo: {
          id: "gallery-salena",
          alt: "A baby on a blanket in front of an old truck",
          tone: "#b7c0b2",
          src: "/photos/Salena&PerryFamilyPhotos-6001.jpg",
        },
        photos: [
          galleryPhoto("Salena&PerryFamilyPhotos-6001.jpg", "A baby on a blanket in front of an old truck", 1024, 683),
          galleryPhoto("Salena&PerryFamilyPhotos-6118.jpg", "A photo from Salena and Perry’s family session", 1024, 683),
          galleryPhoto("Salena&PerryFamilyPhotos-6147.jpg", "A photo from Salena and Perry’s family session", 1024, 683),
        ],
      },
      {
        id: "mom-kids-minis",
        title: "Mom & Kids Fall Minis",
        date: "September 27, 2026",
        photo: {
          id: "gallery-minis",
          alt: "A mom and her kids at a fall mini session",
          tone: "#d7b48a",
          src: "/photos/Mom&KidsFallMinis-2934.jpg",
        },
        photos: [
          galleryPhoto("Mom&KidsFallMinis-2934.jpg", "A mom and her kids at a fall mini session", 1024, 683),
        ],
      },
    ],
  },
  {
    id: "couples",
    title: "Couples & weddings",
    text: "Engagements, couples, and wedding days.",
    galleries: [
      {
        id: "pricilla-michael",
        title: "Pricilla & Michael",
        featured: true,
        photo: {
          id: "gallery-pricilla",
          alt: "Pricilla and Michael embracing",
          tone: "#c4a4a0",
          src: "/photos/Pricilla&Michael-91.jpg",
        },
        photos: [
          galleryPhoto("Pricilla&Michael-91.jpg", "Pricilla and Michael embracing", 1024, 1536),
          galleryPhoto("Pricilla&Michael-16.jpg", "Pricilla and Michael on a sandy path", 1024, 1536),
          galleryPhoto("Pricilla&Michael-42.jpg", "Pricilla and Michael walking along the shore", 1024, 1536),
          galleryPhoto("Pricilla&Michael-99.jpg", "A photo from Pricilla and Michael’s session", 1024, 1536),
          galleryPhoto("Pricilla&Michael-121.jpg", "Pricilla and Michael’s hands reaching toward each other", 1024, 683),
          galleryPhoto("Pricilla&Michael-18.jpg", "A photo from Pricilla and Michael’s session", 1024, 683),
          galleryPhoto("Pricilla&Michael-55.jpg", "A photo from Pricilla and Michael’s session", 1024, 683),
          galleryPhoto("Pricilla&Michael-66.jpg", "A photo from Pricilla and Michael’s session", 1024, 683),
          galleryPhoto("Pricilla&Michael-116.jpg", "A photo from Pricilla and Michael’s session", 1024, 683),
          galleryPhoto("Pricilla&Michael-118.jpg", "A photo from Pricilla and Michael’s session", 1024, 683),
        ],
      },
      {
        id: "jarod-kat",
        title: "Jarod & Kat",
        featured: true,
        photo: {
          id: "gallery-jarod",
          alt: "Jarod and Kat kissing under a wedding veil",
          tone: "#8d735f",
          src: "/photos/Jarod&Kat-5470.jpg",
        },
        photos: [
          galleryPhoto("Jarod&Kat-5470.jpg", "Jarod and Kat kissing under a wedding veil", 1024, 1536),
          galleryPhoto("Jarod&Kat-4868.jpg", "Jarod and Kat kissing in a doorway", 1024, 1536),
          galleryPhoto("Jarod&Kat-4963.jpg", "A photo from Jarod and Kat’s wedding", 1024, 1536),
          galleryPhoto("Jarod&Kat-4631.jpg", "The back of Kat’s wedding dress and veil", 1024, 683),
          galleryPhoto("Jarod&Kat-4996.jpg", "A photo from Jarod and Kat’s wedding", 1024, 683),
          galleryPhoto("Jarod&Kat-5666.jpg", "A photo from Jarod and Kat’s wedding", 1024, 683),
        ],
      },
    ],
  },
  {
    id: "children",
    title: "Children",
    text: "Birthdays, children’s portraits, and milestone sessions.",
    galleries: [
      {
        id: "vals-birthday",
        title: "Val’s 3rd Birthday",
        featured: true,
        photo: {
          id: "gallery-val",
          alt: "Val with her birthday cake on the beach",
          tone: "#d7c4b0",
          src: "/photos/Vals3rdBirthday-0669.jpg",
        },
        photos: [
          galleryPhoto("Vals3rdBirthday-0669.jpg", "Val with her birthday cake on the beach", 1024, 1536),
          galleryPhoto("Vals3rdBirthday-0543.jpg", "Val smiling on a sandy path", 1024, 1536),
          galleryPhoto("Vals3rdBirthday-0489.jpg", "A photo from Val’s third birthday", 1024, 1536),
          galleryPhoto("Vals3rdBirthday-0829.jpg", "A photo from Val’s third birthday", 1024, 1536),
          galleryPhoto("Vals3rdBirthday-0427.jpg", "Val sitting on driftwood at the beach", 1024, 683),
        ],
      },
      {
        id: "girl-and-her-horse",
        title: "A Girl and Her Horse",
        featured: true,
        photo: {
          id: "gallery-horse",
          alt: "A girl resting her hand on her horse",
          tone: "#b7a394",
          src: "/photos/Agirlandherhorse-6.jpg",
        },
        photos: [
          galleryPhoto("Agirlandherhorse-6.jpg", "A girl resting her hand on her horse", 1024, 1536),
          galleryPhoto("Agirlandherhorse-8.jpg", "A close portrait beside a horse", 1024, 1536),
          galleryPhoto("Agirlandherhorse-42.jpg", "A photo from a girl and her horse", 1024, 1536),
          galleryPhoto("Agirlandherhorse-19.jpg", "A girl sitting on her horse in a field", 1024, 683),
          galleryPhoto("Agirlandherhorse-9.jpg", "A photo from a girl and her horse", 1024, 683),
          galleryPhoto("Agirlandherhorse-35.jpg", "A photo from a girl and her horse", 1024, 683),
          galleryPhoto("Agirlandherhorse-44.jpg", "A photo from a girl and her horse", 1024, 683),
        ],
      },
    ],
  },
  {
    id: "portraits",
    title: "Portraits",
    text: "Individual sessions and golden-hour portraits.",
    galleries: [
      {
        id: "alex-flower-field",
        title: "Alex in the Flower Field",
        photo: {
          id: "gallery-alex",
          alt: "Alex holding a camera in a flower field at sunset",
          tone: "#d7b48a",
          src: "/photos/AlexFlowerField-25.jpg",
        },
        photos: [
          galleryPhoto("AlexFlowerField-25.jpg", "Alex holding a camera in a flower field at sunset", 1024, 1536),
          galleryPhoto("AlexFlowerField-30.jpg", "A close portrait of Alex at sunset", 1024, 1536),
          galleryPhoto("AlexFlowerField-18.jpg", "A photo from Alex’s flower field session", 1024, 683),
          galleryPhoto("AlexFlowerField-23.jpg", "A photo from Alex’s flower field session", 1024, 683),
        ],
      },
      {
        id: "erin-horses",
        title: "Erin with Her Horses",
        photo: {
          id: "gallery-erin",
          alt: "Erin leaning on a horse in a pasture",
          tone: "#a89080",
          src: "/photos/ErinWHorses-2.jpg",
        },
        photos: [
          galleryPhoto("ErinWHorses-2.jpg", "Erin leaning on a horse in a pasture", 1024, 683),
          galleryPhoto("ErinWHorses.jpg", "Erin and a friend with a horse at golden hour", 1024, 1536),
          galleryPhoto("ErinWHorses-7.jpg", "A photo from Erin’s horse session", 1024, 683),
          galleryPhoto("ErinWHorses-22.jpg", "A photo from Erin’s horse session", 1024, 683),
        ],
      },
      {
        id: "golden-hour",
        title: "Golden Hour",
        photo: {
          id: "gallery-golden",
          alt: "Two friends walking through a field at sunset",
          tone: "#c47a45",
          src: "/photos/GoldenHourMinis-8559.jpg",
        },
        photos: [
          galleryPhoto("GoldenHourMinis-8559.jpg", "Two friends walking through a field at sunset", 1024, 683),
        ],
      },
    ],
  },
];

const featuredOrder = [
  "jake-nicole",
  "pricilla-michael",
  "girl-and-her-horse",
  "jarod-kat",
  "vals-birthday",
  "mom-kids-minis",
];

export const featuredGalleries = featuredOrder.map((id) => {
  for (const section of portfolio) {
    const gallery = section.galleries.find((item) => item.id === id);
    if (gallery) return { gallery, sectionId: section.id };
  }

  throw new Error(`Missing featured gallery: ${id}`);
});

export const testimonials = [
  {
    quote:
      "Paige made the entire session feel so easy and comfortable, even with our kids running around. Nothing felt forced, and she captured the sweetest, most genuine moments. These are photos we’ll cherish forever.",
    name: "Jen & Josh",
  },
  {
    quote:
      "From the lighting to the emotion in every shot, everything was just perfect. Paige went above and beyond to make sure we felt confident and relaxed, and it shows in the photos. They feel so us.",
    name: "Cody & Alyssa",
  },
  {
    quote:
      "Not only is Paige incredibly talented, but she’s also so kind and patient. She made the whole experience fun and stress-free. When we got our gallery back, I cried. They were that beautiful.",
    name: "Allie & Danny",
  },
  {
    quote:
      "I was so nervous going into our shoot, but Paige instantly made me feel comfortable and confident. She has such a calm, creative energy, and it truly shows in her work. The photos look like something out of a magazine.",
    name: "Cory & Anna",
  },
  {
    quote:
      "Paige doesn’t just take pictures — she tells a story. Every photo felt intentional and beautifully composed.",
    name: "Cam & Jenni",
  },
  {
    quote:
      "Paige captured moments I didn’t even realize were happening. Looking through our gallery brought tears to my eyes. She has such a gift for preserving memories in the most beautiful way.",
    name: "Alexis & Jason",
  },
];

export const highlights = [
  {
    number: "01",
    title: "Families",
    text: "Thirty or sixty minutes, at home, outside, or in the studio. Extended families start at $325.",
    href: "/services",
  },
  {
    number: "02",
    title: "Couples",
    text: "Couples sessions from $175, and engagements at $375 with two outfit changes.",
    href: "/services",
  },
  {
    number: "03",
    title: "Newborns",
    text: "Lifestyle sessions with baby and family, at home or in the studio. Not a traditional posed newborn setup.",
    href: "/services",
  },
  {
    number: "04",
    title: "Studio rental",
    text: "The downtown Plymouth studio is $75 for three hours, with monthly memberships if you need it often.",
    href: "/studio",
  },
];

export const aboutPhoto: PhotoSlot = {
  id: "about-portrait",
  alt: "Paige Carey photographing in a field",
  tone: "#cbb5a0",
  src: "/photos/mebrandong.jpg",
};

export const philosophyPhotos: PhotoSlot[] = [
  {
    id: "philosophy-1",
    alt: "A child smiling on a sandy path",
    tone: "#d7c4b0",
    src: "/photos/Vals3rdBirthday-0543.jpg",
  },
  {
    id: "philosophy-2",
    alt: "A child playing beside her mother at sunset",
    tone: "#b7a394",
    src: "/photos/Emily&Callipicnicminis-14.jpg",
  },
];

export const servicesPhoto: PhotoSlot = {
  id: "services-banner",
  alt: "A couple photographed on a sandy path",
  tone: "#a89080",
  src: "/photos/Pricilla&Michael-16.jpg",
};

export const contactPhoto: PhotoSlot = {
  id: "contact-portrait",
  alt: "Paige Carey photographing in a field",
  tone: "#9a846c",
  src: "/photos/mebrandong.jpg",
};

export const packages = [
  {
    name: "Family",
    summary:
      "Outdoor, in-studio, or in-home. Extended family sessions start at $325, and larger families are priced by size.",
    options: [
      { name: "30 minutes", price: "$175" },
      { name: "60 minutes", price: "$325" },
      { name: "Extended family", price: "From $325" },
    ],
    photo: {
      id: "pkg-family",
      alt: "A family standing in tall grass",
      tone: "#8fa08a",
      src: "/photos/Jake&NicoleFallFamilyPhotos-6792.jpg",
    },
  },
  {
    name: "Couples & engagement",
    summary:
      "An engagement session is 60–90 minutes, with two outfit changes and an outdoor location of your choice.",
    options: [
      { name: "30-minute couples session", price: "$175" },
      { name: "60-minute couples session", price: "$325" },
      { name: "Engagement session", price: "$375" },
    ],
    photo: {
      id: "pkg-engagement",
      alt: "A couple embracing outdoors",
      tone: "#c4a4a0",
      src: "/photos/Pricilla&Michael-91.jpg",
    },
  },
  {
    name: "Maternity",
    summary: "Available in the studio or outdoors.",
    options: [
      { name: "30 minutes", price: "$175" },
      { name: "60 minutes", price: "$325" },
    ],
    photo: {
      id: "pkg-maternity",
      alt: "Maternity session",
      tone: "#c4a4a0",
    },
  },
  {
    name: "Newborn",
    summary:
      "Natural lifestyle newborn photography, focused on genuine moments with baby and family rather than traditional posed or swaddled setups.",
    options: [
      { name: "In-home, 30 minutes", price: "$175" },
      { name: "In-home, 60 minutes", price: "$350" },
      { name: "In-studio newborn and family, 30 minutes", price: "$165" },
      { name: "In-studio newborn and family, 60 minutes", price: "$325" },
    ],
    photo: {
      id: "pkg-newborn",
      alt: "Newborn session",
      tone: "#e4d5c5",
    },
  },
  {
    name: "Children & milestones",
    summary: "Birthdays, children’s portraits, and milestone sessions.",
    options: [
      { name: "30 minutes", price: "$175" },
      { name: "60 minutes", price: "$325" },
    ],
    photo: {
      id: "pkg-milestone",
      alt: "A child with a birthday cake on the beach",
      tone: "#d7c4b0",
      src: "/photos/Vals3rdBirthday-0669.jpg",
    },
  },
  {
    name: "Weddings & elopements",
    summary: "Packages start at $1,200. Paige will share the details and availability by email.",
    options: [{ name: "Wedding and elopement packages", price: "From $1,200" }],
    photo: {
      id: "pkg-wedding",
      alt: "A couple kissing under a wedding veil",
      tone: "#8d735f",
      src: "/photos/Jarod&Kat-5470.jpg",
    },
  },
  {
    name: "Seasonal minis",
    summary:
      "Limited mini sessions are announced through the year, and the price comes with each event.",
    options: [{ name: "Announced with each event", price: "Varies" }],
    photo: {
      id: "pkg-minis",
      alt: "A mom and her kids at a fall mini session",
      tone: "#d7b48a",
      src: "/photos/Mom&KidsFallMinis-2934.jpg",
    },
  },
];

export const travelNote =
  "Locations 15 miles or more away include a travel fee of $30 or more.";

export const faqs = [
  {
    question: "Where can a session happen?",
    answer:
      "Outdoor, in the Plymouth studio, or in your home. Paige photographs in Plymouth and the surrounding area, including Sheboygan, Sheboygan Falls, Kohler, and Fond du Lac.",
  },
  {
    question: "Do you travel for a session?",
    answer: travelNote,
  },
  {
    question: "What kind of newborn sessions do you offer?",
    answer:
      "Lifestyle sessions with baby and family. These are not traditional posed or swaddled newborn sessions.",
  },
  {
    question: "How do seasonal mini sessions work?",
    answer:
      "Prices are announced with each event. Watch Instagram and Facebook for the next set of dates.",
  },
];
