import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

// Add your actual Instagram post URLs here
const instagramPostUrls = [
  "https://www.instagram.com/p/EXAMPLE1/",
  "https://www.instagram.com/p/EXAMPLE2/",
  "https://www.instagram.com/p/EXAMPLE3/",
  "https://www.instagram.com/p/EXAMPLE4/",
  "https://www.instagram.com/p/EXAMPLE5/",
  "https://www.instagram.com/p/EXAMPLE6/",
];

const InstagramEmbed = ({ url }: { url: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div ref={containerRef} className="instagram-embed-container">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "transparent",
          border: 0,
          borderRadius: "12px",
          margin: 0,
          maxWidth: "100%",
          minWidth: "100%",
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramFeedSection = () => {
  return (
    <section id="instagram" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Instagram className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Follow on Instagram
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Latest From <span className="text-gradient">Instagram</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Daily workout tips, client transformations, and fitness motivation
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Instagram Embeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {instagramPostUrls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full"
            >
              <InstagramEmbed url={url} />
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/neerajsinghpawar_fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity group"
          >
            <Instagram className="w-5 h-5" />
            Follow @neerajsinghpawar_fitness
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;
