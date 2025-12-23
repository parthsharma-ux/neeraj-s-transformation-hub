import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

// Replace these with your actual Instagram transformation post URLs
const transformationPosts = [
  {
    url: "https://www.instagram.com/p/TRANSFORMATION1/",
    name: "Rahul K.",
    duration: "12 Weeks",
    result: "Lost 15kg, Gained Muscle",
  },
  {
    url: "https://www.instagram.com/p/TRANSFORMATION2/",
    name: "Priya S.",
    duration: "16 Weeks",
    result: "Complete Body Recomposition",
  },
  {
    url: "https://www.instagram.com/p/TRANSFORMATION3/",
    name: "Amit R.",
    duration: "20 Weeks",
    result: "From Skinny to Muscular",
  },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
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
  );
};

const TransformationsSection = () => {
  return (
    <section id="transformations" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="floating-glow w-96 h-96 top-1/4 -right-48" />
      <div className="floating-glow w-64 h-64 bottom-1/4 -left-32" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Instagram className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Client Transformations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Real People.{" "}
            <span className="text-gradient">Real Transformations.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No fake promises. Just proven results from dedicated clients who committed to the process.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Transformation Cards with Instagram Embeds */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {transformationPosts.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="card-premium rounded-2xl overflow-hidden p-4">
                {/* Instagram Embed */}
                <div className="rounded-xl overflow-hidden mb-4">
                  <InstagramEmbed url={item.url} />
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold">{item.name}</h3>
                    <span className="text-sm text-primary font-semibold">{item.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{item.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/neerajsinghpawar_fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            View More on Instagram
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsSection;
