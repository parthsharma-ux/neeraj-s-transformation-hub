import { motion } from "framer-motion";
import { Instagram, Star, Quote, CheckCircle } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Vikram M.",
      role: "Lost 20kg in 4 months",
      text: "Neeraj's coaching completely changed my life. His dedication and personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Sneha P.",
      role: "Competition Ready",
      text: "From never stepping into a gym to competing on stage. Neeraj believed in me when I didn't believe in myself.",
      rating: 5,
    },
    {
      name: "Rohit K.",
      role: "Muscle Gain Journey",
      text: "Best investment I've ever made. The results speak for themselves. Highly recommend to anyone serious about fitness.",
      rating: 5,
    },
  ];

  return (
    <section id="social-proof" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 px-4">
        {/* Instagram Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-2xl font-bold">@neerajsinghpawar_fitness</span>
                  <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" />
                </div>
                <p className="text-muted-foreground">Fitness Coach & Influencer</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8 p-6 bg-card border border-border rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">10K+</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-gradient">200+</div>
                <div className="text-sm text-muted-foreground">Reels</div>
              </div>
            </div>

            {/* As seen on badge */}
            <div className="mt-8 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                ✦ As Featured on Instagram ✦
              </span>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What My <span className="text-gradient">Clients Say</span>
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="card-premium h-full p-6 rounded-2xl relative">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/90 mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
