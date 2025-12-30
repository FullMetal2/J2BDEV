import ProjectSection from "../../sections/Projects/ProjectSection";
import { projects } from "../../../lib/dataProjects";

export default function TrainingProject({ className = "" }) {
  const trainingProjects = projects.filter((p) => p.training);
  return (
    <>
      <section className={`py-12 md:py-16 ${className}`}>
        <ProjectSection
          title="Projets réalisés durant ma formation"
          subtitle="Projets encadrés par OpenClassrooms, réalisés à partir de maquettes et cahiers des charges."
          items={trainingProjects}
          variant="featured"
        />
      </section>
    </>
  );
}
