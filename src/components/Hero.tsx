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
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-5" />

      {/* Enhanced ambient glow effects with mouse tracking */}
      <div
        className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl opacity-40 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{
          animationDelay: '3s',
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl opacity-50 animate-pulse"
        style={{
          animationDelay: '1.5s',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Johnny Ive Inspired Text Content */}
          <div className="text-center lg:text-left space-y-16 animate-fade-in">
            <div className="space-y-8">
              <h1 className="font-display text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
                <span className="text-foreground block animate-slide-up hover-lift hover:text-gradient-premium transition-all duration-500">Taste the</span>
                <span className="text-primary block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-slide-up hover-scale-subtle cursor-default transition-all duration-700 hover-glow-subtle" style={{ animationDelay: '0.2s' }}>
                  Prohibition
                </span>
              </h1>
              <div className="w-40 h-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto lg:mx-0 animate-scale-in hover-glow hover-scale-elegant" style={{ animationDelay: '0.4s' }} />
            </div>

            <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-2xl animate-slide-up hover-lift" style={{ animationDelay: '0.6s' }}>
              Premium BBQ sauces inspired by the legendary figures of the roaring twenties.
              Each bottle crafted with the same attention to detail as a speakeasy cocktail.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="liquid-button px-24 py-8 text-xl font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-glow hover-scale-elegant transition-all duration-700 group rounded-2xl relative overflow-hidden"
                aria-label="Explore our BBQ sauce collection"
              >
                <span className="relative z-10 tracking-wide font-medium">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="glass-card-premium px-24 py-8 text-xl border-2 border-primary/30 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-700 group hover-lift hover-scale-elegant rounded-2xl relative overflow-hidden"
                aria-label="Watch our brand story"
              >
                <Link to="/our-story" className="relative z-10">
                  <span className="group-hover:text-primary group-hover:text-gradient-premium transition-all duration-500 relative z-10 tracking-wide font-medium">Watch Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Enhanced Product Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card-premium p-16 lg:p-20 transform group-hover:scale-[1.03] transition-all duration-700 hover:shadow-2xl hover:shadow-primary/25 hover-lift rounded-3xl">
              <div className="relative overflow-hidden rounded-2xl group/image">
                <img
                  src={heroBottles}
                  alt="Prohibition BBQ sauce collection featuring Baby Face, The Godfather, and Bugsy"
                  className="w-full h-auto shadow-premium transform group-hover:scale-105 transition-transform duration-1000 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            {/* Enhanced floating elements with premium styling and slower animations */}
            <div
              className="absolute -bottom-8 -left-8 glass-card-premium p-8 animate-bounce-slow shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 hover:-rotate-12 cursor-pointer hover-lift rounded-2xl"
              style={{ animationDelay: '3s' }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              <span className="text-4xl hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">🔥</span>
            </div>
            <div
              className="absolute top-1/2 -right-6 glass-card-premium p-6 animate-pulse-slow opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-125 cursor-pointer hover-lift hover-glow-subtle rounded-2xl"
              style={{ animationDelay: '2s' }}
            >
              <span className="text-3xl hover:animate-spin hover:scale-110 transition-all duration-500 filter drop-shadow-lg">✨</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium scroll indicator with sophisticated animation */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-10 h-14 glass-card-premium border-2 border-primary/40 rounded-2xl flex justify-center group-hover:border-primary/70 transition-all duration-500 group-hover:scale-110 hover-lift shadow-lg group-hover:shadow-xl">
          <div className="w-2 h-5 bg-gradient-to-b from-primary to-accent rounded-full mt-3 animate-pulse group-hover:from-accent group-hover:to-primary transition-all duration-500 group-hover:h-7" />
        </div>
        <p className="text-sm text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-1 font-medium tracking-wide">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;