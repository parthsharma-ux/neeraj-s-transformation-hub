import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Users, MessageCircle, Dumbbell } from "lucide-react";

const WhyTrainWithMeSection = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Proven Transformation Results",
      description: "Hundreds of successful transformations documented. Real before/after results you can see.",
    },
    {
      icon: MessageCircle,
      title: "Personal Guidance & Accountability",
      description: "Direct communication with me. Regular check-ins, form corrections, and motivation when you need it.",
    },
    {
      icon: Dumbbell,
      title: "Online & Offline Coaching",
      description: "Flexible training options. Whether you're local or anywhere in India, I've got you covered.",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "A growing community of fitness enthusiasts on Instagram who trust my methods and results.",
    },
  ];

  return (
    <section id="why" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
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
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Why Choose Me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Train With{" "}
            <span className="text-gradient">Neeraj Singh Pawar</span>
          </h2>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card-premium h-full p-8 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:glow-effect-sm">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrainWithMeSection;
