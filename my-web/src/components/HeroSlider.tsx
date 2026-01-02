import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSliderProps {
  images: string[];
  interval?: number;
}

export default function HeroSlider({
  images,
  interval = 4000,
}: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const rafRef = useRef<number | null>(null);


  /* ---------------- AUTO SLIDE ---------------- */
  const startTimer = () => {
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
  }, [interval]); // เอา paused ออกจาก dependency

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
    <div className="absolute inset-0 overflow-hidden group">
      {/* 1. เอา mode="wait" ออกเพื่อให้รูปใหม่ซ้อนทับรูปเก่าทันที */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${images[index]}')`,
            // parallax ยังอยู่เหมือนเดิมตามที่คุณชอบ
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
          // 2. ปรับ Initial เป็น 0 และ Animate เป็น 1 
          // รูปใหม่จะค่อยๆ ชัดขึ้นบนรูปเก่าที่ค่อยๆ จางลง
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5, // เพิ่มเวลาให้เบลนด์กันนานขึ้นเพื่อความนวล
            ease: "easeInOut" 
          }}
        />
      </AnimatePresence>

      {/* Overlay: ปรับลดความเข้มลงนิดนึงเพื่อให้เห็นรูปชัดขึ้นถ้านิยมมินิมอล */}
      <div className="absolute inset-0 bg-white/20" />

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
            key={i}
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