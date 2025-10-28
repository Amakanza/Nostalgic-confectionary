import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+264814226972";
  const whatsappMessage = "Hi! I'm interested in ordering from Nostalgic Confectionery. Could you tell me what's available?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-script text-5xl md:text-6xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to order something sweet? Contact us on WhatsApp to discuss your custom creation
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Quick responses</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">{whatsappNumber}</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Orders</h3>
                  <p className="text-sm text-muted-foreground">Pre-order required</p>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Tell us about your celebration and we'll help create the perfect sweet treat
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
