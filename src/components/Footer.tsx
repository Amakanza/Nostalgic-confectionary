const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="font-script text-3xl font-bold text-foreground mb-2">
            Nostalgic Confectionery
          </h3>
          <p className="text-muted-foreground mb-4">
            Handcrafted with love for every celebration
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nostalgic Confectionery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
