import React from "react";
import {
  BRAND_IDENTITY,
  BRAND_VOICE,
  STORYTELLING_FRAMEWORK,
  generateBrandContent,
} from "../utils/brand";
import { ScrollReveal } from "./AdvancedVisualEffects";

// Brand Story Component
export const BrandStory: React.FC<{
  variant?: "hero" | "section" | "card";
  className?: string;
}> = ({ variant = "section", className = "" }) => {
  const story = STORYTELLING_FRAMEWORK.origin;

  const content = {
    hero: {
      headline: story.headline,
      subtext: story.narrative.substring(0, 120) + "...",
      cta: "Discover Our Legacy",
    },
    section: {
      headline: story.headline,
      subtext: story.narrative,
      cta: "Learn Our Story",
    },
    card: {
      headline: "Our Origins",
      subtext: story.narrative.substring(0, 80) + "...",
      cta: "Read More",
    },
  };

  const current = content[variant];

  return (
    <ScrollReveal direction="up" className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
          {current.headline}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {current.subtext}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {story.key_themes.map((theme, index) => (
          <span
            key={theme}
            className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-full border border-border/50"
          >
            {theme}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
};

// Product Personality Component
export const ProductPersonality: React.FC<{
  productId: string;
  className?: string;
}> = ({ productId, className = "" }) => {
  const {
    PRODUCT_PERSONALITIES,
    generateBrandContent,
  } = require("../utils/brand");
  const personality = PRODUCT_PERSONALITIES[productId];

  if (!personality) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-bold text-primary">
          {personality.personality}
        </h3>
        <p className="text-muted-foreground italic">"{personality.tagline}"</p>
      </div>

      <p className="text-foreground leading-relaxed">{personality.story}</p>

      <div className="pt-4">
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg">
          {generateBrandContent.productHeadline(
            personality.personality.split(" ")[0]
          )}
        </span>
      </div>
    </div>
  );
};

// Brand Voice Component
export const BrandVoice: React.FC<{
  context: "headline" | "description" | "cta";
  count?: number;
  className?: string;
}> = ({ context, count = 1, className = "" }) => {
  const { BRAND_VOICE } = require("../utils/brand");
  const examples = BRAND_VOICE.tone_examples[context];

  return (
    <div className={`space-y-4 ${className}`}>
      <h4 className="font-medium text-accent uppercase tracking-wide text-sm">
        {context.charAt(0).toUpperCase() + context.slice(1)} Examples
      </h4>
      <div className="space-y-2">
        {examples.slice(0, count).map((example, index) => (
          <p
            key={index}
            className={`text-foreground ${
              context === "headline" ? "font-display text-xl" : "text-base"
            }`}
          >
            {example}
          </p>
        ))}
      </div>
    </div>
  );
};

// Dynamic Content Generator
export const DynamicContent: React.FC<{
  type: "greeting" | "testimonial" | "urgency";
  variant?: string;
  className?: string;
}> = ({ type, variant, className = "" }) => {
  const { generateBrandContent, THEME_MESSAGING } = require("../utils/brand");

  const getContent = () => {
    switch (type) {
      case "greeting":
        return THEME_MESSAGING[variant || "default"].greeting;
      case "testimonial":
        return generateBrandContent.testimonialStyle(
          (variant as any) || "foodie"
        );
      case "urgency":
        return generateBrandContent.urgencyCopy((variant as any) || "limited");
      default:
        return "";
    }
  };

  return <p className={`text-muted-foreground ${className}`}>{getContent()}</p>;
};

// Brand Values Component
export const BrandValues: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  const { BRAND_IDENTITY } = require("../utils/brand");

  return (
    <ScrollReveal direction="up" className={`space-y-8 ${className}`}>
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
          Our Core Values
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {BRAND_IDENTITY.mission}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BRAND_IDENTITY.values.map((value, index) => (
          <ScrollReveal
            key={value}
            direction="up"
            delay={index * 150}
            className="text-center space-y-3"
          >
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {value.charAt(0)}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {value}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {getValueDescription(value)}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
};

// Helper function for value descriptions
const getValueDescription = (value: string): string => {
  const descriptions: Record<string, string> = {
    Authenticity:
      "Every ingredient and process honors traditional BBQ craftsmanship",
    Boldness: "We dare to create flavors that challenge and delight",
    Craftsmanship: "Uncompromising attention to detail in every bottle",
    Legacy: "Honoring the legends who shaped BBQ history",
    Rebellion: "Breaking conventions to create extraordinary experiences",
  };
  return descriptions[value] || "";
};

// Brand Mission Statement
export const BrandMission: React.FC<{
  variant?: "full" | "compact";
  className?: string;
}> = ({ variant = "full", className = "" }) => {
  const { BRAND_IDENTITY } = require("../utils/brand");

  const content =
    variant === "full"
      ? BRAND_IDENTITY.mission
      : BRAND_IDENTITY.mission.substring(0, 100) + "...";

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary">
        Our Mission
      </h3>
      <blockquote className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
        "{content}"
      </blockquote>
    </div>
  );
};

// Export all components
export {
  BrandStory,
  ProductPersonality,
  BrandVoice,
  DynamicContent,
  BrandValues,
  BrandMission,
};
