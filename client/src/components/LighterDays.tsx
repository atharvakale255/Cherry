import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const moments = [
  {
    id: 1,
    title: "A place to talk without pretending",
    description: "Where I don't have to put on a mask or filter my words. With you, I can be messy, confused, and real—and you never judge.",
    icon: Heart,
    color: "from-primary/40 to-primary/20",
    borderColor: "border-primary/30"
  },
  {
    id: 2,
    title: "Lighter days in a heavy year",
    description: "You were the silver lining on my worst days. Your jokes, your presence, your random memes at midnight—they saved me more times than you know.",
    icon: Star,
    color: "from-secondary/40 to-secondary/20",
    borderColor: "border-secondary/30"
  },
  {
    id: 3,
    title: "The feeling of being understood",
    description: "You get me without explanations. One look, and you know what I'm thinking. That kind of connection is rare, and I'm never taking it for granted.",
    icon: Heart,
    color: "from-accent/40 to-accent/20",
    borderColor: "border-accent/30"
  },
  {
    id: 4,
    title: "Proof that some people stay kind",
    description: "In a world that tries to harden everyone, you stayed soft. You stayed good. You stayed YOU. That's the rarest gift, and I'm so grateful.",
    icon: Star,
    color: "from-primary/40 to-primary/20",
    borderColor: "border-primary/30"
  }
];

export function LighterDays() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-white/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What You Gave Me</h2>
          <div className="w-16 h-1 bg-primary/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Floating background element */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 4 + index, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute -inset-0.5 bg-gradient-to-br ${moment.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                />

                <div className={`relative bg-white p-8 rounded-2xl border-2 ${moment.borderColor} paper-shadow backdrop-blur-sm transition-all duration-300`}>
                  {/* Icon with animation */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block mb-4"
                  >
                    <Icon className={`w-8 h-8 text-primary/60`} />
                  </motion.div>

                  <h3 className="text-2xl font-serif text-gray-800 mb-3 leading-tight">
                    {moment.title}
                  </h3>
                  <p className="font-serif text-gray-600 leading-relaxed">
                    {moment.description}
                  </p>

                  {/* Decorative dots */}
                  <div className="flex gap-2 mt-6 pt-6 border-t border-gray-200">
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                    <div className="w-2 h-2 rounded-full bg-accent/40" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/40" />
            <Heart className="w-5 h-5 text-primary/40 fill-primary/40" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
