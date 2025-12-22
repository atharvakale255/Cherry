import { motion } from "framer-motion";

interface Song {
  id: number;
  title: string;
  artist: string;
  emoji: string;
  reason: string;
  spotifyUrl: string;
}

const defaultSongs: Song[] = [
  {
    id: 1,
    title: "The Night We Met",
    artist: "Lord Huron",
    emoji: "🌙",
    reason: "Because every moment with you feels like a perfect memory I never want to forget",
    spotifyUrl: "https://open.spotify.com/track/3I8xJVH3EcVLmwqKHLKzK3"
  },
  {
    id: 2,
    title: "Fix You",
    artist: "Coldplay",
    emoji: "💛",
    reason: "Because you have a way of making everything better, even when miles apart",
    spotifyUrl: "https://open.spotify.com/track/7qiZfU4dY1lsylgNesWQN0"
  },
  {
    id: 3,
    title: "Lean on Me",
    artist: "Bill Withers",
    emoji: "🤝",
    reason: "Because that's exactly what you do - you're always there when I need you most",
    spotifyUrl: "https://open.spotify.com/track/6x6L3mfr9xyW8gGqx45B5n"
  },
  {
    id: 4,
    title: "See You Again",
    artist: "Tyler, The Creator ft. Kali Uchis",
    emoji: "💫",
    reason: "Because distance doesn't change what we have - I'll always see you again",
    spotifyUrl: "https://open.spotify.com/track/7GY7NjVe76yt4Ydg3vLNiH"
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
            <motion.a
              key={song.id}
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, rotate: 0 }}
              style={{ rotate: `${rotations[index]}deg` }}
              className="group block p-8 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary/40"
              data-testid={`song-item-${song.id}`}
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
                  <p className="font-hand text-base text-gray-700 italic leading-relaxed mb-4 group-hover:text-gray-800 transition-colors">
                    "{song.reason}"
                  </p>

                  {/* Play indicator */}
                  <motion.span
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    className="inline-block text-sm font-semibold text-primary group-hover:text-primary font-hand"
                  >
                    ▶ Play on Spotify
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
