/*
  Facts that do not change with language: numbers, addresses of files,
  and the order things appear in. Every word shown to a visitor lives in
  the dictionaries instead.
*/

export const contact = {
  phones: ["+964 780 180 0008", "+964 783 492 6941"],
  email: "info@al-harf.com",
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const brandOrder = [
  { slug: "badia", logo: "/brands/badia.png" },
  { slug: "gallo", logo: "/brands/gallo.png" },
  { slug: "vivesoy", logo: "/brands/vivesoy.jpg" },
  { slug: "pascual", logo: "/brands/pascual.jpg" },
  { slug: "sayed-al-halib", logo: "/brands/mr-milk.png" },
  { slug: "vidal", logo: "/brands/vidal.png" },
  { slug: "amica", logo: "/brands/amica.jpg" },
  { slug: "frit-ravich", logo: "/brands/frit.jpg" },
  { slug: "asalvo", logo: "/brands/asalvo.jpg" },
  { slug: "wham", logo: "/brands/wham.png" },
  { slug: "rayburn", logo: "/brands/rayburn.jpg" },
  { slug: "nutricook", logo: "/brands/nutricook.jpg" },
  { slug: "nutribullet", logo: "/brands/nutribullet.jpg" },
  { slug: "taurus", logo: "/brands/taurus.jpg" },
] as const;

export type BrandSlug = (typeof brandOrder)[number]["slug"];

export const brandGroups: { key: "food" | "home" | "appliances"; slugs: BrandSlug[] }[] = [
  {
    key: "food",
    slugs: ["badia", "gallo", "vivesoy", "pascual", "sayed-al-halib", "vidal", "amica", "frit-ravich"],
  },
  { key: "home", slugs: ["asalvo", "wham", "rayburn"] },
  { key: "appliances", slugs: ["nutricook", "nutribullet", "taurus"] },
];

export const exhibitionOrder = [
  { slug: "luzine", image: "/exhibitions/luzine.jpg" },
  { slug: "sayed-al-halib", image: "/exhibitions/sayed-al-halib.jpg" },
  { slug: "green-apple", image: "/exhibitions/green-apple.jpg" },
  { slug: "al-harf", image: "/exhibitions/al-harf.jpg" },
] as const;

export type ExhibitionSlug = (typeof exhibitionOrder)[number]["slug"];

/* As published on al-harf.com. */
export const figureValues = {
  products: 401,
  clients: 520,
  farmers: 157,
  awards: 20,
} as const;
