import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, User, Sparkles, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-fitness-coach`;

const AIFitnessCoach = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const whatsappLink = "https://wa.me/919999999999?text=Hi%20Neeraj!%20I%20want%20to%20start%20my%20fitness%20transformation";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const streamChat = useCallback(async (chatMessages: Message[]) => {
    setIsLoading(true);
    let assistantContent = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: chatMessages }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to connect to AI coach");
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      // Add empty assistant message
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantContent };
                return updated;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev.filter(m => m.content !== ""),
        { role: "assistant", content: "Sorry, I encountered an issue. Please try again! 💪" }
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const startConversation = async () => {
    setHasStarted(true);
    await streamChat([{ role: "user", content: "Hi, I want to start my fitness journey!" }]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    await streamChat(updatedMessages);
  };

  return (
    <section id="ai-coach" className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              AI-Powered
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">AI Fitness Coach</span>
            <br />
            <span className="text-foreground">by Neeraj</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get personalized calorie calculations, macro breakdown, diet plans, and workout routines — 
            powered by AI, designed by a real fitness coach.
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-premium rounded-2xl overflow-hidden border border-border/50">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow-effect-sm">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">AI Fitness Coach</h3>
                  <p className="text-sm text-muted-foreground">by Neeraj Singh Pawar</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-background/50">
              {!hasStarted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center glow-effect">
                    <Bot className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Ready to Transform? 💪
                    </h4>
                    <p className="text-muted-foreground max-w-sm">
                      I'll help you calculate your calories, macros, and create a personalized 
                      diet & workout plan in just a few minutes!
                    </p>
                  </div>
                  <Button
                    onClick={startConversation}
                    className="btn-hero rounded-xl"
                    disabled={isLoading}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start My Fitness Plan
                  </Button>
                </motion.div>
              ) : (
                <>
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "user" 
                            ? "bg-secondary" 
                            : "bg-primary/20"
                        }`}>
                          {message.role === "user" ? (
                            <User className="w-4 h-4 text-foreground" />
                          ) : (
                            <Bot className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-md"
                            : "bg-secondary text-foreground rounded-bl-md"
                        }`}>
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">
                            {message.content}
                            {isLoading && index === messages.length - 1 && message.role === "assistant" && (
                              <span className="inline-block w-1 h-4 ml-1 bg-current animate-pulse" />
                            )}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Chat Input */}
            {hasStarted && (
              <form onSubmit={sendMessage} className="p-4 border-t border-border/50 bg-card/50">
                <div className="flex gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your response..."
                    disabled={isLoading}
                    className="flex-1 bg-secondary rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-primary hover:bg-primary/90 rounded-xl px-4"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* CTA After Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want fully personalized coaching with weekly tracking?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero rounded-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Neeraj on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-xs text-muted-foreground"
          >
            ⚠️ This AI Fitness Coach provides general fitness guidance only. 
            Consult a certified trainer before starting any program.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFitnessCoach;
