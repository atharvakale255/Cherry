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
    content:
      "Distance doesn't diminish what we have if anything, it strengthens it. Sometimes it just means life got louder for a while. What mattered once doesn't disappear quietly, it stays, even when it isn't close. 💕",
  },
  {
    id: "doubt",
    title: "Open when you doubt yourself",
    color: "bg-secondary/30",
    content:
      "When you doubt yourself, pause for a second. Doubting doesn't mean you're wrong it just means you care. You've handled more than you give yourself credit for. You don't have to see the whole path right now. Just keep walking. The hills are meant to be conquered, not stared at.. 💪",
  },
  {
    id: "overwhelmed",
    title: "Open when you feel overwhelmed",
    color: "bg-accent/30",
    content:
      "If everything feels like too much right now, pause for a moment. Step away if you can and Put your music on. Take one slow, deep breath. It’s okay if today moves slower than you expected. It’s okay if all you do is get through the day. Sometimes, staying alive matters more than winning 🤍",
  },
  {
    id: "reassurance",
    title: "Open when you need reassurance",
    color: "bg-primary/20",
    content:
      "You don't need to have everything figured out right now, Nab. Don't worry.. just keep going. You aren't asking for too much. You're not behind. And you're definitely not failing. You're just learning. Learning something new.. and as I always say, flow with time. Time teaches you things you'd never learn any other way. ✨",
  },
  {
    id: "thinking",
    title: "Open when you're thinking too much",
    color: "bg-secondary/30",
    content:
      "If ur thoughts are just racing then pls pause for a sec, overthinking doesnt mean something is wrong it just means u care about something more than u should Not every thought deserves ur attention nab Not every question needs an answer Let the noise pass without chasing it What means to stay will stay the rest will settle on its own 🌙",
  },
  {
    id: "racing",
    title: "Open when you feel stuck",
    color: "bg-accent/30",
    content:
      "If u feel stuck it doesnt mean u r failing it just means u have outgrown where u were You dont need a plan rn You dont need to know whats coming Just keep walking and do what u can And if u cant do anything standing still is a part of moving forward.This isnt the end Its just a moment 💫",
  },
];

export function OpenWhenCards() {
  const [selectedCard, setSelectedCard] = useState<(typeof cards)[0] | null>(
    null,
  );

  return (
    <section className="py-24 px-4 bg-muted/30 dark:bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-center mb-12 dark:text-white"
        >
          Open When...
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <Button
                variant="outline"
                className={`w-full h-auto min-h-40 sm:min-h-48 md:min-h-56 lg:min-h-64 flex flex-col items-center justify-center gap-3 text-wrap p-4 md:p-6 border-2 border-dashed border-gray-300 dark:border-slate-600 hover:border-solid hover:border-gray-400 dark:hover:border-slate-500 transition-all duration-300 bg-white/50 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 paper-shadow overflow-hidden ${card.color} dark:bg-slate-700/70`}
                onClick={() => {
                  soundEffects.click();
                  setSelectedCard(card);
                }}
                onMouseEnter={() => soundEffects.hover()}
              >
                <Mail className="w-8 md:w-10 h-8 md:h-10 text-gray-600 dark:text-slate-300 opacity-50 flex-shrink-0" />
                <span className="font-hand text-base md:text-lg lg:text-xl text-gray-700 dark:text-white leading-tight line-clamp-4 px-2">
                  {card.title}
                </span>
              </Button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-800 max-w-lg w-full p-8 rounded-lg shadow-2xl relative"
              >
                <button
                  onClick={() => {
                    soundEffects.click();
                    setSelectedCard(null);
                  }}
                  className="absolute top-4 right-4 text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-300"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="border-b-2 border-dotted border-gray-200 dark:border-slate-700 pb-4 mb-6">
                  <h3 className="font-hand text-3xl text-gray-800 dark:text-white">
                    {selectedCard.title}
                  </h3>
                </div>

                <p className="font-serif text-xl leading-relaxed text-gray-600 dark:text-gray-200">
                  {selectedCard.content}
                </p>

                <div className="mt-8 text-right">
                  <span className="font-hand text-lg text-gray-400 dark:text-slate-400">
                    With love, Me x
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
