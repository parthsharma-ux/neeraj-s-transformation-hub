import { motion } from "framer-motion";
import { Instagram, MessageCircle, Heart } from "lucide-react";

const FooterSection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  return (
    <footer className="relative py-16 pb-32 overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Brand */}
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            <span className="text-gradient">Neeraj Singh Pawar</span> Fitness
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Transform your body with discipline, dedication, and expert guidance. 
            Your fitness journey starts here.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://instagram.com/neerajsinghpawar_fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-green-500 hover:bg-green-500/10 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Demo Notice */}
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg mb-8">
            <p className="text-sm text-primary">
              This is a DEMO preview — Final website will be customized
            </p>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for Neeraj Singh Pawar Fitness
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © 2024 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
