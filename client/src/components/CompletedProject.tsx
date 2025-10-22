import ProjectSection from "./ProjectSection";

import { projects } from "../lib/dataProjects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <ProjectSection
        title="Projets personnels"
        items={featuredProjects}
        variant="featured"
      />
    </>
  );
}
