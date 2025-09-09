import {
  BrandStory,
  BrandValues,
  BrandMission,
  ProductPersonality,
} from "./BrandNarrative";

const StorySection = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      {/* Refined Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/6 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/4 rounded-full blur-2xl opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Brand Story Content */}
          <div className="space-y-12">
            <BrandStory variant="section" />

            <div className="space-y-8">
              <BrandMission variant="compact" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 glass-card rounded-xl">
                  <div className="text-3xl font-bold text-primary font-display mb-2">
                    1923
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Original Recipe Year
                  </div>
                </div>
                <div className="text-center p-6 glass-card rounded-xl">
                  <div className="text-3xl font-bold text-primary font-display mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Natural Ingredients
                  </div>
                </div>
                <div className="text-center p-6 glass-card rounded-xl">
                  <div className="text-3xl font-bold text-primary font-display mb-2">
                    3
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Legendary Flavors
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Values & Quality */}
          <div className="space-y-8">
            <div className="glass-card p-8 hover:scale-[1.02] transition-all duration-500">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-primary text-center">
                  Craftsmanship Principles
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      name: "Premium Molasses & Brown Sugar",
                      color: "primary",
                    },
                    { name: "Authentic Hickory Smoke", color: "accent" },
                    { name: "Hand-Selected Spices", color: "primary" },
                    { name: "Small-Batch Crafted", color: "accent" },
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      className="flex items-center space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                    >
                      <div
                        className={`w-3 h-3 bg-${item.color} rounded-full group-hover:scale-125 transition-transform duration-300`}
                      />
                      <span
                        className={`text-base font-medium group-hover:text-${item.color} transition-colors duration-300`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Personalities Showcase */}
            <div className="grid gap-6">
              {["baby-face", "godfather", "bugsy"].map((productId) => (
                <div
                  key={productId}
                  className="glass-card p-6 hover:scale-[1.02] transition-all duration-500"
                >
                  <ProductPersonality productId={productId} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
