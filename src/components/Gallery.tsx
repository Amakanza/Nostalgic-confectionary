import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Custom celebration cakes and cupcakes" },
    { src: gallery2, alt: "Butterfly cakes and colorful cupcakes" },
    { src: gallery3, alt: "Themed cakes and party treats" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-soft">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-script text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Sweet Creations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cake tells a story, every cupcake brings joy. Browse our collection of handcrafted confections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-lg">
            Follow us on social media for more delicious inspiration
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
