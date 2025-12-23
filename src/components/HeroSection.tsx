import { motion } from "framer-motion";
import { MessageCircle, Instagram, Play } from "lucide-react";
import trainerHero from "@/assets/trainer-hero.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated glow effects */}
      <div className="floating-glow w-96 h-96 -top-48 -right-48 animate-pulse-glow" />
      <div className="floating-glow w-64 h-64 bottom-20 -left-32 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <Instagram className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">@neerajsinghpawar_fitness</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Transform Your Body With{" "}
              <span className="text-gradient">Discipline & Strength</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Online Coaching | Personal Training | Proven Results
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center justify-center gap-3 rounded-lg text-primary-foreground"
              >
                <MessageCircle className="w-5 h-5" />
                Start Your Transformation
              </a>
              <a
                href="#transformations"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-border rounded-lg text-foreground font-semibold uppercase tracking-wider transition-all hover:border-primary hover:bg-primary/10"
              >
                <Play className="w-5 h-5 group-hover:text-primary transition-colors" />
                See Results
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "500+", label: "Clients Transformed" },
                { value: "10K+", label: "Instagram Followers" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Trainer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            </div>
            
            {/* Image container */}
            <div className="relative">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect-sm">
                <img
                  src={trainerHero}
                  alt="Neeraj Singh Pawar - Fitness Coach"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 top-8 px-4 py-2 bg-card border border-border rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </motion.div>
              
              {/* Name tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-accent rounded-lg shadow-lg"
              >
                <span className="font-display font-bold text-primary-foreground tracking-wider">NEERAJ SINGH PAWAR</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
