import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/themeContext";
import { soundEffects } from "@/lib/soundEffects";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        soundEffects.click();
        toggleTheme();
      }}
      className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white/60 dark:bg-indigo-900/50 backdrop-blur-md border-2 border-white/40 dark:border-indigo-600/40 hover:shadow-lg transition-all duration-500 shadow-lg"
      data-testid="button-toggle-theme"
    >
      <motion.div
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-300" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
