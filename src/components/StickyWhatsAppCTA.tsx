import { motion } from "framer-motion";
import { MessageCircle, Clock } from "lucide-react";

const StickyWhatsAppCTA = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  return (
    <>
      {/* Sticky Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Urgency text */}
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">
                <span className="text-primary font-semibold">Limited coaching slots available</span> — Don't miss out!
              </span>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-hero inline-flex items-center justify-center gap-3 rounded-lg text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating WhatsApp Button (Mobile) */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-50 sm:hidden w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse-glow"
        style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)" }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </>
  );
};

export default StickyWhatsAppCTA;
