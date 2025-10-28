import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
