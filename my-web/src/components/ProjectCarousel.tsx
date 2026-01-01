import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectCarousel() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 🔁 เลื่อนอัตโนมัติแบบ Smooth
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % projectsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // 🌀 Scroll ให้อันตรงกลางอยู่กึ่งกลาง container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const item = el.children[centerIndex] as HTMLElement;
    if (!item) return;

    const offset = item.offsetLeft - el.clientWidth / 2 + item.clientWidth / 2;
    el.scrollTo({ left: offset, behavior: "smooth" });
  }, [centerIndex]);

  return (
<section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"> 
    {/* เปลี่ยน overflow-visible เป็น overflow-hidden เพื่อกันจอล้น */}
    <div className="w-full mx-auto px-0">
      <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8 px-4">
        Featured Projects
      </h2>
       <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-[10vw] py-10 items-center relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projectsData.map((project, index) => {
            const distance = Math.abs(centerIndex - index);
            const scale = index === centerIndex ? 1.15 : 0.9;
            const opacity = index === centerIndex ? 1 : 0.6;
            const zIndex = index === centerIndex ? 20 : 10;
            const blur = distance > 1 ? "blur-sm" : "";

            return (
              <motion.div
                key={index}
                animate={{ scale, opacity }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 18,
                }}
                onClick={() => navigate("/projects")}
                className={`min-w-[260px] md:min-w-[380px] transition-all duration-500 ${blur}`}
                style={{ zIndex }}
              >
                <div className="rounded-2xl bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_45px_rgba(0,0,0,0.15)] overflow-hidden">
                  <div className="relative w-full h-56 md:h-60 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.cardTitle}
                      className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-800">
                      {project.cardTitle}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {project.cardSubtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* เงาเบลอด้านบนและล่าง */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none"></div>
    </section>
  );
}
