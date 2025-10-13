import { useEffect, useState } from "react";
import { api, type Project } from "../lib/api";
import ProjectSection from "./ProjectSection";

const featuredIds = [1, 2];

export default function FeaturedProjects() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);

    api
      .getProjects()
      .then((data) => {
        if (alive)
          setItems(data.items.filter((p) => featuredIds.includes(p.id)));
      })
      .catch(() => {
        if (alive) setError("Erreur lors du chargement des projets");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      <section className="space-y-6">
        <h2 className="py-16 md:py-20 flex justify-center text-2xl md:text-3xl font-display font-semibold tracking-tight">
          Projets à la une
        </h2>

        <ProjectSection
          title=""
          items={items}
          error={error}
          loading={loading}
          variant="featured"
        />
      </section>
    </>
  );
}
