import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/98 to-background/95">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-60" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="glass-card px-6 py-2 mb-8 text-sm font-medium border-primary/30 hover:border-primary/50 transition-colors duration-300">
              Get In Touch
            </Badge>

            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tight mb-8">
              <span className="text-foreground block animate-slide-up hover-lift">Let's Start a</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle cursor-default transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                Conversation
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Whether you're a home chef seeking flavor inspiration or a business exploring partnership
              opportunities, we're here to connect and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Customer Support */}
            <div className="glass-card p-8 hover-lift animate-scale-in group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-display text-2xl font-bold mb-4">Customer Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Questions about our products, recipes, or need help with your order?
                Our team is here to assist you every step of the way.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📧</span>
                  <span className="text-sm">support@prohibitionbbq.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📞</span>
                  <span className="text-sm">1-800-PROHIBIT</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">🕒</span>
                  <span className="text-sm">Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* Business Inquiries */}
            <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="font-display text-2xl font-bold mb-4">Business Partnerships</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Interested in carrying Prohibition BBQ in your establishment or exploring
                wholesale opportunities? Let's discuss how we can work together.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📧</span>
                  <span className="text-sm">partnerships@prohibitionbbq.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📞</span>
                  <span className="text-sm">1-800-PARTNERS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">🏢</span>
                  <span className="text-sm">Business Hours Only</span>
                </div>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">💭</div>
              <h3 className="font-display text-2xl font-bold mb-4">General Inquiries</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a story to share, feedback to give, or just want to connect?
                We love hearing from fellow flavor enthusiasts and BBQ aficionados.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📧</span>
                  <span className="text-sm">hello@prohibitionbbq.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📍</span>
                  <span className="text-sm">Chicago, IL</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">🌐</span>
                  <span className="text-sm">www.prohibitionbbq.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-background/50 via-primary/5 to-background/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Whether it's a question, a suggestion, or just to say hello,
                every message helps us improve and connect with our community.
              </p>
            </div>

            <div className="glass-card p-8 lg:p-12 hover-lift animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-primary/20 focus:border-primary/50 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-card border-primary/20 focus:border-primary/50 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass-card border-primary/20 focus:border-primary/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="liquid-button px-12 py-4 text-lg font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-glow transition-all duration-500 group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 tracking-wide">Send Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about Prohibition BBQ
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 hover-lift animate-scale-in">
                <h3 className="font-display text-xl font-bold mb-3">Where can I purchase your products?</h3>
                <p className="text-muted-foreground">
                  Our sauces are available at select gourmet food stores, specialty BBQ shops, and online retailers.
                  Check our store locator or visit our online shop for direct purchasing options.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-display text-xl font-bold mb-3">Are your products gluten-free?</h3>
                <p className="text-muted-foreground">
                  Most of our sauces are gluten-free, but we recommend checking the specific product labels
                  or contacting us directly for detailed ingredient information.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-display text-xl font-bold mb-3">Do you offer wholesale pricing?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer wholesale pricing for restaurants, retailers, and food service businesses.
                  Please contact our partnerships team for more information about bulk orders and pricing.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-display text-xl font-bold mb-3">What's your return policy?</h3>
                <p className="text-muted-foreground">
                  We stand behind our products. If you're not completely satisfied, contact us within 30 days
                  of purchase for a full refund or replacement. Quality guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-12 hover-lift animate-fade-in">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Ready to Experience Prohibition BBQ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of BBQ enthusiasts who have discovered the perfect balance of
                tradition and innovation in every bottle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="liquid-button px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                  Shop Our Collection
                </Button>
                <Button variant="outline" className="glass-card px-8 py-4 text-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                  Explore Recipes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
