import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import transformationVideo1 from "@/assets/transformation-video-1.mp4";
import transformationVideo2 from "@/assets/transformation-video-2.mp4";
import transformationVideo3 from "@/assets/transformation-video-3.mp4";

const transformations = [
  {
    video: transformationVideo1,
    name: "Rahul K.",
    duration: "12 Weeks",
    result: "Lost 15kg, Gained Muscle",
  },
  {
    video: transformationVideo2,
    name: "Priya S.",
    duration: "16 Weeks",
    result: "Complete Body Recomposition",
  },
  {
    video: transformationVideo3,
    name: "Amit R.",
    duration: "20 Weeks",
    result: "From Skinny to Muscular",
  },
];

const VideoCard = ({ video, name, duration, result, index }: {
  video: string;
  name: string;
  duration: string;
  result: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      {/* Animated rotating border */}
      <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--primary)/0.2),hsl(var(--primary)),hsl(var(--primary)/0.2),hsl(var(--primary)))]" />
      </div>
      
      {/* Card content */}
      <div className="relative bg-card rounded-2xl overflow-hidden p-4">
        {/* Video container */}
        <div className="relative rounded-xl overflow-hidden aspect-[9/16] mb-4 bg-muted">
          <video
            src={video}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-display text-xl font-bold">{name}</h3>
            <span className="text-sm text-primary font-semibold">{duration}</span>
          </div>
          <p className="text-muted-foreground">{result}</p>
        </div>
      </div>
    </motion.div>
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
            <Play className="w-4 h-4 text-primary" />
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

        {/* Transformation Video Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {transformations.map((item, index) => (
            <VideoCard key={item.name} {...item} index={index} />
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
