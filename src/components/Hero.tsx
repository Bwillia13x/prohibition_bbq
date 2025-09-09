import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBottles from "@/assets/hero-bottles-stock.jpg";
import prohibitionLogo from "@/assets/prohibition-bbq-logo.png";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Refined Background System - Simpler, More Elegant */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />

      {/* Subtle Ambient Lighting - Less Is More */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/8 via-primary/3 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent/6 via-accent/2 to-transparent opacity-40" />

      {/* Premium Material Finish Effect */}
      <div
        className="absolute inset-0 bg-noise opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Refined Storytelling Content */}
          <div className="text-center lg:text-left space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight text-balance">
                  <span
                    className="text-foreground block animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    Taste the
                  </span>
                  <span
                    className="text-primary block animate-slide-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Prohibition
                  </span>
                </h1>
                <div
                  className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto lg:mx-0 animate-scale-in"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              <p
                className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl animate-slide-up"
                style={{ animationDelay: "0.7s" }}
              >
                Premium BBQ sauces inspired by the legendary figures of the
                roaring twenties. Each bottle tells a story of craftsmanship,
                flavor, and rebellion.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8 animate-scale-in"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                onClick={() => {
                  const element = document.getElementById("products");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl"
                aria-label="Explore our BBQ sauce collection"
              >
                Explore Collection
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-12 py-6 text-lg font-medium border-primary/40 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] rounded-xl"
                aria-label="Watch our brand story"
              >
                <Link to="/our-story">Watch Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Refined Product Showcase */}
          <div
            className="relative group animate-fade-in hover-tilt"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-morph" />
              <div className="relative glass-card-ultra p-12 lg:p-16 transform group-hover:scale-[1.02] transition-all duration-500 rounded-3xl hover-shimmer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={heroBottles}
                    alt="Prohibition BBQ sauce collection featuring Baby Face, The Godfather, and Bugsy"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Enhanced accent elements */}
                <div
                  className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse hover-glow-primary"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent rounded-full opacity-40 animate-pulse hover-glow-accent"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute top-1/2 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-ripple"
                  style={{ animationDelay: "3s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse opacity-60 group-hover:opacity-80 transition-all duration-300" />
          </div>
          <p className="text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-all duration-300 font-medium tracking-wider">
            SCROLL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
