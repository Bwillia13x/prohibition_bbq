// Prohibition BBQ Brand Narrative System - Inspired by Johnny Ive's attention to brand coherence

export interface BrandPersonality {
  tone: "elegant" | "bold" | "mysterious" | "sophisticated";
  voice: "confident" | "whispering" | "commanding" | "inviting";
  archetype:
    | "The Gentleman Outlaw"
    | "The Speakeasy Host"
    | "The Prohibition Legend";
}

export interface BrandColors {
  primary: {
    name: string;
    value: string;
    personality: string;
  };
  secondary: {
    name: string;
    value: string;
    personality: string;
  };
  accent: {
    name: string;
    value: string;
    personality: string;
  };
}

export interface BrandTypography {
  display: {
    font: string;
    personality: string;
    usage: string[];
  };
  body: {
    font: string;
    personality: string;
    usage: string[];
  };
}

// Core Brand Identity
export const BRAND_IDENTITY = {
  name: "Prohibition BBQ",
  tagline: "Where Legends Meet Flavor",
  mission:
    "To bottle the spirit of rebellion through uncompromising culinary craftsmanship",
  values: ["Authenticity", "Boldness", "Craftsmanship", "Legacy", "Rebellion"],
  personality: {
    archetype: "The Gentleman Outlaw" as const,
    tone: "sophisticated" as const,
    voice: "confident" as const,
    traits: ["Elegant", "Bold", "Mysterious", "Refined", "Rebellious"],
  },
};

// Brand Color Palette with Personality
export const BRAND_COLORS: BrandColors = {
  primary: {
    name: "Amber Legacy",
    value: "hsl(32 88% 52%)",
    personality: "Warm, commanding presence like aged bourbon",
  },
  secondary: {
    name: "Sepia Shadow",
    value: "hsl(28 20% 22%)",
    personality: "Mysterious depth, like secrets in a speakeasy",
  },
  accent: {
    name: "Gold Rebellion",
    value: "hsl(38 92% 58%)",
    personality: "Bold and unforgettable, like a gangster's charisma",
  },
};

// Typography Personality
export const BRAND_TYPOGRAPHY: BrandTypography = {
  display: {
    font: "Playfair Display",
    personality: "Elegant and timeless, like a vintage champagne label",
    usage: ["Headlines", "Hero text", "Brand statements", "Premium CTAs"],
  },
  body: {
    font: "Inter",
    personality: "Clean and modern, with subtle sophistication",
    usage: ["Body text", "Product descriptions", "Navigation", "UI elements"],
  },
};

// Brand Voice Guidelines
export const BRAND_VOICE = {
  principles: {
    confident: "We speak with the authority of legends",
    sophisticated: "We embrace elegance without pretension",
    rebellious: "We challenge the ordinary in BBQ",
    authentic: "We honor tradition while pushing boundaries",
  },

  tone_examples: {
    headlines: [
      "Taste the Prohibition",
      "Where Legends Meet Flavor",
      "Bold Enough for Gangsters",
      "Crafted in the Shadows",
    ],
    product_descriptions: [
      "Sweet & smoky with a hint of danger",
      "Rich, bold, and commanding respect",
      "Sharp, sophisticated, and unforgettable",
    ],
    calls_to_action: [
      "Join the Underground",
      "Experience the Legend",
      "Discover Your Flavor",
    ],
  },
};

// Product Personality Matrix
export const PRODUCT_PERSONALITIES = {
  "baby-face": {
    personality: "Charmingly Dangerous",
    voice: "Playful yet sophisticated",
    story: "The sweet-talking charmer who gets what he wants",
    tagline: "Sweet & smoky with a hint of danger",
  },
  godfather: {
    personality: "Commanding Authority",
    voice: "Powerful and respected",
    story: "The family patriarch who commands loyalty",
    tagline: "Rich, bold, and worthy of respect",
  },
  bugsy: {
    personality: "Sophisticated Edge",
    voice: "Sharp and unforgettable",
    story: "The sharp operator with impeccable style",
    tagline: "Sharp, sophisticated, and unforgettable",
  },
};

