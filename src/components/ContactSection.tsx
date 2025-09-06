import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Join the</span>
              <br />
              <span className="text-primary">Underground</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to taste the legend? Get in touch with us for wholesale opportunities, 
              custom orders, or just to share your BBQ stories.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-accent mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`glass border-primary/20 focus:border-primary/60 ${errors.firstName ? 'border-destructive focus:border-destructive' : ''}`}
                      placeholder="Your first name"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      required
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-accent mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`glass border-primary/20 focus:border-primary/60 ${errors.lastName ? 'border-destructive focus:border-destructive' : ''}`}
                      placeholder="Your last name"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      required
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`glass border-primary/20 focus:border-primary/60 ${errors.email ? 'border-destructive focus:border-destructive' : ''}`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    required
                  />
                  {errors.email && (
                    <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-accent mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`glass border-primary/20 focus:border-primary/60 ${errors.subject ? 'border-destructive focus:border-destructive' : ''}`}
                    placeholder="What can we help you with?"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    required
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`glass border-primary/20 focus:border-primary/60 resize-none ${errors.message ? 'border-destructive focus:border-destructive' : ''}`}
                    placeholder="Tell us about your BBQ needs, wholesale inquiries, or just say hello..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="liquid-button w-full py-3 font-semibold text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
                <div id="submit-status" className="sr-only" aria-live="polite">
                  {isSubmitting ? 'Sending your message...' : ''}
                </div>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1 text-primary">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">Email</h4>
                      <p className="text-muted-foreground">hello@prohibitionbbq.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1 text-primary">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">Location</h4>
                      <p className="text-muted-foreground">Toronto, ON<br />Available across Canada & US</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 mt-1 text-primary">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">Phone</h4>
                      <p className="text-muted-foreground">1-800-SAUCE-23</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Join the Speakeasy
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get exclusive recipes, early access to new flavors, and insider BBQ tips
                  straight from the underground.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
                    if (emailInput && emailInput.value) {
                      alert('Thanks for joining! Check your email for confirmation.');
                      emailInput.value = '';
                    }
                  }}
                  className="space-y-4"
                >
                  <Input
                    type="email"
                    name="newsletter-email"
                    className="glass border-primary/20 focus:border-primary/60"
                    placeholder="Enter your email address"
                    aria-label="Email address for newsletter signup"
                    required
                  />
                  <Button
                    type="submit"
                    className="liquid-button w-full py-3 font-semibold text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    Join the Underground
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4" role="status">
                  * No spam, just legendary BBQ content. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;