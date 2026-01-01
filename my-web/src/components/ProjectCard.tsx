import type { ProjectData } from "../data/projectsData";

type Props = {
  project: ProjectData;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        group relative overflow-hidden rounded-2xl
        bg-white/70 backdrop-blur-xl shadow-lg
        hover:shadow-2xl transition-all duration-300
        text-left
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.cardTitle}
          className="h-full w-full object-cover
                     group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0 bg-black/50
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            flex items-center justify-center text-center px-4
          "
        >
          <div className="text-white">
            <h3 className="text-lg font-bold">{project.cardTitle}</h3>
            <p className="text-sm opacity-90">{project.cardSubtitle}</p>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4">
        <h4 className="font-semibold text-gray-900">
          {project.cardTitle}
        </h4>
        <p className="text-sm text-gray-600">
          {project.cardSubtitle}
        </p>
      </div>
    </button>
  );
}