// Storytelling Framework
export const STORYTELLING_FRAMEWORK = {
  origin: {
    headline: "Born in the Shadows",
    narrative:
      "In the hidden corners of prohibition-era speakeasies, where legends were forged and secrets were kept, our recipes emerged from the darkness.",
    key_themes: ["Rebellion", "Craftsmanship", "Legacy", "Authenticity"],
  },

  craftsmanship: {
    headline: "Uncompromising Quality",
    narrative:
      "Every bottle represents our commitment to excellence. We use only the finest ingredients, sourced from trusted suppliers and crafted in small batches.",
    principles: [
      "Premium Ingredients",
      "Small Batch Production",
      "Quality Control",
      "Traditional Methods",
    ],
  },

  legacy: {
    headline: "Honoring the Legends",
    narrative:
      "Each sauce is inspired by the most notorious figures of the prohibition era, capturing their essence in every drop.",
    inspirations: ["Baby Face Nelson", "The Godfather", "Bugsy Siegel"],
  },
};

// Brand Messaging Hierarchy
export const BRAND_MESSAGING = {
  level1: {
    // Core identity - appears on homepage, packaging
    tagline: "Where Legends Meet Flavor",
    mission: "Premium BBQ sauces inspired by prohibition-era legends",
  },
  level2: {
    // Product-specific messaging
    baby_face: "The charming outlaw with a sweet side",
    godfather: "Commanding respect through bold flavor",
    bugsy: "Sharp sophistication in every drop",
  },
  level3: {
    // Supporting narratives
    quality: "Crafted with uncompromising attention to detail",
    heritage: "Honoring the spirit of rebellion and craftsmanship",
    experience: "Elevating your BBQ experience to legendary status",
  },
};

// Seasonal/Theme Messaging
export const THEME_MESSAGING = {
  default: {
    greeting: "Welcome to the Underground",
    cta: "Explore the Collection",
  },
  holiday: {
    greeting: "Festive Flavors from the Prohibition Era",
    cta: "Celebrate with Legends",
  },
  summer: {
    greeting: "Summer Heat Meets Prohibition Cool",
    cta: "Grill Like a Legend",
  },
};

// Brand Consistency Checker
export const validateBrandConsistency = (
  content: string,
  context: "headline" | "body" | "cta"
) => {
  const checks = {
    headline: {
      wordCount: content.split(" ").length <= 8,
      hasPowerWords: /\b(legend|premium|craft|bold|authentic|rebel)\b/i.test(
        content
      ),
      properCapitalization: /^[A-Z][^A-Z]*$/.test(content.split(" ")[0]),
    },
    body: {
      readability: content.length > 50 && content.length < 200,
      brandVoice: /\b(sophisticated|craftsmanship|legendary|premium)\b/i.test(
        content
      ),
      activeVoice: !/\b(is|are|was|were)\s+\w+ed\b/i.test(content), // Prefer active voice
    },
    cta: {
      actionOriented: /\b(join|discover|explore|experience|get)\b/i.test(
        content
      ),
      concise: content.split(" ").length <= 5,
      compelling: /\b(legend|premium|craft|bold)\b/i.test(content),
    },
  };

  return checks[context];
};

// Dynamic Content Generation
export const generateBrandContent = {
  productHeadline: (productName: string) =>
    `Experience the ${productName} Legacy`,

  socialProof: (rating: number, reviews: number) =>
    `${rating} stars from ${reviews} BBQ legends`,

  urgencyCopy: (context: "limited" | "seasonal" | "exclusive") => {
    const messages = {
      limited: "Limited edition - While supplies last",
      seasonal: "Seasonal favorite - Available now",
      exclusive: "Exclusive underground access",
    };
    return messages[context];
  },

  testimonialStyle: (customerType: "pitmaster" | "home_cook" | "foodie") => {
    const styles = {
      pitmaster: "This sauce belongs in the hall of fame",
      home_cook: "Elevated my backyard BBQ to professional levels",
      foodie: "A sophisticated twist on traditional BBQ flavors",
    };
    return styles[customerType];
  },
};

// Brand Asset Management
export const BRAND_ASSETS = {
  logos: {
    primary: "/brand logo/prohibition_bbq_logo.png",
    alt: "Prohibition BBQ - Premium BBQ Sauces",
  },
  colors: {
    css: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      accent: "var(--accent)",
    },
    hex: {
      primary: "#8b5a2b",
      secondary: "#2d2a26",
      accent: "#d4a017",
    },
  },
  fonts: {
    display: "var(--font-display)",
    body: "var(--font-body)",
    mono: "var(--font-mono)",
  },
};

// Export everything for use across the application
export {
  BRAND_IDENTITY,
  BRAND_COLORS,
  BRAND_TYPOGRAPHY,
  BRAND_VOICE,
  PRODUCT_PERSONALITIES,
  STORYTELLING_FRAMEWORK,
  BRAND_MESSAGING,
  THEME_MESSAGING,
  validateBrandConsistency,
  generateBrandContent,
  BRAND_ASSETS,
};
