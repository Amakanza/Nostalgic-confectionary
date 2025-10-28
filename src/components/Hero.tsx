import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bakery.jpg";

const Hero = () => {
  const whatsappNumber = "+264814226972";
  const whatsappMessage = "Hi! I'm interested in ordering from Nostalgic Confectionery. Could you tell me what's available?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-2xl">
          <h1 className="font-script text-6xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in">
            Nostalgic
            <span className="block text-primary">Confectionery</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Handcrafted cakes, cupcakes, and sweet treats made with love for your special moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-2"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
