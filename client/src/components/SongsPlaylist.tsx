import { motion } from "framer-motion";
import { soundEffects } from "@/lib/soundEffects";

interface Song {
  id: number;
  title: string;
  artist: string;
  emoji: string;
  reason: string;
  embedCode: string;
}

const defaultSongs: Song[] = [
  {
    id: 1,
    title: "The Night We Met",
    artist: "Lord Huron",
    emoji: "🌙",
    reason: "Because every moment with you feels like a perfect memory I never want to forget",
    embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3hRV0jL3vUpRrcy398teAU?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    id: 2,
    title: "Fix You",
    artist: "Coldplay",
    emoji: "💛",
    reason: "Because you have a way of making everything better, even when miles apart",
    embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/7LVHVU3tWfcxj5aiPFEW4Q?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    id: 3,
    title: "Lean on Me",
    artist: "Bill Withers",
    emoji: "🤝",
    reason: "Because that's exactly what you do - you're always there when I need you most",
    embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5zCJvrT3C7cIfHsR5iG95l?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  },
  {
    id: 4,
    title: "See You Again",
    artist: "Tyler, The Creator ft. Kali Uchis",
    emoji: "💫",
    reason: "Because distance doesn't change what we have - I'll always see you again",
    embedCode: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/66CFbqJScx6zRieGllITcs?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  }
];

const rotations = [-2, 2, -1.5, 1.5];

export function SongsPlaylist() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/30 to-primary/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Playlist</h2>
          <p className="font-hand text-lg text-muted-foreground">
            Songs that remind me of you & us 🎵
          </p>
        </motion.div>

        {/* Scrapbook-style list */}
        <div className="space-y-8 relative">
          {defaultSongs.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, rotate: 0 }}
              style={{ rotate: `${rotations[index]}deg` }}
              className="group block p-8 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40"
              data-testid={`song-item-${song.id}`}
              onMouseEnter={() => soundEffects.hover()}
            >
              <div className="flex gap-6 items-start">
                {/* Emoji - Left side */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl flex-shrink-0"
                >
                  {song.emoji}
                </motion.div>

                {/* Content - Right side */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-serif text-gray-800 group-hover:text-primary transition-colors" data-testid={`text-song-title-${song.id}`}>
                        {song.title}
                      </h3>
                      <p className="font-hand text-gray-600 mt-1" data-testid={`text-song-artist-${song.id}`}>
                        {song.artist}
                      </p>
                    </div>
                  </div>

                  {/* Reason */}
                  <p className="font-hand text-base text-gray-700 italic leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                    "{song.reason}"
                  </p>

                  {/* Playlist Visualization */}
                  <div className="flex gap-1 mb-6 h-12 items-end">
                    {[0.4, 0.8, 0.6, 0.9, 0.5, 0.7, 0.85].map((height, i) => (
                      <motion.div
                        key={i}
                        animate={{ scaleY: [height * 0.6, height, height * 0.6] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-primary to-secondary/60 rounded-sm opacity-60"
                        style={{ height: `${height * 100}%` }}
                      />
                    ))}
                  </div>

                  {/* Spotify Embed */}
                  <div className="spotify-embed" dangerouslySetInnerHTML={{ __html: song.embedCode }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
