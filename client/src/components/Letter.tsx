import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

export function Letter() {
  const triggerConfetti = () => {
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
          
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gray-800">My Dearest Bestie,</h2>
          
          <div className="prose prose-lg font-serif text-gray-600 leading-loose">
            <p>
              I wanted to make something special for you to wrap up this year. Looking back, I realize how much your presence (even virtually) has shaped my days.
            </p>
            <p>
              Thank you for listening to my rants, for sending me memes that only we understand, and for being my safe space. I know life gets busy and we are miles apart, but please know that you are always close to my heart.
            </p>
            <p>
              Here is to another year of us against the world. I love you more than words can say.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="font-hand text-3xl text-gray-700 transform -rotate-2">
              Forever yours, <br/>
              <span className="text-primary ml-8">Me</span>
            </div>

            <Button 
              size="lg"
              className="mt-8 rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              onClick={triggerConfetti}
            >
              <Heart className="mr-2 h-6 w-6 fill-current" />
              Send a Virtual Hug
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
