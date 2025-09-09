import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import LazyImage from "./LazyImage";
import {
  ScreenReaderAnnouncement,
  AccessibleButton,
  useReducedMotion,
} from "./Accessibility";
import { PremiumCard3D, ScrollReveal } from "./AdvancedVisualEffects";
import babyFaceBottle from "@/assets/baby-face-bottle-stock.jpg";
import godfatherRibs from "@/assets/godfather-ribs-stock.jpg";
import bugsyBottle from "@/assets/bugsy-bottle-stock.jpg";

const products = [
  {
    id: "baby-face",
    name: "Baby Face",
    subtitle: "Prohibition BBQ",
    description:
      "Sweet & smoky with a hint of danger. This sauce captures the charm and complexity of the notorious Baby Face Nelson.",
    features: ["Sweet Molasses Base", "Hickory Smoke", "Brown Sugar Finish"],
    image: babyFaceBottle,
    price: 12.99,
  },
  {
    id: "godfather",
    name: "The Godfather",
    subtitle: "Prohibition BBQ",
    description:
      "Rich, bold, and commanding respect. A sauce worthy of the most powerful families in BBQ history.",
    features: ["Tomato & Bourbon", "Garlic & Herbs", "Premium Spices"],
    image: godfatherRibs,
    price: 12.99,
  },
  {
    id: "bugsy",
    name: "Bugsy",
    subtitle: "Prohibition BBQ",
    description:
      "Sharp, sophisticated, and unforgettable. Like its namesake, this sauce leaves a lasting impression.",
    features: ["Tangy Vinegar Base", "Black Pepper", "Citrus Notes"],
    image: bugsyBottle,
    price: 12.99,
  },
];

const ProductGrid = () => {
  const { addItem } = useCart();
  const prefersReducedMotion = useReducedMotion();
  const [announcement, setAnnouncement] = React.useState("");

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
    });

    // Accessibility announcement
    setAnnouncement(`${product.name} has been added to your cart`);

    // Clear announcement after screen reader reads it
    setTimeout(() => setAnnouncement(""), 1000);
  };
  return (
    <section id="products" className="py-40 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Refined Section Header */}
        <div className="text-center mb-24 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight animate-fade-in text-balance">
              <span className="text-foreground block">Meet the</span>
              <span
                className="text-primary block animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Legendary Crew
              </span>
            </h2>
            <div
              className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <p
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Each sauce tells a story of craftsmanship and rebellion, inspired by
            the most notorious figures of the prohibition era.
          </p>
        </div>

        {/* Premium Product Grid */}
        <div
          className="grid lg:grid-cols-3 gap-16 mb-24"
          role="grid"
          aria-label="Product collection"
        >
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              direction="up"
              delay={index * 100}
              className="group cursor-pointer"
              role="gridcell"
              aria-labelledby={`product-${product.id}-title`}
              tabIndex={0}
            >
              <PremiumCard3D intensity={8}>
                <article className="glass-card-floating p-8 rounded-2xl hover-morph hover-glow-primary">
                  {/* Product Image with Lazy Loading */}
                  <div className="relative mb-8 overflow-hidden rounded-xl group/image hover-ripple">
                    <LazyImage
                      src={product.image}
                      alt={`${product.name} ${
                        product.subtitle
                      } sauce bottle - Premium BBQ sauce with ${product.description.toLowerCase()}`}
                      className="w-full h-80 rounded-xl transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      priority={index < 3} // Prioritize first 3 products
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent transition-opacity duration-500 ${
                        prefersReducedMotion
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Enhanced overlay with product info */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 ${
                        prefersReducedMotion
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      }`}
                    >
                      <div className="text-white text-sm font-medium animate-fade-in-up">
                        {product.subtitle}
                      </div>
                    </div>

                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Product Information */}
                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <h3
                        id={`product-${product.id}-title`}
                        className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                      >
                        {product.name}
                      </h3>
                      <p className="text-base text-muted-foreground font-medium">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed text-center">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-accent text-sm uppercase tracking-wide">
                        Signature Notes
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary/50 text-xs font-medium text-secondary-foreground rounded-full border border-border/50"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="space-y-4 pt-2">
                      <div className="text-center">
                        <span className="text-2xl font-bold text-primary">
                          $12.99
                        </span>
                      </div>
                      <AccessibleButton
                        className="w-full py-3 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={`Add ${product.name} to cart for $12.99`}
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </AccessibleButton>
                    </div>
                  </div>
                </article>
              </PremiumCard3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Collection CTA */}
        <div className="text-center">
          <div className="glass-card-glow p-12 max-w-3xl mx-auto hover-morph hover-glow-primary">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground animate-fade-in-up">
                  Complete Your Collection
                </h3>
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-in" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Save 20% when you purchase all three legendary sauces together.
                The ultimate collection for the discerning BBQ enthusiast.
              </p>

              <div className="pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-2xl font-bold text-primary animate-pulse-subtle">
                    $29.99
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    $38.97
                  </span>
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full animate-bounce-slow">
                    Save 23%
                  </span>
                </div>
                <Button
                  className="px-12 py-4 text-lg font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] rounded-xl hover-shimmer hover-glow-primary"
                  aria-label="Purchase all three sauces as a bundle for $29.99 - Limited time offer"
                  onClick={(e) => {
                    const button = e.currentTarget as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = "Adding Bundle...";
                    button.disabled = true;
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                    }, 1500);
                  }}
                >
                  Add Complete Collection
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Reader Announcements */}
        <ScreenReaderAnnouncement message={announcement} priority="polite" />
      </div>
    </section>
  );
};

export default ProductGrid;
