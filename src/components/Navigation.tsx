import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import prohibitionLogo from "@/assets/prohibition-bbq-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled ? 'glass-card py-4 backdrop-blur-xl' : 'py-8'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg hover-lift transition-all duration-300 block"
            aria-label="Prohibition BBQ - Go to homepage"
          >
            <img
              src={prohibitionLogo}
              alt="Prohibition BBQ Logo"
              className="h-12 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 font-medium text-lg" role="menubar">
          <a
            href="#products"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Products section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Products</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </a>
          <Link
            to="/recipes"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Recipes page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Recipes</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/wholesale"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Wholesale page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Wholesale</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/our-story"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Our Story page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Our Story</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <Link
            to="/contact"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Contact page"
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Contact</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </Link>
          <a
            href="#story"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Our Story section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('story');
            }}
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Our Story</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </a>
          <a
            href="#contact"
            className="nav-link relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg px-3 py-2 hover-lift"
            role="menuitem"
            aria-label="Navigate to Contact section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <span className="relative z-10 transition-all duration-500 group-hover:text-primary group-focus:text-primary group-hover:tracking-wider">Contact</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 group-focus:scale-100 transition-transform duration-500" />
          </a>
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
          onClick={() => scrollToSection('products')}
          className="liquid-button px-10 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Shop now - View our product collection"
        >
          Shop Now
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-card backdrop-blur-xl border-t border-primary/10 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="container mx-auto px-8 py-6 space-y-4">
          <a
            href="#products"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('products');
            }}
          >
            Products
          </a>
          <Link
            to="/recipes"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Recipes
          </Link>
          <Link
            to="/wholesale"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Wholesale
          </Link>
          <Link
            to="/our-story"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="#story"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('story');
            }}
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="block py-3 px-4 text-lg font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-primary/10"
            role="menuitem"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;