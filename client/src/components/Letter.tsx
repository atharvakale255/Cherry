import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { soundEffects } from "@/lib/soundEffects";

export function Letter() {
  const triggerConfetti = () => {
    soundEffects.success();
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-xl relative paper-shadow transform md:rotate-1">
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-8 font-hand text-2xl text-gray-500">December 31st, 2024</div>
          
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-800">To the dearest Nab,</h2>
          
          <div className="prose prose-lg font-serif text-gray-600 leading-loose">
            <p>
              I wanted to thank you for being there when even breathing felt like a task.
            </p>
            <p>
              Having a friend like you felt like having something divine on my side—just quietly steady, never forcing and just present. There were moments this year where things felt heavy, and you made them lighter without even realizing it. You listened and you stayed, and that mattered more than you know.
            </p>
            <p>
              I may not be there to talk every single day, but please know this: I value you deeply, every day. That hasn't changed.
            </p>
            <p>
              I do miss our late night talks. But still, I believe nights eventually fold into brighter mornings, and I'm grateful we had those moments when we did.
            </p>
            <p>
              Thank you for listening even when I was wrong.<br/>
              Thank you for staying when it would've been easier not to.<br/>
              Thank you for being an anchor in a year that needed one.
            </p>
            <p>
              Distance doesn't erase what's real. And if you ever need me, know that I'm never far—just a little quieter, always present.
            </p>
            <p>
              I'm really glad I had you.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="font-hand text-3xl text-gray-700 transform -rotate-2">
              Forever yours, <br/>
              <span className="text-primary ml-8">Me</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="mt-8 rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                onClick={triggerConfetti}
              >
                <Heart className="mr-2 h-6 w-6 fill-current animate-pulse" />
                Send a Virtual Hug
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
