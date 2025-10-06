import { useEffect, useState } from "react";
import { api, type Project } from "../lib/api";

export function ProjectsList() {
  const [items, setItems] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getProjects()
      .then((data) => setItems(data.items))
      .catch((e: unknown) => {
        const err = e as { data?: unknown; message?: string };
        const msg = err.data
          ? JSON.stringify(err.data)
          : err.message ?? "Erreur réseau";
        setError(msg);
      });
  }, []);
  if (error) return <p className="text-red-400">{error}</p>;
  return (
    <ul>
      {items.map((p) => (
        <li key={p.slug}>{p.title}</li>
      ))}
    </ul>
  );
}
