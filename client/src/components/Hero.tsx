import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgTexture from "@assets/generated_images/dreamy_pastel_watercolor_cloud_background_texture.png";
import { soundEffects } from "@/lib/soundEffects";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
      >
        <div
          style={{
            backgroundImage: `url(${bgTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0], scale: [1, 1.08, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-[10%] w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-hand text-lg sm:text-2xl md:text-4xl text-primary-foreground/80 block mb-4 rotate-[-2deg]">
            To the anchor who kept me steady
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-foreground tracking-tight leading-[0.9] dark:text-white"
        >
          Thank <span className="text-primary/60 dark:text-rose-400/60 italic">You</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground dark:text-gray-300 font-light max-w-lg mx-auto leading-relaxed">
            for being there when i needed the most, People had someone to count
            on, I had you when I didn't count on anyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 opacity-50 cursor-pointer"
          onMouseEnter={() => soundEffects.hover()}
        >
          <motion.span 
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="text-sm font-hand tracking-widest text-muted-foreground block"
          >
            SCROLL DOWN
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
