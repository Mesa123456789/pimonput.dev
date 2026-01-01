import { useState, useEffect } from "react";
import type { ProjectData } from "../data/projectsData";

type Props = {
  project: ProjectData;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const { modal } = project;
  const [index, setIndex] = useState(0);
  const total = modal.media.length;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const prev = () => setIndex(i => (i - 1 + total) % total);
  const next = () => setIndex(i => (i + 1) % total);
  const current = modal.media[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-2xl 
          max-h-[70vh] flex flex-col 
          bg-white rounded-2xl shadow-2xl overflow-hidden
        " 
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-2xl text-gray-500 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          ×
        </button>

        {/* Scrollable Area */}
        <div className="overflow-y-auto p-5 scrollbar-hide">
          
          {/* Media Frame - ปรับขนาดให้เล็กลงเพื่อให้ความยาวรวมลดลง */}
          <div className="relative w-full aspect-[16/10] bg-black rounded-lg overflow-hidden mb-4 shadow-sm">
            {current.type === "image" ? (
              <img src={current.src} alt="" className="absolute inset-0 w-full h-full object-contain" />
            ) : (
              <video controls className="absolute inset-0 w-full h-full object-contain">
                <source src={current.src} type="video/mp4" />
              </video>
            )}

            {total > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">‹</button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">›</button>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold mb-2 pr-8 text-gray-900 leading-tight">
            {modal.title}
          </h3>

          <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed mb-4">
            {modal.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {modal.tech.map(t => (
              <span key={t} className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 uppercase">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {modal.links?.map(link => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}