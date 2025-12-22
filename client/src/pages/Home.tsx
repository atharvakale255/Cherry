import { Hero } from "@/components/Hero";
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { OpenWhenCards } from "@/components/OpenWhenCards";
import { ThingsNeverSaid } from "@/components/ThingsNeverSaid";
import { Letter } from "@/components/Letter";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <PolaroidGallery />
        <OpenWhenCards />
        <ThingsNeverSaid />
        <Letter />
      </main>

      <footer className="py-8 text-center text-muted-foreground font-hand text-sm opacity-60">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}
