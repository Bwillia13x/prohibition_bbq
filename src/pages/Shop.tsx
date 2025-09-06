import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import babyFaceBottle from "@/assets/baby-face-bottle-stock.jpg";
import godfatherRibs from "@/assets/godfather-ribs-stock.jpg";
import bugsyBottle from "@/assets/bugsy-bottle-stock.jpg";

const Shop = () => {
  const [cartItems, setCartItems] = useState<{[key: string]: number}>({});

  const products = [
    {
      id: "baby-face",
      name: "Baby Face",
      subtitle: "Prohibition BBQ",
      description: "Sweet & smoky with a hint of danger. This sauce captures the charm and complexity of the notorious Baby Face Nelson.",
      price: 12.99,
      image: babyFaceBottle,
      features: ["Sweet Molasses Base", "Hickory Smoke", "Brown Sugar Finish"],
      spicy: "Mild",
      size: "16oz",
      rating: 4.8
    },
    {
      id: "godfather",
      name: "The Godfather",
      subtitle: "Prohibition BBQ",
      price: 12.99,
      description: "Rich, bold, and commanding respect. A sauce worthy of the most powerful families in BBQ history.",
      image: godfatherRibs,
      features: ["Tomato & Bourbon", "Garlic & Herbs", "Premium Spices"],
      spicy: "Medium",
      size: "16oz",
      rating: 4.9
    },
    {
      id: "bugsy",
      name: "Bugsy",
      subtitle: "Prohibition BBQ",
      price: 12.99,
      description: "Sharp, sophisticated, and unforgettable. Like its namesake, this sauce leaves a lasting impression.",
      image: bugsyBottle,
      features: ["Tangy Vinegar Base", "Black Pepper", "Citrus Notes"],
      spicy: "Hot",
      size: "16oz",
      rating: 4.7
    }
  ];

  const addToCart = (productId: string) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => {
      const newCount = (prev[productId] || 0) - 1;
      if (newCount <= 0) {
        const {[productId]: _, ...rest} = prev;
        return rest;
      }
      return { ...prev, [productId]: newCount };
    });
  };

  const getCartTotal = () => {
    return Object.entries(cartItems).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const getSpicyColor = (spicy: string) => {
    switch (spicy.toLowerCase()) {
      case 'mild': return 'text-green-500 bg-green-500/10';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10';
      case 'hot': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
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
              Premium Collection
            </Badge>

            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tight mb-8">
              <span className="text-foreground block animate-slide-up hover-lift">Shop the</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle cursor-default transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                Legendary Collection
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Discover our premium BBQ sauces, each bottle crafted with the same attention to detail
              as a speakeasy cocktail. Every flavor tells a story from the golden age of prohibition.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Summary Bar */}
      {getTotalItems() > 0 && (
        <div className="sticky top-24 z-40 mx-8 mb-8">
          <div className="glass-card-premium p-4 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-lg font-semibold">Cart: {getTotalItems()} items</div>
                <div className="text-primary font-bold">${getCartTotal().toFixed(2)}</div>
              </div>
              <Button className="liquid-button px-6 py-2 text-sm font-semibold">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="glass-card-premium p-8 hover-lift hover-scale-elegant hover-glow-subtle animate-scale-in rounded-3xl relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Product Image */}
                <div className="relative mb-8 overflow-hidden rounded-2xl group/image">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.subtitle} sauce bottle`}
                    className="w-full h-80 object-cover group-hover/image:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 glass-card p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xl text-muted-foreground font-medium">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge className={`${getSpicyColor(product.spicy)} border-0 font-medium`}>
                          {product.spicy}
                        </Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {product.size}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        ${product.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-accent text-lg">Signature Notes</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center group/feature">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover/feature:bg-accent transition-colors duration-300" />
                            <span className="text-muted-foreground group-hover/feature:text-foreground transition-colors duration-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quantity and Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div className="flex items-center space-x-3">
                      <Button
                        onClick={() => removeFromCart(product.id)}
                        disabled={!cartItems[product.id]}
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5"
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {cartItems[product.id] || 0}
                      </span>
                      <Button
                        onClick={() => addToCart(product.id)}
                        size="sm"
                        className="w-8 h-8 p-0 rounded-full"
                      >
                        +
                      </Button>
                    </div>

                    <Button
                      onClick={() => addToCart(product.id)}
                      className="liquid-button px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl hover-lift hover-glow hover-scale-elegant transition-all duration-500 group relative overflow-hidden"
                    >
                      <span className="relative z-10 tracking-wide">Add to Cart</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection CTA */}
      <section className="py-20 bg-gradient-to-r from-background/50 via-primary/5 to-background/50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card-premium p-12 hover-lift animate-fade-in rounded-3xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                    Complete Your Collection
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Why choose just one when you can experience the full spectrum of Prohibition BBQ?
                  Each sauce brings its own unique personality to your culinary adventures.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <Button className="liquid-button px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl hover-lift hover-glow hover-scale-elegant transition-all duration-500 group rounded-2xl relative overflow-hidden">
                    <span className="relative z-10 tracking-wide">Add All to Cart - $35.97</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  </Button>
                  <Button variant="outline" className="glass-card px-8 py-4 text-lg border-2 border-primary/30 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-500 hover-lift hover-scale-elegant rounded-2xl">
                    View Recipes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns Info */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 hover-lift animate-scale-in group text-center">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚚</div>
              <h3 className="font-display text-xl font-bold mb-4">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $25. Fast, secure delivery
                to your doorstep within 3-5 business days.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift animate-scale-in group text-center" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🔄</div>
              <h3 className="font-display text-xl font-bold mb-4">30-Day Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return any product within 30 days for a
                full refund. Quality guaranteed.
              </p>
            </div>

            <div className="glass-card p-8 hover-lift animate-scale-in group text-center" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="font-display text-xl font-bold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Handcrafted with premium ingredients and aged to perfection.
                Every bottle meets our uncompromising standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
