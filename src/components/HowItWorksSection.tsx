import { motion } from "framer-motion";
import { Instagram, Globe, MessageCircle, Trophy, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Instagram,
      title: "Find Me on Instagram",
      description: "Discover my content, training videos, and client transformations on Instagram.",
    },
    {
      number: "02",
      icon: Globe,
      title: "Visit This Website",
      description: "Explore my programs, see real results, and learn about my coaching methodology.",
    },
    {
      number: "03",
      icon: MessageCircle,
      title: "WhatsApp Enquiry",
      description: "Send me a message on WhatsApp. Tell me your goals and let's discuss your transformation.",
    },
    {
      number: "04",
      icon: Trophy,
      title: "Start Training",
      description: "Join my coaching program and begin your journey to a stronger, fitter you.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="floating-glow w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these steps to begin your transformation journey.
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="card-premium p-6 rounded-2xl text-center h-full hover:border-primary/50 transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                    {step.number.slice(-1)}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 mt-4 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
