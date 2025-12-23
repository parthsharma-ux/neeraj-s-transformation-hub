import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const InstagramFeedSection = () => {
  // Placeholder Instagram posts - in production, these would be fetched via Instagram API
  const instagramPosts = [
    {
      id: 1,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
      likes: "1.2K",
      caption: "Consistency beats intensity. Every. Single. Time. 💪",
    },
    {
      id: 2,
      type: "reel",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      likes: "3.5K",
      caption: "Client transformation in 12 weeks 🔥",
    },
    {
      id: 3,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
      likes: "2.1K",
      caption: "Morning workout hits different ☀️",
    },
    {
      id: 4,
      type: "reel",
      thumbnail: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&h=400&fit=crop",
      likes: "4.8K",
      caption: "Full body workout routine - save this! 📌",
    },
    {
      id: 5,
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&h=400&fit=crop",
      likes: "1.8K",
      caption: "Discipline is the bridge to your goals 🌉",
    },
    {
      id: 6,
      type: "reel",
      thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=400&fit=crop",
      likes: "5.2K",
      caption: "Before vs After - 16 week journey 📈",
    },
  ];

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

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/neerajsinghpawar_fitness"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
            >
              {/* Thumbnail */}
              <img
                src={post.thumbnail}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <Instagram className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-semibold text-center line-clamp-2">{post.caption}</span>
                <span className="text-xs text-primary mt-2">❤️ {post.likes}</span>
              </div>

              {/* Reel indicator */}
              {post.type === "reel" && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-semibold">
                  REEL
                </div>
              )}
            </motion.a>
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
