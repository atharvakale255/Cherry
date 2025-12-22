import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Plus, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Song {
  id: number;
  title: string;
  artist: string;
  emoji: string;
}

const defaultSongs: Song[] = [
  {
    id: 1,
    title: "Best Friend",
    artist: "Saweetie ft. Doja Cat",
    emoji: "👯"
  },
  {
    id: 2,
    title: "See You Again",
    artist: "Tyler, The Creator ft. Kali Uchis",
    emoji: "🌙"
  },
  {
    id: 3,
    title: "You're My Best Friend",
    artist: "Queen",
    emoji: "👑"
  }
];

export function SongsPlaylist() {
  const [songs, setSongs] = useState<Song[]>(defaultSongs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSong, setNewSong] = useState({ title: "", artist: "", emoji: "🎵" });
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const currentSong = songs[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleAddSong = () => {
    if (newSong.title && newSong.artist) {
      setSongs([
        ...songs,
        {
          id: songs.length + 1,
          title: newSong.title,
          artist: newSong.artist,
          emoji: newSong.emoji
        }
      ]);
      setNewSong({ title: "", artist: "", emoji: "🎵" });
      setShowAddForm(false);
    }
  };

  const toggleLike = (id: number) => {
    setLikedSongs((prev) =>
      prev.includes(id) ? prev.filter((songId) => songId !== id) : [...prev, id]
    );
  };

  const removeSong = (id: number) => {
    setSongs(songs.filter((song) => song.id !== id));
    if (currentIndex >= songs.length - 1) {
      setCurrentIndex(Math.max(0, songs.length - 2));
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white/30 to-primary/5">
      <div className="max-w-2xl mx-auto">
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

        {/* Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 md:p-12 backdrop-blur-md border-2 border-white/50 paper-shadow mb-8"
        >
          {/* Now Playing */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="text-6xl">{currentSong.emoji}</div>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-2">
              {currentSong.title}
            </h3>
            <p className="font-hand text-lg text-gray-600">{currentSong.artist}</p>

            {/* Progress bar */}
            <div className="mt-6 bg-white/40 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                animate={{
                  width: isPlaying ? "100%" : "0%"
                }}
                transition={{
                  duration: 3,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "linear"
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
            >
              <SkipBack className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg hover:shadow-xl transition-shadow"
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
            >
              <SkipForward className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleLike(currentSong.id)}
              className="p-3 rounded-full bg-white/60 hover:bg-white transition-colors ml-2"
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
            {currentIndex + 1} / {songs.length}
          </div>
        </motion.div>

        {/* Playlist */}
        <div className="space-y-3 mb-8">
          <h3 className="font-serif text-xl text-gray-800 mb-4">Up Next</h3>
          <AnimatePresence>
            {songs.map((song, index) => (
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
              >
                <span className="text-3xl">{song.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-gray-800 font-medium truncate">
                    {song.title}
                  </p>
                  <p className="font-hand text-sm text-gray-600 truncate">
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
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      likedSongs.includes(song.id)
                        ? "fill-primary text-primary"
                        : "text-gray-400"
                    }`}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSong(song.id);
                  }}
                  className="p-2 rounded-full hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-4 h-4 text-red-500" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Add Song Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowAddForm(!showAddForm)}
          className="w-full py-3 px-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-gray-400 bg-white/50 hover:bg-white transition-all flex items-center justify-center gap-2 font-hand text-gray-700"
        >
          <Plus className="w-5 h-5" />
          Add a song
        </motion.button>

        {/* Add Song Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 bg-white/60 rounded-xl border-2 border-gray-200 space-y-4"
            >
              <input
                type="text"
                placeholder="Song title"
                value={newSong.title}
                onChange={(e) =>
                  setNewSong({ ...newSong, title: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-primary outline-none font-serif"
              />
              <input
                type="text"
                placeholder="Artist name"
                value={newSong.artist}
                onChange={(e) =>
                  setNewSong({ ...newSong, artist: e.target.value })
                }
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-primary outline-none font-serif"
              />
              <input
                type="text"
                placeholder="Pick an emoji"
                value={newSong.emoji}
                onChange={(e) =>
                  setNewSong({ ...newSong, emoji: e.target.value.slice(0, 2) })
                }
                maxLength={2}
                className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-primary outline-none font-serif text-center text-2xl"
              />
              <div className="flex gap-3">
                <Button
                  onClick={handleAddSong}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white"
                >
                  Add Song
                </Button>
                <Button
                  onClick={() => setShowAddForm(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
