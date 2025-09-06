import { Button } from "@/components/ui/button";
import babyFaceBottle from "@/assets/baby-face-bottle-stock.jpg";
import godfatherRibs from "@/assets/godfather-ribs-stock.jpg";
import bugsyBottle from "@/assets/bugsy-bottle-stock.jpg";

const products = [
  {
    id: 1,
    name: "Baby Face",
    subtitle: "Prohibition BBQ",
    description: "Sweet & smoky with a hint of danger. This sauce captures the charm and complexity of the notorious Baby Face Nelson.",
    features: ["Sweet Molasses Base", "Hickory Smoke", "Brown Sugar Finish"],
    image: babyFaceBottle,
  },
  {
    id: 2,
    name: "The Godfather",
    subtitle: "Prohibition BBQ", 
    description: "Rich, bold, and commanding respect. A sauce worthy of the most powerful families in BBQ history.",
    features: ["Tomato & Bourbon", "Garlic & Herbs", "Premium Spices"],
    image: godfatherRibs,
  },
  {
    id: 3,
    name: "Bugsy",
    subtitle: "Prohibition BBQ",
    description: "Sharp, sophisticated, and unforgettable. Like its namesake, this sauce leaves a lasting impression.",
    features: ["Tangy Vinegar Base", "Black Pepper", "Citrus Notes"],
    image: bugsyBottle,
  }
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-foreground block">Meet the</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Legendary Crew
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Each sauce in our collection is inspired by the most notorious figures of the prohibition era, 
            crafted with premium ingredients and uncompromising attention to flavor.
          </p>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20" role="grid" aria-label="Product collection">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="glass-card p-12 group hover-lift hover-scale-subtle hover-glow transition-all duration-700 focus-within:hover-lift focus-within:hover-scale-subtle focus-within:hover-glow animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              role="gridcell"
              aria-labelledby={`product-${product.id}-title`}
              tabIndex={0}
            >
              {/* Enhanced Product Image */}
              <div className="relative mb-10 overflow-hidden rounded-3xl group/image">
                <img 
                  src={product.image} 
                  alt={`${product.name} ${product.subtitle} sauce bottle`}
                  className="w-full h-96 object-cover group-hover/image:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 glass-card p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <span className="text-primary text-sm font-semibold">Premium</span>
                </div>
              </div>

              {/* Enhanced Product Info */}
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3
                    id={`product-${product.id}-title`}
                    className="font-display text-4xl font-bold text-primary group-hover:text-accent group-focus:text-accent transition-colors duration-300"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xl text-muted-foreground font-medium" aria-label={`${product.name} ${product.subtitle}`}>
                    {product.subtitle}
                  </p>
                </div>
                
                <p className="text-lg text-foreground/90 leading-relaxed px-2">
                  {product.description}
                </p>

                {/* Enhanced Features */}
                <div className="py-4">
                  <h4 className="font-semibold text-accent mb-4 text-lg">Signature Notes</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center group/feature">
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover/feature:bg-accent transition-colors duration-300" />
                        <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced CTA Button */}
                <Button
                  className="liquid-button w-full py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label={`Add ${product.name} to cart for $12.99`}
                  onClick={(e) => {
                    // Simulate loading state
                    const button = e.currentTarget as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = 'Adding...';
                    button.disabled = true;
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                    }, 1500);
                  }}
                >
                  Add to Cart - $12.99
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Collection CTA */}
        <div className="text-center">
          <div className="glass-card p-16 max-w-4xl mx-auto group hover:scale-105 transition-all duration-500">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-display text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Get the Complete Collection
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
              </div>
              
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Save 20% when you purchase all three legendary sauces together. 
                Perfect for the serious pitmaster or BBQ enthusiast.
              </p>
              
              <div className="pt-4">
                <Button
                  className="liquid-button px-16 py-6 text-xl font-semibold text-primary-foreground shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Purchase all three sauces as a bundle for $29.99 - Limited time offer"
                  onClick={(e) => {
                    // Simulate loading state
                    const button = e.currentTarget as HTMLButtonElement;
                    const originalText = button.textContent;
                    button.textContent = 'Adding Bundle...';
                    button.disabled = true;
                    setTimeout(() => {
                      button.textContent = originalText;
                      button.disabled = false;
                    }, 1500);
                  }}
                >
                  Bundle All Three - $29.99
                </Button>
                <p className="text-sm text-accent mt-3 font-medium" role="status" aria-live="polite">Limited Time Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;