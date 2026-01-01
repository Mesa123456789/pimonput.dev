import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSliderProps {
  images: string[];
  interval?: number;
}

export default function HeroSlider({
  images,
  interval = 3200,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const rafRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  /* ---------------- AUTO SLIDE ---------------- */
  const startTimer = () => {
    if (paused) return;
    stopTimer();

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, interval]);

  /* ---------------- SCROLL PARALLAX ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SWIPE ---------------- */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    touchStartX.current = null;
  };

  /* ---------------- MANUAL CONTROL ---------------- */
  const prevSlide = () => {
    stopTimer();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  const nextSlide = () => {
    stopTimer();
    setIndex((prev) => (prev + 1) % images.length);
    startTimer();
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${images[index]}')`,
            transform: `translateY(${offsetY * 0.3}px) scale(1)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ◀ Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-black/40 text-white
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition hover:bg-black/70"
        aria-label="Previous slide"
      >
        {"<"}
      </button>

      {/* ▶ Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-black/40 text-white
          flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition hover:bg-black/70"
        aria-label="Next slide"
      >
        {">"}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              stopTimer();
              setIndex(i);
              startTimer();
            }}
            className={`w-2.5 h-2.5 rounded-full transition
    ${i === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}
  `}
          />
        ))}
      </div>
    </div>
  );
}
