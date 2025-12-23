import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";
import neerajMeditation from "@/assets/neeraj-meditation.jpg";

const AboutSection = () => {
  const features = [
    { icon: Award, label: "Certified Coach" },
    { icon: Target, label: "Goal Focused" },
    { icon: Users, label: "500+ Clients" },
    { icon: Zap, label: "Real Results" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border glow-effect-sm">
                <img
                  src={neerajMeditation}
                  alt="Neeraj Singh Pawar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl" />
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 p-4 bg-card border border-border rounded-xl shadow-xl"
              >
                <div className="text-3xl font-display font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">About The Trainer</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Your Coach, Your{" "}
              <span className="text-gradient">Transformation Partner</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Certified fitness coach with years of experience helping clients achieve real, 
              sustainable transformations. My approach combines discipline, science-backed training, 
              and personalized nutrition to deliver results that last.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking to build muscle, lose fat, or completely transform your 
              physique — I provide the guidance, accountability, and expertise to get you there. 
              No shortcuts, no fake promises. Just real work and real results.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg group hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-lg">
              <p className="text-lg italic text-foreground/90">
                "Discipline is the bridge between goals and accomplishment. 
                Let's build that bridge together."
              </p>
              <p className="mt-2 text-sm text-primary font-semibold">— Neeraj Singh Pawar</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
