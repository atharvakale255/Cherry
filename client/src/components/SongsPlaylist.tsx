import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";

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
    spotifyUrl: "https://open.spotify.com/embed/track/3I8xJVH3EcVLmwqKHLKzK3"
  },
  {
    id: 2,
    title: "Fix You",
    artist: "Coldplay",
    emoji: "💛",
    reason: "Because you have a way of making everything better, even when miles apart",
    spotifyUrl: "https://open.spotify.com/embed/track/7qiZfU4dY1lsylgNesWQN0"
  },
  {
    id: 3,
    title: "Lean on Me",
    artist: "Bill Withers",
    emoji: "🤝",
    reason: "Because that's exactly what you do - you're always there when I need you most",
    spotifyUrl: "https://open.spotify.com/embed/track/6x6L3mfr9xyW8gGqx45B5n"
  },
  {
    id: 4,
    title: "See You Again",
    artist: "Tyler, The Creator ft. Kali Uchis",
    emoji: "💫",
    reason: "Because distance doesn't change what we have - I'll always see you again",
    spotifyUrl: "https://open.spotify.com/embed/track/7GY7NjVe76yt4Ydg3vLNiH"
  }
];

export function SongsPlaylist() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const currentSong = defaultSongs[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % defaultSongs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + defaultSongs.length) % defaultSongs.length,
    );
    setIsPlaying(true);
  };

  const toggleLike = (id: number) => {
    setLikedSongs((prev) =>
      prev.includes(id)
        ? prev.filter((songId) => songId !== id)
        : [...prev, id],
    );
  };

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

        {/* Main Song Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 backdrop-blur-md border-2 border-white/50 paper-shadow mb-12"
        >
          {/* Emoji Animation */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="text-6xl">{currentSong.emoji}</div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">
              {currentSong.title}
            </h3>
            <p className="font-hand text-lg text-gray-600 mb-6">
              {currentSong.artist}
            </p>

            {/* Why I Chose This Song */}
            <motion.div
              key={currentSong.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/50 rounded-2xl p-6 mb-8 border-2 border-white/40"
            >
              <p className="font-hand text-lg text-gray-700 italic leading-relaxed">
                "{currentSong.reason}"
              </p>
            </motion.div>

            {/* Spotify Embed Player */}
            <div className="mb-8 flex justify-center">
              <iframe
                src={`${currentSong.spotifyUrl}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl max-w-md"
              ></iframe>
            </div>

            {/* Progress bar */}
            <div className="mt-6 bg-white/40 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                animate={{
                  width: isPlaying ? "100%" : "0%",
                }}
                transition={{
                  duration: 3,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "linear",
                }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/60 hover:bg-white transition-colors"
              data-testid="button-prev-song"
            >
              <SkipBack className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-xl transition-shadow"
              data-testid="button-play-pause"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-white fill-white" />
              ) : (
                <Play className="w-7 h-7 text-white fill-white" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-white/60 hover:bg-white transition-colors"
              data-testid="button-next-song"
            >
              <SkipForward className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleLike(currentSong.id)}
              className="p-3 rounded-full bg-white/60 hover:bg-white transition-colors ml-2"
              data-testid="button-like-song"
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  likedSongs.includes(currentSong.id)
                    ? "fill-primary text-primary"
                    : "text-gray-700"
                }`}
              />
            </motion.button>
          </div>

          {/* Song counter */}
          <div className="text-center text-sm text-gray-600 font-hand">
            {currentIndex + 1} / {defaultSongs.length}
          </div>
        </motion.div>

        {/* Playlist List */}
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-gray-800 mb-4">Playlist</h3>
          <AnimatePresence>
            {defaultSongs.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`group flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "bg-primary/20 border-primary/50 scale-[1.02]"
                    : "bg-white/40 border-gray-200 hover:border-gray-300 hover:bg-white/60"
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(true);
                }}
                data-testid={`song-item-${song.id}`}
              >
                <span className="text-3xl">{song.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-gray-800 font-medium truncate" data-testid={`text-song-title-${song.id}`}>
                    {song.title}
                  </p>
                  <p className="font-hand text-sm text-gray-600 truncate" data-testid={`text-song-artist-${song.id}`}>
                    {song.artist}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(song.id);
                  }}
                  className="p-2 rounded-full hover:bg-white/60 transition-colors opacity-0 group-hover:opacity-100"
                  data-testid={`button-like-${song.id}`}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      likedSongs.includes(song.id)
                        ? "fill-primary text-primary"
                        : "text-gray-400"
                    }`}
                  />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
