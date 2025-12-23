import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this coaching for?",
    answer: "This coaching is for beginners as well as intermediate fitness enthusiasts who want structured training, discipline, and long-term results. Programs are customized based on individual fitness goals and lifestyle."
  },
  {
    question: "Do you provide online coaching or offline training?",
    answer: "Yes. Training is available in both online coaching and offline gym training, depending on availability and client preference."
  },
  {
    question: "How are transformation results achieved?",
    answer: "Results are achieved through a combination of: Structured workout plans, Proper training techniques, Consistency & discipline, and Lifestyle-focused fitness guidance. There are no shortcuts — only sustainable methods."
  },
  {
    question: "Are the transformation videos real?",
    answer: "Yes. All transformation images and videos displayed are from real clients and real Instagram posts shared publicly."
  },
  {
    question: "Do I need gym experience to start?",
    answer: "No. Beginners are welcome. Programs are designed according to your current fitness level and gradually progressed over time."
  },
  {
    question: "How do I get started?",
    answer: "Simply click the WhatsApp Enquiry button and share your fitness goal. You'll receive guidance on the best training option for you."
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary based on body type, consistency, and lifestyle. Most people start noticing visible improvements within a few weeks of regular training and discipline."
  },
  {
    question: "Is this a paid program?",
    answer: "Yes. Coaching programs are paid and customized based on individual goals. Pricing and plans are shared after enquiry."
  },
  {
    question: "Is diet included in the coaching?",
    answer: "Basic nutrition guidance is provided to support training goals. Detailed diet plans may vary based on the selected program."
  },
  {
    question: "Is this safe for beginners?",
    answer: "Yes. All programs focus on proper form, gradual progression, and safety to reduce the risk of injury."
  }
];

const FAQSection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="floating-glow w-80 h-80 top-1/3 -left-40" />

      <div className="container relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the coaching programs
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/20 via-card to-card border border-primary/30 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Transformation?</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Take the first step towards your fitness goals today
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center justify-center gap-3 rounded-xl text-primary-foreground"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp to Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
