import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      alert("Thank you for your order! This is a demo - no actual payment was processed.");
      clearCart();
      setCheckoutLoading(false);
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-8 py-40">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <ShoppingBag className="w-24 h-24 mx-auto text-muted-foreground" />
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                Your Cart is Empty
              </h1>
              <p className="text-xl text-muted-foreground">
                Looks like you haven't added any Prohibition BBQ sauces to your cart yet.
              </p>
            </div>

            <div className="space-y-4">
              <Link to="/shop">
                <Button className="liquid-button px-12 py-6 text-xl font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-scale-elegant transition-all duration-700">
                  Browse Our Sauces
                </Button>
              </Link>
              <div className="text-sm text-muted-foreground">
                Free shipping on orders over $35
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-8 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground">
              Your Cart
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground">
              {state.totalItems} {state.totalItems === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="glass-card p-8 flex flex-col sm:flex-row gap-6 items-start hover-lift transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={`${item.name} ${item.subtitle}`}
                      className="w-32 h-32 object-cover rounded-2xl shadow-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {item.subtitle}
                        </p>
                        {item.spicy && (
                          <Badge variant="secondary" className="mt-2">
                            {item.spicy}
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {item.size}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                          className="w-16 text-center border-0"
                          min="1"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 sticky top-8 space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.totalItems} items)</span>
                    <span>${state.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">
                      {state.totalPrice >= 35 ? 'FREE' : '$4.99'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(state.totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <hr className="border-primary/20" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${(state.totalPrice + (state.totalPrice >= 35 ? 0 : 4.99) + (state.totalPrice * 0.08)).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleCheckout}
                    disabled={checkoutLoading}
                    className="liquid-button w-full py-6 text-lg font-semibold text-primary-foreground shadow-2xl hover:shadow-3xl hover-lift hover-scale-elegant transition-all duration-700"
                  >
                    {checkoutLoading ? 'Processing...' : 'Complete Order'}
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Free shipping on orders over $35
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Secure checkout powered by demo system
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/20">
                  <Link to="/shop">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
