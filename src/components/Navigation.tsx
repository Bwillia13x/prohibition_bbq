import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../contexts/CartContext";
import prohibitionLogo from "/brand logo/prohibition_bbq_logo.png";
import { ShoppingCart } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    if (location.pathname === '/') {
      // If on homepage, scroll to products section
      scrollToSection('products');
    } else {
      // If on other pages, navigate to homepage and scroll to products
      navigate('/');
      setTimeout(() => {
        scrollToSection('products');
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled ? 'glass-card-premium py-4 backdrop-blur-xl border-b border-primary/10' : 'py-8'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg hover-lift transition-all duration-300 block"
            aria-label="Prohibition BBQ - Go to homepage"
          >
            <img
              src={prohibitionLogo}
              alt="Prohibition BBQ Logo"
              className="h-12 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-medium text-lg" role="menubar">
          <button
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl px-4 py-2 hover-lift hover-scale-elegant hover-glow-subtle transition-all duration-300"
            role="menuitem"
            aria-label="Navigate to Products section"
            onClick={handleProductsClick}
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wide font-medium">Products</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </button>
          <Link
            to="/recipes"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl px-4 py-2 hover-lift hover-scale-elegant hover-glow-subtle transition-all duration-300"
            role="menuitem"
            aria-label="Navigate to Recipes page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wide font-medium">Recipes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/wholesale"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl px-4 py-2 hover-lift hover-scale-elegant hover-glow-subtle transition-all duration-300"
            role="menuitem"
            aria-label="Navigate to Wholesale page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wide font-medium">Wholesale</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/our-story"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl px-4 py-2 hover-lift hover-scale-elegant hover-glow-subtle transition-all duration-300"
            role="menuitem"
            aria-label="Navigate to Our Story page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wide font-medium">Our Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/contact"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl px-4 py-2 hover-lift hover-scale-elegant hover-glow-subtle transition-all duration-300"
            role="menuitem"
            aria-label="Navigate to Contact page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wide font-medium">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>

        <Button
          asChild
          className="liquid-button px-12 py-5 text-lg font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-glow-subtle transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
          aria-label="Shop now - View our product collection"
        >
          <Link to="/shop" className="relative z-10">
            <span className="relative z-10 tracking-wide">Shop Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-card-premium backdrop-blur-xl border-t border-primary/20 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="container mx-auto px-8 py-8 space-y-3">
          <button
            className="block py-4 px-6 text-lg font-medium hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10 hover-lift hover-scale-elegant"
            role="menuitem"
            onClick={() => {
              handleProductsClick();
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="relative z-10 tracking-wide">Products</span>
          </button>
          <Link
            to="/recipes"
            className="block py-4 px-6 text-lg font-medium hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10 hover-lift hover-scale-elegant"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10 tracking-wide">Recipes</span>
          </Link>
          <Link
            to="/wholesale"
            className="block py-4 px-6 text-lg font-medium hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10 hover-lift hover-scale-elegant"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10 tracking-wide">Wholesale</span>
          </Link>
          <Link
            to="/our-story"
            className="block py-4 px-6 text-lg font-medium hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10 hover-lift hover-scale-elegant"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10 tracking-wide">Our Story</span>
          </Link>
          <Link
            to="/contact"
            className="block py-4 px-6 text-lg font-medium hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10 hover-lift hover-scale-elegant"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10 tracking-wide">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;