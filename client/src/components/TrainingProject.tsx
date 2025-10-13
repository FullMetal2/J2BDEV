import ProjectSection from "./ProjectSection";
import { useEffect, useState } from "react";
import { api, type Project } from "../lib/api";

export default function TrainingProject() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);

    api
      .getProjects()
      .then((data) => {
        if (alive) setItems(data.items.filter((p) => !!p.training));
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
      <ProjectSection
        title="Projets réalisés pendant ma formation"
        items={items}
        error={error}
        loading={loading}
      />
    </>
  );
}
