import { useState, useEffect } from "react";
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
            {/* Massive Centered Logo */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img
                src={prohibitionLogo}
                alt="Prohibition BBQ Logo"
                className="h-72 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-auto hover:scale-105 transition-transform duration-700 drop-shadow-2xl filter"
              />
            </div>

            <div className="space-y-6">
              <h1 className="font-display text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
                <span className="text-foreground block animate-slide-up hover-lift">Taste the</span>
                <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle cursor-default transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                  Prohibition
                </span>
              </h1>
              <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0 animate-scale-in hover-glow" style={{ animationDelay: '0.4s' }} />
            </div>

            <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-2xl animate-slide-up hover-lift" style={{ animationDelay: '0.6s' }}>
              Premium BBQ sauces inspired by the legendary figures of the roaring twenties.
              Each bottle crafted with the same attention to detail as a speakeasy cocktail.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="liquid-button px-20 py-7 text-xl font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-glow transition-all duration-500 group"
                aria-label="Explore our BBQ sauce collection"
              >
                <span className="relative z-10 tracking-wide">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('story');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="glass-card px-20 py-7 text-xl border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-700 group hover-lift"
                aria-label="Watch our brand story"
              >
                <span className="group-hover:text-primary transition-colors duration-500 relative z-10 tracking-wide">Watch Our Story</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </Button>
            </div>
          </div>
          
          {/* Enhanced Product Image */}
          <div className="relative group animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass-card p-12 lg:p-16 transform group-hover:scale-[1.02] transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20">
              <div className="relative overflow-hidden rounded-3xl group/image">
                <img
                  src={heroBottles}
                  alt="Prohibition BBQ sauce collection featuring Baby Face, The Godfather, and Bugsy"
                  className="w-full h-auto shadow-premium transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>
            </div>
            
            {/* Enhanced floating elements with hover interactions */}
            <div
              className="absolute -bottom-6 -left-6 glass-card p-6 animate-bounce shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-12 cursor-pointer"
              style={{ animationDelay: '3s' }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              <span className="text-3xl hover:scale-125 transition-transform duration-300">🔥</span>
            </div>
            <div
              className="absolute top-1/2 -right-4 glass-card p-4 animate-pulse opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110 cursor-pointer"
              style={{ animationDelay: '2s' }}
            >
              <span className="text-2xl hover:animate-spin">✨</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with smooth animation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-all duration-300 group-hover:scale-110">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 animate-pulse group-hover:bg-accent transition-colors duration-300 group-hover:h-6" />
        </div>
        <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-1">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;