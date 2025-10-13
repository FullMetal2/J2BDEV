import ProjectSection from "./ProjectSection";
import { projects } from "../lib/dataProjects";

export default function TrainingProject() {
  const trainingProjects = projects.filter((p) => p.training);
  return (
    <>
      <ProjectSection
        title="Projets réalisés pendant ma formation"
        items={trainingProjects}
        variant="featured"
      />
    </>
  );
}
