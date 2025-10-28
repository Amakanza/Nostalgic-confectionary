import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cake, CakeSlice, Cookie, IceCream } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Cake,
      title: "Custom Cakes",
      description: "Beautifully designed cakes for birthdays, weddings, and special celebrations",
    },
    {
      icon: CakeSlice,
      title: "Cupcakes",
      description: "Delightful cupcakes in various flavors with elegant decorations",
    },
    {
      icon: Cookie,
      title: "Cake Jars",
      description: "Layered cake jars - perfect for gifts and individual servings",
    },
    {
      icon: IceCream,
      title: "Sweet Treats",
      description: "Cinnamon rolls, chocolate rolls, and other delectable pastries",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom cakes to delightful treats, we create confections that make your celebrations unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
