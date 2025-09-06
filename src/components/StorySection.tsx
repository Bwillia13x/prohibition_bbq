const StorySection = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Story Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-foreground animate-slide-up">Born in the</span>
              <br />
              <span className="text-primary animate-slide-up bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>Underground</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p>
                In the shadows of prohibition-era speakeasies, where legends were made and secrets were kept, 
                our recipes were born. Each bottle carries the spirit of rebellion and the pursuit of perfection 
                that defined the roaring twenties.
              </p>
              
              <p>
                Inspired by the most notorious figures of the era – Baby Face Nelson's sweet charm, 
                The Godfather's commanding presence, and Bugsy Siegel's sharp sophistication – 
                our sauces deliver flavors as bold and unforgettable as their namesakes.
              </p>
              
              <p>
                We use only the finest ingredients, sourced from trusted suppliers and crafted in small batches 
                to ensure every bottle meets our uncompromising standards. Because when you're building a legend, 
                there's no room for compromise.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">1923</div>
                <div className="text-sm text-muted-foreground mt-2">Original Recipe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">100%</div>
                <div className="text-sm text-muted-foreground mt-2">Natural Ingredients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">3</div>
                <div className="text-sm text-muted-foreground mt-2">Legendary Flavors</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Visual Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-12 hover:scale-105 transition-all duration-500">
              <div className="space-y-8">
                {/* Enhanced Ingredient highlights */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">Premium Molasses & Brown Sugar</span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-medium group-hover:text-accent transition-colors duration-300">Authentic Hickory Smoke</span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">Hand-Selected Spices</span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                    <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-lg font-medium group-hover:text-accent transition-colors duration-300">Small-Batch Crafted</span>
                  </div>
                </div>
                
                {/* Enhanced Quality badge */}
                <div className="glass-card p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
                  <div className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    Craft Quality
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Every batch tested for perfection
                  </div>
                  <div className="mt-3 flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;