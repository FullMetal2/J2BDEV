import ProjectSection from "../../sections/Projects/ProjectSection";

import { projects } from "../../../lib/dataProjects";

export default function FeaturedProjects({ className = "" }) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <section className={`py-12 md:py-16 ${className}`}>
        <ProjectSection
          title="Projets clients & personnels"
          subtitle="Sites vitrine et applications web développés sur mesure, pensés pour la performance, l'expérience utilisateur et la conversion"
          items={featuredProjects}
          variant="featured"
        />
      </section>
    </>
  );
}
