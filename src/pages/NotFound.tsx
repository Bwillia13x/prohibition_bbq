import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-8">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="space-y-4">
            <h1 className="font-display text-9xl lg:text-[12rem] xl:text-[15rem] font-bold leading-none tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          {/* Error Message */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              Lost in the Underground
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Looks like you've wandered into the wrong speakeasy. The page you're looking for doesn't exist in our prohibition-era collection.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="liquid-button px-8 py-4 text-lg font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
                  Return to the Speakeasy
                </Button>
              </Link>
              <Button
                variant="outline"
                className="glass-card px-8 py-4 text-lg border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
                onClick={() => window.history.back()}
              >
                Go Back
              </Button>
            </div>

            {/* Additional Links */}
            <div className="space-y-4">
              <p className="text-muted-foreground">Looking for something specific?</p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link to="/" className="text-primary hover:text-accent transition-colors duration-300 underline decoration-1 underline-offset-4">
                  Browse Our Sauces
                </Link>
                <Link to="/" className="text-primary hover:text-accent transition-colors duration-300 underline decoration-1 underline-offset-4">
                  Our Story
                </Link>
                <Link to="/recipes" className="text-primary hover:text-accent transition-colors duration-300 underline decoration-1 underline-offset-4">
                  Our Recipes
                </Link>
                <Link to="/" className="text-primary hover:text-accent transition-colors duration-300 underline decoration-1 underline-offset-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-8 animate-bounce" style={{ animationDelay: '1s' }}>
            <span className="text-4xl">🍺</span>
            <span className="text-4xl">🔥</span>
            <span className="text-4xl">👑</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
