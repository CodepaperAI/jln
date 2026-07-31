// Falling snow shown only in light mode (CSS toggles visibility via .light).
// Deterministic values so server and client render identically (no hydration warning).
const FLAKES = Array.from({ length: 55 }).map((_, i) => {
  const rand = (seed) => {
    const x = Math.sin((i + 1) * seed) * 10000;
    return x - Math.floor(x);
  };
  const dur = 7 + rand(3.7) * 9;
  return {
    key: i,
    left: rand(12.9898) * 100,
    size: 2 + rand(78.233) * 4,
    dur,
    delay: -(rand(2.71) * dur),
    drift: Math.round(rand(1.61) * 70 - 35),
    opacity: 0.5 + rand(9.1) * 0.5,
  };
});

export default function Snow() {
  return (
    <div className="snow-layer" aria-hidden="true">
      {FLAKES.map((f) => (
        <span
          key={f.key}
          className="snow-flake"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
            // used by the keyframe for horizontal sway
            "--drift": `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
