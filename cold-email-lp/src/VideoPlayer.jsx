import { useRef, useState } from 'react';

// Zoom level applied to the video frame (1 = no zoom)
const ZOOM = 1.05;

const fmt = (t) => {
  if (!isFinite(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

export default function VideoPlayer({ src }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.paused ? v.play() : v.pause();
  };

  return (
    <div className="relative aspect-video overflow-hidden bg-primary group">
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        style={{ transform: `scale(${ZOOM})` }}
        playsInline
        preload="metadata"
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
      </video>

      {!playing && (
        <button
          onClick={toggle}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-primary/20 hover:bg-primary/30 transition-colors"
        >
          <span className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#24352A"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}

      <div className="absolute bottom-0 inset-x-0 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-primary/80 to-transparent text-white text-xs">
        <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'} className="w-6 shrink-0">
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
        <span className="tabular-nums w-10">{fmt(time)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={time}
          onChange={(e) => { ref.current.currentTime = +e.target.value; }}
          className="flex-1 accent-white h-1 cursor-pointer"
          aria-label="Seek"
        />
        <span className="tabular-nums w-10 text-right">{fmt(duration)}</span>
        <button
          onClick={() => { ref.current.muted = !muted; setMuted(!muted); }}
          className="shrink-0 font-medium"
          aria-label="Toggle mute"
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>
    </div>
  );
}
