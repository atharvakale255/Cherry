import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

const things = [
  {
    id: 1,
    emoji: "💭",
    preview: "How much I admire your strength...",
    fullText: "How much I admire your strength. The way you face your problems head-on, even when you're scared, inspires me every single day."
  },
  {
    id: 2,
    emoji: "🌟",
    preview: "That you make me a better person...",
    fullText: "That you make me a better person. Being your friend has taught me what loyalty, kindness, and real love actually mean."
  },
  {
    id: 3,
    emoji: "💕",
    preview: "How deeply I care about you...",
    fullText: "How deeply I care about you. Sometimes it hits me out of nowhere—this overwhelming feeling that I'm so lucky to have you in my life."
  },
  {
    id: 4,
    emoji: "✨",
    preview: "That you're my favorite person...",
    fullText: "That you're my favorite person. Not just my best friend—my favorite human to exist on this planet. Period."
  },
  {
    id: 5,
    emoji: "🎭",
    preview: "How much your silence means to me...",
    fullText: "How much your silence means to me. You don't need to fix my problems or have the perfect words. Sometimes you just listen, and that's everything."
  },
  {
    id: 6,
    emoji: "🌙",
    preview: "That I think about you more than...",
    fullText: "That I think about you more than I probably should. You're randomly in my head throughout the day, and it makes me smile."
  }
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
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Things I Never Said Out Loud</h2>
          <p className="font-hand text-lg text-muted-foreground">But definitely meant...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {things.map((thing, index) => (
            <motion.div
              key={thing.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedId(expandedId === thing.id ? null : thing.id)}
                className={`w-full text-left p-6 rounded-lg border-2 border-gray-200 transition-all duration-300 paper-shadow hover:shadow-lg ${
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
              </button>
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
