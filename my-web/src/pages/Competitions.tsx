import { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionTitle from "../components/SectionTitle";
import ContactSplit from "../components/ContactSplit";

export default function Competitions() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // 🏆 Hackathon / Competition
  const competitionProjects = projectsData.filter(
    (p) => p.section === "competition"
  );

  // 🎤 Event (Esport)
  const eventProjects = projectsData.filter((p) => p.category === "event");

  const activeProject =
    competitionProjects.find((p) => p.id === activeId) ||
    eventProjects.find((p) => p.id === activeId);

  const renderGrid = (projects: typeof projectsData) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onClick={() => setActiveId(p.id)} />
      ))}
    </div>
  );

  return (
    <section className="min-h-screen pt-28 px-6">
      <SectionTitle
        title="EVENT & COMPETITIONS"
        subtitle="Competitions and awards from hackathons and creative projects"
      />

      {/* ===== Competitions ===== */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Competitions & Awards</h2>
        {renderGrid(competitionProjects)}
      </section>

      {/* ===== Events ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Events</h2>
        {renderGrid(eventProjects)}
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveId(null)}
        />
      )}
      <div className="mt-24"></div>
<ContactSplit />


    </section>
  );
}
