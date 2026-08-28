import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  speed: number;
  phase: number;
  driftX: number;
  driftY: number;
  tint: string;
};

type Petal = {
  x: number;
  y: number;
  size: number;
  angle: number;
  rotSpeed: number;
  fall: number;
  swayAmp: number;
  swaySpeed: number;
  swayPhase: number;
  color: string;
  alpha: number;
};

/**
 * A single lightweight canvas that renders a slow starfield and
 * a gentle stream of rose petals behind the whole experience.
 */
export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let stars: Star[] = [];
    let petals: Petal[] = [];

    // Pre-render a soft glowing dot sprite for stars
    function makeStarSprite(color: string) {
      const s = document.createElement("canvas");
      s.width = s.height = 64;
      const c = s.getContext("2d")!;
      const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, color);
      g.addColorStop(0.25, color.replace("1)", "0.55)"));
      g.addColorStop(1, "rgba(255,255,255,0)");
      c.fillStyle = g;
      c.fillRect(0, 0, 64, 64);
      return s;
    }

    const whiteSprite = makeStarSprite("rgba(255,244,248,1)");
    const roseSprite = makeStarSprite("rgba(244,180,200,1)");
    const goldSprite = makeStarSprite("rgba(224,180,92,1)");

    function init() {
      const area = w * h;
      const starCount = Math.min(170, Math.floor(area / 9000));
      stars = Array.from({ length: starCount }, () => {
        const tintRand = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.4 + Math.random() * 1.4,
          base: 0.25 + Math.random() * 0.6,
          speed: 0.2 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.12,
          driftY: (Math.random() - 0.5) * 0.05,
          tint: tintRand > 0.92 ? "gold" : tintRand > 0.8 ? "rose" : "white",
        };
      });

      const petalCount = Math.max(10, Math.min(22, Math.floor(area / 60000)));
      petals = Array.from({ length: petalCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 6 + Math.random() * 9,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        fall: 0.25 + Math.random() * 0.55,
        swayAmp: 0.4 + Math.random() * 0.8,
        swaySpeed: 0.4 + Math.random() * 0.6,
        swayPhase: Math.random() * Math.PI * 2,
        color:
          Math.random() > 0.12
            ? `rgba(232,112,138,`
            : `rgba(217,180,91,`,
        alpha: 0.25 + Math.random() * 0.5,
      }));
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    }

    function drawPetal(p: Petal, t: number) {
      const sway = Math.sin(t * p.swaySpeed + p.swayPhase) * p.swayAmp;
      const px = p.x + sway;
      ctx!.save();
      ctx!.translate(px, p.y);
      ctx!.rotate(p.angle);
      ctx!.fillStyle = p.color + p.alpha + ")";
      ctx!.beginPath();
      // an elegant petal shape
      ctx!.moveTo(0, -p.size);
      ctx!.quadraticCurveTo(p.size * 0.7, -p.size * 0.4, 0, p.size);
      ctx!.quadraticCurveTo(-p.size * 0.7, -p.size * 0.4, 0, -p.size);
      ctx!.fill();
      ctx!.restore();
    }

    function tick(t: number) {
      ctx!.clearRect(0, 0, w, h);

      // stars
      for (const s of stars) {
        const twinkle = s.base * (0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase));
        const sprite =
          s.tint === "gold" ? goldSprite : s.tint === "rose" ? roseSprite : whiteSprite;
        const d = s.r * 6;
        ctx!.globalAlpha = twinkle;
        ctx!.drawImage(sprite, s.x - d / 2, s.y - d / 2, d, d);
        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;
      }
      ctx!.globalAlpha = 1;

      // petals
      for (const p of petals) {
        drawPetal(p, t);
        p.y += p.fall;
        p.angle += p.rotSpeed;
        if (p.y - p.size > h) {
          p.y = -p.size * 2;
          p.x = Math.random() * w;
        }
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="aurora pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="vignette pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
    </>
  );
}
