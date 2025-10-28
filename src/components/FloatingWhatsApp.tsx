import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "+264814226972";
  const whatsappMessage = "Hi! I'm interested in ordering from Nostalgic Confectionery. Could you tell me what's available?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Button
      variant="hero"
      size="icon"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-elegant hover:shadow-xl z-50 animate-bounce"
      onClick={() => window.open(whatsappUrl, '_blank')}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default FloatingWhatsApp;
