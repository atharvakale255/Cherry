import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import { soundEffects } from "@/lib/soundEffects";

const things = [
  {
    id: 1,
    emoji: "💭",
    preview: "I noticed more than i said...",
    fullText:
      "I paid attention to the little things, how u showed up, or how u stayed calm, how u cared quietly. I didnt always say it, but I noticed.",
  },
  {
    id: 2,
    emoji: "🌟",
    preview: "That you make me a better person...",
    fullText:
      "That you make me a better person. Being your friend has taught me what loyalty, kindness and being there always actually means.",
  },
  {
    id: 3,
    emoji: "💕",
    preview: "You made the days lighter...",
    fullText:
      "Some days felt easier just knowing u existed somewhere in them. That kind of ease doesnt make noise, it just stays..",
  },
  {
    id: 4,
    emoji: "✨",
    preview: "i didnt always say thank you right",
    fullText:
      "Gratitude isnt always easy for me to put into words, but it was always there, ur efforts mean more to me than anything.",
  },
  {
    id: 5,
    emoji: "🎭",
    preview: "How much your silence means to me...",
    fullText:
      "How much your silence means to me. You don't need to fix my problems or have the perfect words. Sometimes you just listen, and that's everything.",
  },
  {
    id: 6,
    emoji: "🌙",
    preview: "That u mattered to me more than u think...",
    fullText:
      "Even when I didnt show it well, even when life got chaotic, the connection with u mattered to me in ways I cant explain or say outloud.",
  },
];

export function ThingsNeverSaid() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-white/40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Things I Never Said Out Loud
          </h2>
          <p className="font-hand text-lg text-muted-foreground">
            But definitely meant...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {things.map((thing, index) => (
            <motion.div
              key={thing.id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ y: -4 }}
                onClick={() => {
                  soundEffects.click();
                  setExpandedId(expandedId === thing.id ? null : thing.id);
                }}
                onMouseEnter={() => soundEffects.hover()}
                className={`w-full text-left p-6 rounded-lg border-2 border-gray-200 transition-all duration-300 paper-shadow hover:shadow-lg cursor-pointer ${
                  expandedId === thing.id
                    ? "bg-primary/20 border-primary/50"
                    : "bg-white/60 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{thing.emoji}</div>
                  <motion.div
                    animate={{ rotate: expandedId === thing.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence mode="wait">
                  {expandedId === thing.id ? (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-serif text-lg text-gray-700 mt-4 leading-relaxed">
                        {thing.fullText}
                      </p>
                      <div className="flex justify-end mt-4">
                        <Heart className="w-5 h-5 text-primary fill-primary" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="preview"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-hand text-lg text-gray-600 mt-4"
                    >
                      {thing.preview}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="font-hand text-xl text-gray-600 italic">
            And so much more that words can't hold...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
