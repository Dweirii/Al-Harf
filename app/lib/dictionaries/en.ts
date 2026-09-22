import type { BrandSlug, ExhibitionSlug } from "../site";

type Floor = { name: string; what: string };

export type Dictionary = {
  meta: {
    title: string;
    template: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    cta: string;
    home: string;
    whoWeAre: string;
    brands: string;
    exhibitions: string;
    contact: string;
  };
  switchTo: { label: string; name: string };
  menu: { open: string; close: string; home: string };
  logoAlt: string;
  breadcrumbHome: string;
  company: {
    legalName: string;
    hqLabel: string;
    hqLines: string[];
    landmark: string;
    hours: string;
  };
  footer: {
    blurb: string;
    findUs: string;
    getInTouch: string;
    rights: string;
  };
  figures: Record<"products" | "clients" | "farmers" | "awards", string>;
  home: {
    heroLine1: string;
    heroLine2: string;
    heroLede: string;
    whatTitle: string;
    whatLinks: [string, string, string];
    figuresNote: string;
    ctaPartner: string;
    ctaMarkets: string;
    stepImageAlts: [string, string];
    wallCaption: string;
    wallAll: string;
    storyTitle: string;
    storyBody: string[];
    storyLink: string;
    storyImageAlt: string;
    marketsTitle: string;
    marketsLink: string;
    contactTitle: string;
    contactLede: string;
    contactCta: string;
  };
  about: {
    title: string;
    description: string;
    lede: string;
    heading: string;
    body: string[];
    imageAlts: [string, string];
    stepsTitle: string;
    steps: { step: string; text: string }[];
    stepsLink: string;
  };
  brandsPage: {
    title: string;
    description: string;
    lede: string;
    groups: Record<"food" | "home" | "appliances", string>;
    ctaTitle: string;
    ctaLede: string;
    ctaButton: string;
  };
  brands: Record<BrandSlug, { name: string; origin: string; note: string }>;
  exhibitionsPage: { title: string; description: string; lede: string };
  exhibitions: Record<
    ExhibitionSlug,
    {
      name: string;
      place: string;
      summary: string;
      detail: string[];
      floors?: Floor[];
    }
  >;
  contactPage: {
    title: string;
    description: string;
    lede: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    formTitle: string;
    formLede: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sent: string;
      subject: string;
      bodyName: string;
      bodyEmail: string;
      bodyPhone: string;
    };
  };
  notFound: { title: string; body: string; link: string };
};

