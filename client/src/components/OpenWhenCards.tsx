import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    id: "miss",
    title: "Open when you miss me",
    color: "bg-primary/20",
    content: "Remember that distance is just a test to see how far love can travel. I'm always just a phone call away. Look up at the moon, we're seeing the same one. 🌙"
  },
  {
    id: "sad",
    title: "Open when you're sad",
    color: "bg-secondary/30",
    content: "It's okay not to be okay. Take a deep breath. Make yourself a cup of tea. Put on your favorite song. You are stronger than you think, and I am so proud of you. 🍵"
  },
  {
    id: "happy",
    title: "Open when you need a hype up",
    color: "bg-accent/30",
    content: "YOU ARE A GODDESS! A QUEEN! AN ICON! seriously, look at you go. The world better watch out because you are unstoppable. Keep shining! ✨"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className={`w-full h-48 md:h-64 flex flex-col items-center justify-center gap-4 text-wrap p-6 border-2 border-dashed border-gray-300 hover:border-solid hover:border-gray-400 transition-all duration-300 bg-white/50 hover:bg-white paper-shadow ${card.color}`}
                onClick={() => setSelectedCard(card)}
              >
                <Mail className="w-10 h-10 text-gray-600 opacity-50" />
                <span className="font-hand text-2xl text-gray-700">{card.title}</span>
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
                  onClick={() => setSelectedCard(null)}
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
