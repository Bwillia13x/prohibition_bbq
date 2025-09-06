import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import StorySection from "../components/StorySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductGrid />
      <StorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
