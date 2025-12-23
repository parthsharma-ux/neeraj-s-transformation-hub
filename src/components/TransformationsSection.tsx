import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import transformationVideo1 from "@/assets/transformation-video-1.mp4";
import transformationVideo2 from "@/assets/transformation-video-2.mp4";
import transformationVideo3 from "@/assets/transformation-video-3.mp4";

const transformations = [
  { video: transformationVideo1 },
  { video: transformationVideo2 },
  { video: transformationVideo3 },
];

const VideoCard = ({ video, index }: {
  video: string;
  index: number;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full group"
    >
      {/* Rotating border container */}
      <div className="relative p-[2px] rounded-2xl overflow-hidden">
        {/* Animated rotating gradient border */}
        <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,hsl(var(--primary)),hsl(var(--primary)/0.2),hsl(var(--primary)),hsl(var(--primary)/0.2),hsl(var(--primary)))]" />
        
        {/* Card content */}
        <div 
          className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-card cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            loop
            playsInline
            onEnded={handleVideoEnd}
          />
          
          {/* Play/Pause overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-background/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-primary-foreground" />
              ) : (
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              )}
            </div>
          </div>

          {/* Mute/Unmute button */}
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-background/70 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 hover:bg-background/90"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-foreground" />
              ) : (
                <Volume2 className="w-5 h-5 text-foreground" />
              )}
            </button>
          )}
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
            <VideoCard key={index} video={item.video} index={index} />
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
