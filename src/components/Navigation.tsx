import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import prohibitionLogo from "/brand logo/prohibition_bbq_logo.png";
import { ShoppingCart } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCart();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Touch gesture handling for mobile menu
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 768) {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (window.innerWidth < 768) {
        setTouchEnd(e.targetTouches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      if ((window.innerWidth < 768 && !touchStart) || !touchEnd) return;

      const distance = touchStart! - touchEnd!;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      // Swipe left to open menu, swipe right to close
      if (isLeftSwipe && !isMobileMenuOpen) {
        setIsMobileMenuOpen(true);
        // Haptic feedback simulation
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
      } else if (isRightSwipe && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        if (navigator.vibrate) {
          navigator.vibrate(30);
        }
      }
    };

    // Click outside to close mobile menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [touchStart, touchEnd, isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    if (location.pathname === "/") {
      // If on homepage, scroll to products section
      scrollToSection("products");
    } else {
      // If on other pages, navigate to homepage and scroll to products
      navigate("/");
      setTimeout(() => {
        scrollToSection("products");
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card-premium py-3 border-b border-primary/10"
          : "py-6"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg transition-all duration-300 block"
            aria-label="Prohibition BBQ - Go to homepage"
          >
            <img
              src={prohibitionLogo}
              alt="Prohibition BBQ Logo"
              className="h-10 lg:h-12 w-auto transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1" role="menubar">
          <button
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            role="menuitem"
            aria-label="Navigate to Products section"
            onClick={handleProductsClick}
          >
            Products
          </button>
          <Link
            to="/recipes"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            role="menuitem"
            aria-label="Navigate to Recipes page"
          >
            Recipes
          </Link>
          <Link
            to="/wholesale"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            role="menuitem"
            aria-label="Navigate to Wholesale page"
          >
            Wholesale
          </Link>
          <Link
            to="/our-story"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            role="menuitem"
            aria-label="Navigate to Our Story page"
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            role="menuitem"
            aria-label="Navigate to Contact page"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - Touch Optimized */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-3 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 transition-transform duration-100"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            // Haptic feedback for mobile
            if (navigator.vibrate && window.innerWidth < 768) {
              navigator.vibrate(20);
            }
          }}
          onTouchStart={() => {
            // Prevent double-tap zoom on mobile
            document.body.style.touchAction = "manipulation";
          }}
          onTouchEnd={() => {
            document.body.style.touchAction = "";
          }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span
              className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="ghost"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="View shopping cart"
          >
            <Link to="/cart" className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {state.totalItems > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-1 px-1.5 py-0.5 text-xs"
                >
                  {state.totalItems}
                </Badge>
              )}
            </Link>
          </Button>
          <Button
            asChild
            className="px-6 py-2 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] rounded-lg"
            aria-label="Shop now - View our product collection"
          >
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu - Touch Enhanced */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 w-full glass-card-premium border-t border-primary/10 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="container mx-auto px-6 py-6 space-y-2">
          <button
            className="block w-full text-left px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] flex items-center active:scale-98"
            role="menuitem"
            onClick={() => {
              handleProductsClick();
              setIsMobileMenuOpen(false);
              if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(15);
              }
            }}
            onTouchStart={() => {
              document.body.style.touchAction = "manipulation";
            }}
            onTouchEnd={() => {
              document.body.style.touchAction = "";
            }}
          >
            Products
          </button>
          <Link
            to="/recipes"
            className="block w-full text-left px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] flex items-center active:scale-98"
            role="menuitem"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(15);
              }
            }}
            onTouchStart={() => {
              document.body.style.touchAction = "manipulation";
            }}
            onTouchEnd={() => {
              document.body.style.touchAction = "";
            }}
          >
            Recipes
          </Link>
          <Link
            to="/wholesale"
            className="block w-full text-left px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] flex items-center active:scale-98"
            role="menuitem"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(15);
              }
            }}
            onTouchStart={() => {
              document.body.style.touchAction = "manipulation";
            }}
            onTouchEnd={() => {
              document.body.style.touchAction = "";
            }}
          >
            Wholesale
          </Link>
          <Link
            to="/our-story"
            className="block w-full text-left px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] flex items-center active:scale-98"
            role="menuitem"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(15);
              }
            }}
            onTouchStart={() => {
              document.body.style.touchAction = "manipulation";
            }}
            onTouchEnd={() => {
              document.body.style.touchAction = "";
            }}
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="block w-full text-left px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] flex items-center active:scale-98"
            role="menuitem"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (navigator.vibrate && window.innerWidth < 768) {
                navigator.vibrate(15);
              }
            }}
            onTouchStart={() => {
              document.body.style.touchAction = "manipulation";
            }}
            onTouchEnd={() => {
              document.body.style.touchAction = "";
            }}
          >
            Contact
          </Link>
          <div className="border-t border-border/50 mt-4 pt-4 space-y-2">
            <Link
              to="/cart"
              className="flex items-center justify-between w-full px-6 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/5 min-h-[48px] active:scale-98"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (navigator.vibrate && window.innerWidth < 768) {
                  navigator.vibrate(15);
                }
              }}
              onTouchStart={() => {
                document.body.style.touchAction = "manipulation";
              }}
              onTouchEnd={() => {
                document.body.style.touchAction = "";
              }}
            >
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </div>
              {state.totalItems > 0 && (
                <Badge
                  variant="secondary"
                  className="px-2 py-1 text-xs font-medium"
                >
                  {state.totalItems}
                </Badge>
              )}
            </Link>
            <Link
              to="/shop"
              className="block w-full px-6 py-4 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[48px] flex items-center justify-center active:scale-98"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (navigator.vibrate && window.innerWidth < 768) {
                  navigator.vibrate(20);
                }
              }}
              onTouchStart={() => {
                document.body.style.touchAction = "manipulation";
              }}
              onTouchEnd={() => {
                document.body.style.touchAction = "";
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
