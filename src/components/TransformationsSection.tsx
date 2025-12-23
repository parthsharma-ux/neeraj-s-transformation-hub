import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import transformation3 from "@/assets/transformation-3.jpg";

const TransformationsSection = () => {
  const transformations = [
    {
      image: transformation1,
      name: "Rahul K.",
      duration: "12 Weeks",
      result: "Lost 15kg, Gained Muscle",
    },
    {
      image: transformation2,
      name: "Priya S.",
      duration: "16 Weeks",
      result: "Complete Body Recomposition",
    },
    {
      image: transformation3,
      name: "Amit R.",
      duration: "20 Weeks",
      result: "From Skinny to Muscular",
    },
  ];

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

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="card-premium rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:glow-effect-sm">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} transformation`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Before/After labels */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 text-xs font-bold uppercase bg-muted/80 backdrop-blur-sm rounded-full">
                      Before
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 text-xs font-bold uppercase bg-primary/80 backdrop-blur-sm rounded-full text-primary-foreground">
                      After
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
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
