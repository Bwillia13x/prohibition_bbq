import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Badge } from "@/components/ui/badge";

const OurStory = () => {
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
              Our Heritage
            </Badge>

            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tight mb-8">
              <span className="text-foreground block animate-slide-up hover-lift">The Art of</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle cursor-default transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                Prohibition BBQ
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Born from the golden age of speakeasies and crafted with the precision of a master artisan,
              every bottle tells the story of legendary figures who shaped an era.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                A Journey Through Time
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From the shadows of prohibition to the heart of modern gastronomy, our story unfolds like a well-aged whiskey.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary/50 via-primary to-accent/50" />

              {/* Timeline Events */}
              <div className="space-y-20">
                {/* Event 1 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="glass-card p-8 hover-lift animate-slide-in-right">
                      <div className="text-primary font-semibold text-sm mb-2">1920</div>
                      <h3 className="font-display text-2xl font-bold mb-4">The Prohibition Era</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        In the midst of America's great experiment with temperance, our founder discovered
                        that true craftsmanship thrives in the face of adversity. Just as the underground
                        speakeasies became legendary for their excellence, so too would our sauces emerge
                        from the shadows.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse" />
                  <div className="w-1/2 pl-12" />
                </div>

                {/* Event 2 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-1/2 pr-12" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="w-1/2 pl-12 text-left">
                    <div className="glass-card p-8 hover-lift animate-slide-in-left">
                      <div className="text-accent font-semibold text-sm mb-2">1940s</div>
                      <h3 className="font-display text-2xl font-bold mb-4">Post-War Innovation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As America rebuilt itself, we perfected our craft. Drawing inspiration from the
                        bold flavors of immigrant communities and the sophisticated palates of returning
                        soldiers, we created sauces that would redefine barbecue cuisine.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="glass-card p-8 hover-lift animate-slide-in-right">
                      <div className="text-primary font-semibold text-sm mb-2">1980s</div>
                      <h3 className="font-display text-2xl font-bold mb-4">Craft Revival</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When mass production dominated the market, we chose the path less traveled.
                        Handcrafted with premium ingredients and aged to perfection, our sauces became
                        symbols of authenticity in an increasingly homogenized world.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse" style={{ animationDelay: '2s' }} />
                  <div className="w-1/2 pl-12" />
                </div>

                {/* Event 4 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-1/2 pr-12" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse" style={{ animationDelay: '3s' }} />
                  <div className="w-1/2 pl-12 text-left">
                    <div className="glass-card p-8 hover-lift animate-slide-in-left">
                      <div className="text-accent font-semibold text-sm mb-2">Today</div>
                      <h3 className="font-display text-2xl font-bold mb-4">Legacy Continues</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Today, Prohibition BBQ stands as a testament to timeless craftsmanship. Each bottle
                        carries the weight of history while embracing the innovations of tomorrow. We honor
                        our heritage while pushing the boundaries of flavor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-background/50 via-primary/5 to-background/50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every decision we make reflects our commitment to excellence, authenticity, and the pursuit of perfection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Philosophy Cards */}
              <div className="glass-card p-8 hover-lift animate-scale-in group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎭</div>
                <h3 className="font-display text-xl font-bold mb-4">Authenticity First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of genuine craftsmanship. Every ingredient is selected
                  with purpose, every recipe perfected through generations of refinement.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="font-display text-xl font-bold mb-4">Innovation Through Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We honor the techniques of the past while embracing modern gastronomic
                  discoveries, creating sauces that are both timeless and contemporary.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className="font-display text-xl font-bold mb-4">Excellence in Every Detail</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From the curve of our bottles to the complexity of our flavors, every aspect
                  is crafted with the precision and care that defines true luxury.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
                <h3 className="font-display text-xl font-bold mb-4">Emotional Connection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our sauces don't just enhance meals—they create memories. Each flavor
                  tells a story, evoking the romance and intrigue of a bygone era.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">♾️</div>
                <h3 className="font-display text-xl font-bold mb-4">Sustainability & Heritage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We preserve culinary traditions while building a sustainable future,
                  ensuring that the art of exceptional barbecue endures for generations.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift animate-scale-in group" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                <h3 className="font-display text-xl font-bold mb-4">Community & Craftsmanship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're more than a sauce company—we're a community of flavor enthusiasts,
                  united by our passion for extraordinary culinary experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 hover-lift animate-fade-in">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
                A Legacy of Flavor
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Prohibition BBQ isn't just about sauce—it's about capturing the essence of an era
                when craftsmanship was king and flavor was an art form. Our bottles are vessels
                of history, each drop a testament to the bold spirits who shaped America.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="glass-card px-8 py-3 text-base border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift">
                  "Flavors that transcend time" - Our Promise
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
