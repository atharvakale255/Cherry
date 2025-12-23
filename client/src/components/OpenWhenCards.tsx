import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { soundEffects } from "@/lib/soundEffects";

const cards = [
  {
    id: "distant",
    title: "Open when things feel distant",
    color: "bg-primary/20",
    content: "Distance doesn't diminish what we have. In fact, it makes me realize how much you truly mean to me. We've crossed miles just to have conversations at 3am. That's love. That's us. Pick up the phone, I'm listening. 💕"
  },
  {
    id: "doubt",
    title: "Open when you doubt yourself",
    color: "bg-secondary/30",
    content: "Stop right there. You are WORTHY of everything good that comes your way. You inspire me with your strength, your humor, your heart. If you won't believe in yourself today, believe in how much I believe in you. You've got this. 💪"
  },
  {
    id: "overwhelmed",
    title: "Open when you feel overwhelmed",
    color: "bg-accent/30",
    content: "Breathe. Just breathe for a moment. The world can wait. You don't have to figure it all out today. One step at a time. One moment at a time. And whenever you need me to just sit with you in the chaos, I'm here. Always. 🤍"
  },
  {
    id: "reassurance",
    title: "Open when you need reassurance",
    color: "bg-primary/20",
    content: "You are enough. You have always been enough. Your weird jokes, your random thoughts, your messy days—they all make you perfectly, beautifully YOU. I didn't choose you by accident. I choose you every single day. ✨"
  },
  {
    id: "thinking",
    title: "Open when you're thinking too much",
    color: "bg-secondary/30",
    content: "I know your brain is running a million miles an hour right now. Let it run. But know this—you're not alone in this. Call me. Text me. Send me your rambling thoughts at 2am. That's what I'm here for. Let's untangle it together. 🌙"
  },
  {
    id: "racing",
    title: "Open when your thoughts won't slow down",
    color: "bg-accent/30",
    content: "Your mind is beautiful even when it's chaotic. Those racing thoughts? They're part of what makes you creative, passionate, and brilliant. Take a break. Drink some water. And remember—you don't have to figure everything out right now. 💫"
  }
];

export function OpenWhenCards() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-center mb-12"
        >
          Open When...
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="outline"
                className={`w-full h-auto min-h-56 md:min-h-64 flex flex-col items-center justify-center gap-4 text-wrap p-6 border-2 border-dashed border-gray-300 hover:border-solid hover:border-gray-400 transition-all duration-300 bg-white/50 hover:bg-white paper-shadow overflow-hidden ${card.color}`}
                onClick={() => {
                  soundEffects.click();
                  setSelectedCard(card);
                }}
                onMouseEnter={() => soundEffects.hover()}
              >
                <Mail className="w-10 h-10 text-gray-600 opacity-50 flex-shrink-0" />
                <span className="font-hand text-lg md:text-xl text-gray-700 leading-tight line-clamp-4">{card.title}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white max-w-lg w-full p-8 rounded-lg shadow-2xl relative"
              >
                <button 
                  onClick={() => {
                    soundEffects.click();
                    setSelectedCard(null);
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="border-b-2 border-dotted border-gray-200 pb-4 mb-6">
                  <h3 className="font-hand text-3xl text-gray-800">{selectedCard.title}</h3>
                </div>
                
                <p className="font-serif text-xl leading-relaxed text-gray-600">
                  {selectedCard.content}
                </p>
                
                <div className="mt-8 text-right">
                  <span className="font-hand text-lg text-gray-400">With love, Me x</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
