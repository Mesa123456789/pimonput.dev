import { useState } from "react";
import type { ProjectData } from "../data/projectsData";

type Props = {
  project: ProjectData;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const { modal } = project;
  const [index, setIndex] = useState(0);
  const total = modal.media.length;

  const prev = () =>
    setIndex(i => (i - 1 + total) % total);
  const next = () =>
    setIndex(i => (i + 1) % total);

  const current = modal.media[index];

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-5xl mx-4
          bg-white/90 backdrop-blur-xl
          rounded-2xl shadow-2xl p-6
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 text-2xl
            text-gray-700 hover:text-red-500
          "
        >
          ×
        </button>

        <h3 className="text-2xl font-bold mb-4">
          {modal.title}
          {modal.year && ` (${modal.year})`}
        </h3>

        {/* ===== 16:9 FIXED FRAME ===== */}
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden mb-4">

          {/* Media */}
          {current.type === "image" ? (
            <img
              src={current.src}
              alt=""
              className="
                absolute inset-0 w-full h-full
                object-contain
              "
            />
          ) : (
            <video
              controls
              className="
                absolute inset-0 w-full h-full
                object-contain
              "
            >
              <source src={current.src} type="video/mp4" />
            </video>
          )}

          {/* Prev / Next */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  bg-black/60 text-white
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  hover:bg-black/80
                "
              >
                ‹
              </button>

              <button
                onClick={next}
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  bg-black/60 text-white
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  hover:bg-black/80
                "
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Description */}
        <p className="whitespace-pre-line text-gray-800 mb-4">
          {modal.description}
        </p>

        {/* Tech */}
        <ul className="flex flex-wrap gap-2 mb-4">
          {modal.tech.map(t => (
            <li
              key={t}
              className="
                px-3 py-1 rounded-full text-sm
                bg-blue-100 text-blue-700
              "
            >
              {t}
            </li>
          ))}
        </ul>

{/* Links */}
<div className="flex justify-center flex-wrap gap-4 mt-6">
  {modal.links?.map(link => (
    <a
      key={link.url}
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center justify-center
        px-6 py-2.5
        rounded-full
        text-sm font-semibold text-white
        bg-gradient-to-r from-blue-500 to-indigo-600
        shadow-md
        transition-all duration-300
        hover:shadow-xl hover:scale-[1.04]
        active:scale-100
      "
    >
      {link.label}
    </a>
  ))}
</div>

      </div>
    </div>
  );
}
