import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import babyFaceBottle from "@/assets/baby-face-bottle-stock.jpg";
import godfatherRibs from "@/assets/godfather-ribs-stock.jpg";
import bugsyBottle from "@/assets/bugsy-bottle-stock.jpg";

const recipes = [
  {
    id: 1,
    title: "Baby Face BBQ Ribs",
    description: "Sweet and smoky ribs that pack a punch, just like the notorious Baby Face Nelson.",
    sauce: "Baby Face",
    difficulty: "Medium",
    time: "3-4 hours",
    servings: 4,
    image: babyFaceBottle,
    ingredients: [
      "2 racks baby back ribs (about 4 lbs total)",
      "1/2 cup Baby Face BBQ Sauce",
      "1/4 cup brown sugar",
      "2 tbsp smoked paprika",
      "1 tbsp garlic powder",
      "1 tbsp onion powder",
      "Salt and pepper to taste",
      "1 cup apple juice (for spritzing)"
    ],
    instructions: [
      "Remove membrane from back of ribs and pat dry.",
      "Mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper. Rub onto ribs.",
      "Preheat smoker to 225°F. Place ribs bone-side down and smoke for 2 hours.",
      "Spritz with apple juice every 30 minutes.",
      "Apply thin layer of Baby Face BBQ Sauce and continue smoking for 1-2 hours until tender.",
      "Apply final layer of sauce and let rest 15 minutes before slicing."
    ]
  },
  {
    id: 2,
    title: "Godfather's Grilled Steak",
    description: "A commanding steak recipe worthy of The Godfather himself - rich, bold, and unforgettable.",
    sauce: "The Godfather",
    difficulty: "Easy",
    time: "30 minutes",
    servings: 2,
    image: godfatherRibs,
    ingredients: [
      "2 ribeye steaks (1.5 inches thick)",
      "1/4 cup The Godfather BBQ Sauce",
      "2 tbsp olive oil",
      "4 cloves garlic, minced",
      "2 sprigs fresh rosemary",
      "Salt and black pepper to taste"
    ],
    instructions: [
      "Remove steaks from refrigerator 30 minutes before cooking.",
      "Pat dry and season generously with salt and pepper.",
      "Heat grill to high (500°F+).",
      "Brush steaks with olive oil and place on hot grill.",
      "Grill for 4-5 minutes per side for medium-rare.",
      "During last 2 minutes, brush with The Godfather BBQ Sauce.",
      "Remove and let rest 5 minutes. Serve with extra sauce on the side."
    ]
  },
  {
    id: 3,
    title: "Bugsy's Tangy Chicken Wings",
    description: "Sharp and sophisticated wings that leave a lasting impression, just like Bugsy Siegel.",
    sauce: "Bugsy",
    difficulty: "Easy",
    time: "45 minutes",
    servings: 4,
    image: bugsyBottle,
    ingredients: [
      "2 lbs chicken wings",
      "1/2 cup Bugsy BBQ Sauce",
      "1/4 cup hot sauce",
      "2 tbsp butter",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Blue cheese dressing for serving",
      "Celery sticks for serving"
    ],
    instructions: [
      "Preheat oven to 400°F. Line baking sheet with foil.",
      "Pat wings dry and season with salt, pepper, garlic powder, and onion powder.",
      "Bake wings for 25 minutes, then flip and bake 20 minutes more.",
      "While wings bake, melt butter in saucepan and mix with Bugsy BBQ Sauce and hot sauce.",
      "Toss baked wings in sauce mixture.",
      "Return to oven for 5 minutes to caramelize.",
      "Serve with blue cheese dressing and celery."
    ]
  }
];

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

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
              <span className="text-foreground block animate-slide-up hover-lift">Legendary</span>
              <span className="text-primary block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-slide-up hover-scale-subtle transition-all duration-700" style={{ animationDelay: '0.2s' }}>
                Recipes
              </span>
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in hover-glow" style={{ animationDelay: '0.4s' }} />
          </div>

          <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto animate-slide-up hover-lift" style={{ animationDelay: '0.6s' }}>
            Master the art of BBQ with our prohibition-era inspired recipes. Each dish tells a story
            and delivers unforgettable flavor combinations.
          </p>

          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card px-8 py-4 hover-lift hover-glow">
              <span className="text-primary font-medium tracking-wide">Scroll to explore recipes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Showcase */}
      <section className="py-24 relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`glass-card p-8 cursor-pointer transition-all duration-700 hover-lift hover-scale-subtle hover-glow animate-scale-in ${
                selectedRecipe.id === recipe.id ? 'ring-2 ring-primary shadow-2xl shadow-primary/20 bg-primary/5' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedRecipe(recipe)}
            >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={recipe.image}
                    alt={`${recipe.title} featuring ${recipe.sauce} sauce`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-xl font-bold text-primary">{recipe.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{recipe.description}</p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {recipe.sauce}
                    </Badge>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>{recipe.time}</span>
                      <span>•</span>
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Recipe View */}
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Recipe Image */}
              <div className="relative">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="w-full h-80 object-cover rounded-3xl shadow-premium"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  <Badge className="text-xs font-semibold">
                    {selectedRecipe.sauce}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {selectedRecipe.servings} servings
                  </Badge>
                </div>
              </div>

              {/* Recipe Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-4xl font-bold text-primary mb-4">
                    {selectedRecipe.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedRecipe.description}
                  </p>

                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium text-primary">{selectedRecipe.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Difficulty:</span>
                      <span className="font-medium text-primary">{selectedRecipe.difficulty}</span>
                    </div>
                  </div>
                </div>

                <Button className="liquid-button w-full py-4 text-lg font-semibold">
                  Print Recipe
                </Button>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mt-12 grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Ingredients</h3>
                <ul className="space-y-3">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-6">Instructions</h3>
                <ol className="space-y-4">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground leading-relaxed">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recipes;