export const en: Dictionary = {
  meta: {
    title: "Al-Harf — trade and supply of foodstuffs, Baghdad",
    template: "%s — Al-Harf",
    description:
      "Al-Harf for Trade and Suppling of Foodstuffs Ltd. A Baghdad family trading house importing and distributing food, household and electrical brands across Iraq for more than 100 years.",
    ogLocale: "en_IQ",
  },
  nav: {
    cta: "Contact us",
    home: "Home",
    whoWeAre: "Who we are",
    brands: "Brands",
    exhibitions: "Exhibitions",
    contact: "Contact",
  },
  switchTo: { label: "عربي", name: "Arabic" },
  menu: { open: "Open menu", close: "Close menu", home: "Al-Harf, home" },
  logoAlt: "Al-Harf for Trade and Suppling of Foodstuffs",
  breadcrumbHome: "Home",
  company: {
    legalName: "Al-Harf for Trade and Suppling of Foodstuffs Ltd",
    hqLabel: "Headquarters, wholesale centre and stores",
    hqLines: [
      "Iraq / Baghdad, industrial area",
      "Hittin neighbourhood, section 626, St. 3, No. 20",
    ],
    landmark: "Behind Baskoulateh International company.",
    hours: "Sunday to Thursday, 08:00 - 16:00",
  },
  footer: {
    blurb:
      "A family business in the Iraqi market for more than 100 years. The first generation traded grain and food imported from India and other countries.",
    findUs: "Where to find us",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
  },
  figures: {
    products: "Products",
    clients: "Clients",
    farmers: "Farmers",
    awards: "Awards",
  },
  home: {
    heroLine1: "Import. Store. Sell.",
    heroLine2: "In Baghdad for more than a hundred years.",
    heroLede:
      "Al-Harf brings international food, household and appliance brands into Iraq, holds them in its own wholesale stores in Hittin, and sells them through markets it runs itself.",
    whatTitle: "How a brand reaches Iraqi shelves",
    whatLinks: ["See the brands", "Talk to the wholesale office", "Visit the markets"],
    figuresNote: "Figures as published by Al-Harf.",
    ctaPartner: "Bring your brand to Iraq",
    ctaMarkets: "Visit our markets",
    stepImageAlts: [
      "Stock on pallets in a wholesale warehouse",
      "The prepared-food counter at Green Apple, Baghdad",
    ],
    wallCaption: "Brands carried by Al-Harf.",
    wallAll: "All {n} brands",
    storyTitle: "A family that started with grain from India",
    storyBody: [
      "The first generation traded grain and food imported from India and other countries. The confidence that followed, in both retail and wholesale, is now going into trade centres Al-Harf builds itself — so the brands it carries reach shelves in the best condition, away from the pressures of the open market.",
      "The same expansion is under way in household items, toys and electrical materials, sold to customers who already trust where they are buying from.",
    ],
    storyLink: "Read the full story",
    storyImageAlt: "Green Apple Hypermarket, Baghdad",
    marketsTitle: "Four places in Baghdad where you meet us",
    marketsLink: "All four markets",
    contactTitle: "Bringing a brand into Iraq?",
    contactLede:
      "Tell us what you make and where it needs to go, and the Baghdad office will reply.",
    contactCta: "Start a conversation",
  },
  about: {
    title: "Who we are",
    description:
      "A family business in the Iraqi market for more than 100 years, from imported grain to the wholesale stores and markets Al-Harf runs today.",
    lede: "A family working in the Iraqi market for more than a hundred years.",
    heading: "It began with grain",
    body: [
      "The first generation of the family traded grain and food imported from India and other countries. The confidence Al-Harf has since earned in retail and wholesale is what the company is now putting into trade centres of its own.",
      "Those centres exist to protect quality: so the brands Al-Harf represents reach the shelf in the best condition, away from the pressures of the open market. The same expansion is under way in household items, toys and electrical materials, for customers who trust buying from the company's own centres.",
      "Rice is one of the basic materials in Iraq. The citizen depends on it and it enters every house. With the experience the family built in that trade, Al-Harf produces rice to its own specifications, and it has won the confidence of the Iraqi consumer.",
      "Alongside it, a brand known for manufacturing high-quality foodstuffs and meats, distributed all over Iraq, and halls dedicated to household items, electrical materials and toys.",
    ],
    imageAlts: [
      "An Al-Harf store in Baghdad",
      "Stock on the shelves at an Al-Harf market",
    ],
    stepsTitle: "What the company does, in order",
    steps: [
      {
        step: "Import",
        text: "Agencies for international manufacturers, brought into Iraq by Al-Harf itself.",
      },
      {
        step: "Store",
        text: "A wholesale centre and stores in the Hittin industrial area of Baghdad hold the goods.",
      },
      {
        step: "Sell",
        text: "Four markets in Baghdad put them in front of customers, alongside wholesale to the trade.",
      },
    ],
    stepsLink: "See what we import",
  },
  brandsPage: {
    title: "Brands",
    description:
      "The international food, household and appliance brands Al-Harf carries in Iraq: Badia, Gallo, Pascual, Vivesoy, Vidal, Wham, Asalvo, Nutricook, Nutribullet, Taurus and more.",
    lede: "{n} brands carried by Al-Harf and stocked through its wholesale stores and markets.",
    groups: {
      food: "Food and drink",
      home: "Home and family",
      appliances: "Appliances",
    },
    ctaTitle: "Looking for an Iraqi distributor?",
    ctaLede:
      "Al-Harf brings international brands into Iraq through its own imports, its warehouses in Baghdad, and the markets it runs.",
    ctaButton: "Talk to us about an agency",
  },
  brands: {
    badia: {
      name: "Badia",
      origin: "United States",
      note: "Manufacturing, packaging and distribution of spices of all kinds.",
    },
    gallo: {
      name: "Gallo",
      origin: "Spain",
      note: "Pasta from pure wheat, plus gluten-free products and vegetable noodles.",
    },
    vivesoy: {
      name: "Vivesoy",
      origin: "Spain",
      note: "Plant drinks from soy, oat and almond, plain and flavoured.",
    },
    pascual: {
      name: "Pascual",
      origin: "Spain",
      note: "Milk products.",
    },
    "sayed-al-halib": {
      name: "Sayed Al-Halib",
      origin: "Iraq",
      note: "More than one hundred foodstuffs made with pure Iraqi meat, and first-class long-grain Basmati rice.",
    },
    vidal: { name: "Vidal", origin: "", note: "Gelatin sweets." },
    amica: { name: "Amica", origin: "", note: "Chips." },
    "frit-ravich": { name: "Frit Ravich", origin: "", note: "Snacks." },
    asalvo: {
      name: "Asalvo",
      origin: "Spain",
      note: "Children's products.",
    },
    wham: {
      name: "Wham",
      origin: "United Kingdom",
      note: "Plastics and household storage.",
    },
    rayburn: { name: "Rayburn Trading", origin: "", note: "Household goods." },
    nutricook: { name: "Nutricook", origin: "", note: "Kitchen appliances." },
    nutribullet: {
      name: "Nutribullet",
      origin: "",
      note: "Blenders.",
    },
    taurus: { name: "Taurus", origin: "", note: "Small domestic appliances." },
  },
  exhibitionsPage: {
    title: "Exhibitions",
    description:
      "L'UZINE Market, Sayed Al-Halib, Green Apple and Al-Harf Company: the four places in Baghdad where Al-Harf sells directly.",
    lede: "Four addresses in Baghdad where Al-Harf sells directly.",
  },
  exhibitions: {
    luzine: {
      name: "L'UZINE Market",
      place: "Baghdad",
      summary:
        "The first vertical market in Iraq: six floors of Italian design and furnishings in the heart of Baghdad.",
      detail: [
        "The first vertical market in Iraq, showcasing luxurious Italian design and furnishings, offers an unparalleled shopping experience in the heart of Baghdad. The market spans six floors, each dedicated to fulfilling all your needs.",
      ],
      floors: [
        { name: "Electronics", what: "Cutting-edge electrical appliances and technology." },
        { name: "Kids' toys", what: "A world of fun and creativity for the little ones." },
        { name: "Groceries", what: "Fresh and packaged products from top brands." },
        {
          name: "Cosmetics, mobiles and furnishings",
          what: "Premium beauty products, the latest smartphones, and modern furnishings.",
        },
        { name: "Household items", what: "High-quality essentials for daily needs." },
      ],
    },
    "sayed-al-halib": {
      name: "Sayed Al-Halib",
      place: "Al-Mansour, Baghdad",
      summary:
        "One of the oldest food suppliers in Al-Mansour, at the Sayed Al-Halib intersection.",
      detail: [
        "Sayed Al-Halib is located in Al-Mansour neighbourhood, one of the most prestigious areas in Baghdad, at the Sayed Al-Halib intersection. It carries all kinds of food supplies alongside household, electrical and stationery items.",
        "Sayed Al-Halib uses the finest types of Iraqi meat to give consumers the best flavour and taste. Its Basmati rice was produced first class and long grain to international specifications, and gained the attention of the Iraqi community greatly.",
      ],
    },
    "green-apple": {
      name: "Green Apple",
      place: "Al-Yarmouk, Baghdad",
      summary:
        "A three-floor hypermarket offering high-quality products at competitive prices.",
      detail: [
        "Green Apple Hypermarket is located in Al-Yarmouk neighbourhood, where it offers a variety of high-quality products at competitive prices to suit the needs of the Iraqi community.",
      ],
      floors: [
        {
          name: "First floor",
          what: "Canned and frozen foods, ready-to-eat food, and baby feeding products.",
        },
        {
          name: "Second floor",
          what: "Detergents, kitchen materials, bath products, and care products for the elderly and children.",
        },
        {
          name: "Third floor",
          what: "Electricals, perfumes, electronics, coffee machines, cosmetics, toys and stationery.",
        },
      ],
    },
    "al-harf": {
      name: "Al-Harf Company",
      place: "Hittin, Baghdad",
      summary:
        "The import house itself, holding the company's international agencies.",
      detail: [
        "Al-Harf Company is located in Hittin neighbourhood, where it imports the finest products from reputable brands with international manufacturing quality.",
        "It holds agencies for several international companies: Badia of the United States for high-quality spices, Wham of Britain for plastics, Pascual of Spain for milk products, Asalvo of Spain for children's products, Amica for chips and Vidal for gelatin. It also holds agencies for electrical and household appliances such as Nutricook, Nutribullet and Taurus.",
      ],
    },
  },
  contactPage: {
    title: "Contact",
    description:
      "Reach Al-Harf for Trade and Suppling of Foodstuffs in Baghdad: phone, email and the Hittin headquarters.",
    lede: "Call either number during office hours, Sunday to Thursday.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Office hours",
    formTitle: "Write to us",
    formLede:
      "Fill this in and it opens in your email app, addressed to the Baghdad office.",
    form: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      message: "What can we help with?",
      messagePlaceholder:
        "The product you want to bring into Iraq, the volumes, and where it needs to reach.",
      send: "Send by email",
      sent: "Your email app should be open with this message ready. If nothing happened, write to",
      subject: "Website enquiry from {name}",
      bodyName: "Name",
      bodyEmail: "Email",
      bodyPhone: "Phone",
    },
  },
  notFound: {
    title: "This page isn't here",
    body: "The address may have changed when the site was rebuilt. Everything Al-Harf publishes is reachable from the home page.",
    link: "Go to the home page",
  },
};
