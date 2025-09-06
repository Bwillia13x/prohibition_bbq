import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Wholesale = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    monthlyVolume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Thank you for your interest! We\'ll contact you within 24 hours.');
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      businessType: '',
      monthlyVolume: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Johnny Ive Inspired Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-40 animate-pulse-subtle" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-accent/6 rounded-full blur-3xl opacity-30 animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-2xl opacity-25 animate-float-gentle" />

        <div className="container mx-auto px-8 relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <h1 className="font-display text-7xl lg:text-9xl font-bold leading-[0.85] tracking-tight">
              <span className="text-foreground block animate-slide-up hover-lift">Wholesale</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                Partnership
              </span>
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in hover-glow" style={{ animationDelay: '0.4s' }} />
          </div>

          <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto animate-slide-up hover-lift" style={{ animationDelay: '0.6s' }}>
            Join the Prohibition BBQ family and bring our legendary sauces to your customers.
            Premium quality meets profitable partnership.
          </p>

          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card px-8 py-4 hover-lift hover-glow">
              <span className="text-primary font-medium tracking-wide">Discover partnership opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Benefits */}
      <section className="py-24 relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-foreground">Why Partner With</span>
              <br />
              <span className="text-primary">Prohibition BBQ?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're looking for passionate partners who share our commitment to quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700">
              <div className="text-5xl mb-6 animate-float-gentle">🏆</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Handcrafted sauces using only the finest ingredients, ensuring consistent quality
                that your customers will love.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-6 animate-float-gentle" style={{ animationDelay: '1s' }}>💰</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Competitive Margins</h3>
              <p className="text-muted-foreground leading-relaxed">
                Industry-leading wholesale pricing that allows you to maintain healthy profit margins
                while offering great value to your customers.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-6 animate-float-gentle" style={{ animationDelay: '2s' }}>🚚</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Reliable Supply</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consistent supply chain and inventory management to ensure you never run out
                of our popular products.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-6 animate-float-gentle" style={{ animationDelay: '3s' }}>📈</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Marketing Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Co-branded marketing materials, point-of-sale displays, and ongoing promotional
                campaigns to drive sales.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl mb-6 animate-float-gentle" style={{ animationDelay: '4s' }}>🎯</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Targeted Demographics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our unique branding appeals to BBQ enthusiasts, foodies, and customers looking
                for premium, artisanal products.
              </p>
            </div>

            <div className="glass-card p-8 text-center hover-lift hover-scale-subtle hover-glow animate-scale-in transition-all duration-700" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl mb-6 animate-float-gentle" style={{ animationDelay: '5s' }}>🌟</div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">Brand Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join a growing brand with national recognition and a loyal customer base
                that keeps coming back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Application */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-foreground">Become a</span>
                <br />
                <span className="text-primary">Wholesale Partner</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to bring Prohibition BBQ to your customers? Fill out the form below
                and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Wholesale Form */}
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Partnership Application
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-accent mb-2">
                        Business Name *
                      </label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        className="glass border-primary/20 focus:border-primary/60"
                        placeholder="Your business name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-accent mb-2">
                        Contact Name *
                      </label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        className="glass border-primary/20 focus:border-primary/60"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass border-primary/20 focus:border-primary/60"
                        placeholder="your.email@business.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-accent mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass border-primary/20 focus:border-primary/60"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-accent mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="w-full h-10 px-3 py-2 rounded-md border border-primary/20 bg-background text-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      >
                        <option value="">Select business type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="retail-store">Retail Store</option>
                        <option value="grocery">Grocery Store</option>
                        <option value="butcher">Butcher Shop</option>
                        <option value="online-retailer">Online Retailer</option>
                        <option value="food-service">Food Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="monthlyVolume" className="block text-sm font-medium text-accent mb-2">
                        Est. Monthly Volume
                      </label>
                      <select
                        id="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={(e) => handleInputChange('monthlyVolume', e.target.value)}
                        className="w-full h-10 px-3 py-2 rounded-md border border-primary/20 bg-background text-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select volume</option>
                        <option value="1-10">1-10 cases</option>
                        <option value="11-25">11-25 cases</option>
                        <option value="26-50">26-50 cases</option>
                        <option value="51-100">51-100 cases</option>
                        <option value="100+">100+ cases</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                      Tell Us About Your Business
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="glass border-primary/20 focus:border-primary/60 resize-none"
                      placeholder="Tell us about your location, customer base, and why you'd be a great partner for Prohibition BBQ..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="liquid-button w-full py-3 font-semibold text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Apply for Partnership'}
                  </Button>
                </form>
              </div>

              {/* Partnership Info */}
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Partnership Requirements
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Minimum Order</h4>
                        <p className="text-sm text-muted-foreground">12 cases (24 bottles per case)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">Canada & United States</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Business License</h4>
                        <p className="text-sm text-muted-foreground">Valid business license required</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Food Service License</h4>
                        <p className="text-sm text-muted-foreground">If applicable to your business type</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Wholesale Pricing
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Individual Bottle</span>
                      <span className="font-semibold text-primary">$8.99</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-muted-foreground">Case (12 bottles)</span>
                      <span className="font-semibold text-primary">$96.00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Case (24 bottles)</span>
                      <span className="font-semibold text-primary">$168.00</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4">
                    * Prices are FOB and do not include shipping or applicable taxes.
                  </p>
                </div>

                <div className="glass-card p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Have questions about our wholesale program? We're here to help you get started.
                  </p>
                  <Button className="liquid-button w-full py-3 font-semibold">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;
