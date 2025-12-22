import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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

export function SongsPlaylist() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/30 to-primary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Playlist</h2>
          <p className="font-hand text-lg text-muted-foreground">
            Songs that remind me of you & us 🎵
          </p>
        </motion.div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defaultSongs.map((song, index) => (
            <motion.a
              key={song.id}
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md rounded-2xl p-8 border-2 border-white/50 paper-shadow hover:border-primary/30 transition-all duration-300 cursor-pointer"
              data-testid={`song-card-${song.id}`}
            >
              {/* Emoji */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl mb-6"
              >
                {song.emoji}
              </motion.div>

              {/* Song Title */}
              <h3 className="text-2xl font-serif text-gray-800 mb-2 group-hover:text-primary transition-colors" data-testid={`text-song-title-${song.id}`}>
                {song.title}
              </h3>

              {/* Artist */}
              <p className="font-hand text-gray-600 mb-6" data-testid={`text-song-artist-${song.id}`}>
                {song.artist}
              </p>

              {/* Reason */}
              <p className="font-hand text-lg text-gray-700 italic leading-relaxed mb-6">
                "{song.reason}"
              </p>

              {/* Spotify Link */}
              <div className="flex items-center gap-2 text-primary font-hand font-semibold group-hover:gap-3 transition-all">
                Play on Spotify
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
