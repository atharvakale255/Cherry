// Simple sound effects using Web Audio API
export const soundEffects = {
  click: () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gain.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Audio context not available
    }
  },

  hover: () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.frequency.value = 600;
      oscillator.type = "sine";

      gain.gain.setValueAtTime(0.2, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.08);
    } catch (e) {
      // Audio context not available
    }
  },

  success: () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gain = audioContext.createGain();

      oscillator1.connect(gain);
      oscillator2.connect(gain);
      gain.connect(audioContext.destination);

      oscillator1.frequency.value = 800;
      oscillator2.frequency.value = 1000;
      oscillator1.type = "sine";
      oscillator2.type = "sine";

      gain.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime + 0.05);
      oscillator1.stop(audioContext.currentTime + 0.2);
      oscillator2.stop(audioContext.currentTime + 0.2);
    } catch (e) {
      // Audio context not available
    }
  }
};
