import { Hero } from "@/components/Hero";
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { OpenWhenCards } from "@/components/OpenWhenCards";
import { ThingsNeverSaid } from "@/components/ThingsNeverSaid";
import { LighterDays } from "@/components/LighterDays";
import { SongsPlaylist } from "@/components/SongsPlaylist";
import { Letter } from "@/components/Letter";
import { FloatingHearts } from "@/components/FloatingHearts";
import { CursorGlow } from "@/components/CursorGlow";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative dark:bg-slate-950 dark:text-white transition-all duration-700 ease-in-out overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Theme Toggle */}
      <ThemeToggle />

      <main>
        <Hero />
        <PolaroidGallery />
        <OpenWhenCards />
        <ThingsNeverSaid />
        <LighterDays />
        <SongsPlaylist />
        <Letter />
      </main>

      <footer className="py-8 text-center text-muted-foreground dark:text-gray-400 font-hand text-sm opacity-60">
        <p>Made with ❤️ for you</p>
      </footer>
    </div>
  );
}
