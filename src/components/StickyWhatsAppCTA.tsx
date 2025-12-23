import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const StickyWhatsAppCTA = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring" }}
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.a>
  );
};

export default StickyWhatsAppCTA;
