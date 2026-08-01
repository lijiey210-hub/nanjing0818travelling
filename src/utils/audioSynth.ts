// Web Audio API ambient pentatonic synthesizer for vintage Jinling atmosphere

class JinlingAmbientAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;

  // Traditional Chinese Pentatonic Frequencies (D Major Pentatonic: D, E, F#, A, B)
  private notes = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33, 659.25, 739.99, 880.00];

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.isPlaying = true;

      // Play gentle randomized Guzheng-like tones
      this.playTone();
      this.intervalId = window.setInterval(() => {
        if (Math.random() > 0.3) {
          this.playTone();
        }
      }, 1800);
    } catch {
      console.warn('Web Audio API not supported');
    }
  }

  private playTone() {
    if (!this.ctx || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Random note from pentatonic scale
    const note = this.notes[Math.floor(Math.random() * this.notes.length)];
    osc.frequency.value = note;
    osc.type = 'triangle'; // Gentle metallic chime / plucking sound

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08); // Quick attack
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5); // Slow decay

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 2.6);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const jinlingAudio = new JinlingAmbientAudio();
