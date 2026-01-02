import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import ContactSplit from "../components/ContactSplit";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProject = projectsData.find(p => p.id === activeId);

  const gameProjects = projectsData.filter(
    p => p.section === "main" && p.category === "game"
  );

  const designProjects = projectsData.filter(
    p => p.section === "main" && p.category === "design"
  );

  const renderGrid = (projects: typeof projectsData) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(p => (
        <ProjectCard
          key={p.id}
          project={p}
          onClick={() => setActiveId(p.id)}
        />
      ))}
    </div>
  );

  return (
    <section>
    <section className="min-h-screen pt-28 px-4 md:px-12 lg:px-20 text-gray-800 w-full">
      <SectionTitle
        title="PROJECTS"
        subtitle="Turning ideas into interactive experiences through design, code, and creativity."
      />

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Game & Web Projects
        </h2>
        {renderGrid(gameProjects)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Design & Media Projects
        </h2>
        {renderGrid(designProjects)}
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveId(null)}
        />
      )}

     
    </section>
     <div className="min-h-screen pt-28 px-0 md:px-12 lg:px-20"> <ContactSplit /> </div>
    </section>

  );
  
}
