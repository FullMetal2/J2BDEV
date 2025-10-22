import { useState } from "react";
import { type Project } from "../lib/dataProjects";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  items: Project[];
  variant?: "featured" | "grid";
};

const colsByVariant = {
  featured: "sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto",
  grid: "sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto",
};

export default function ProjectSection({ title, items, variant }: Props) {
  const [showDetailsID, setShowDetailsID] = useState<number | null>(null);
  const isDesktop = window.innerWidth >= 1024;

  if (items.length === 0)
    return <p className="opacity-70">Aucun projet trouvé.</p>;

  const selectedProject = items.find((p) => p.id === showDetailsID);

  return (
    <section className="space-y-6">
      <h2 className="py-10 text-2xl text-center font-display font-semibold tracking-tight">
        {title}
      </h2>

      <motion.ul
        className={`grid justify-items-center gap-10 ${
          colsByVariant[variant ?? "grid"]
        }`}
        initial={{ opacity: 0, x: isDesktop ? -500 : 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {items.map((p) => (
          <motion.li
            key={p.id}
            className="p-4 card-wrapper sm:size-120 overflow-hidden rounded-xl"
          >
            <div className="card">
              <a href={p.demoUrl ?? p.repoUrl} target="_blank" rel="noreferrer">
                <img
                  src={p.cover}
                  alt={p.alt}
                  className="mb-3 rounded-lg transition duration-500 ease-out md:grayscale-[60%] md:hover:grayscale-0 md:hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                  loading="lazy"
                />
              </a>

              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm opacity-80">{p.summary}</p>

              {p.stack?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded bg-white/10 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <button
                onClick={() =>
                  setShowDetailsID(showDetailsID === p.id ? null : p.id)
                }
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium cursor-pointer"
              >
                Voir plus
              </button>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* MODALE rajouter pour les détails des projets*/}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailsID(null)}
          >
            <motion.div
              className="bg-neutral-900 text-white rounded-xl max-w-lg w-full mx-4 p-6 shadow-lg relative overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDetailsID(null)}
                className="absolute top-3 right-3 text-neutral-400 hover:text-white"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm opacity-80 mb-3">
                {selectedProject.context}
              </p>

              <div className="space-y-2 text-sm opacity-90">
                <p>
                  <strong>Objectifs :</strong> {selectedProject.objectives}
                </p>
                <p>
                  <strong>Compétences :</strong> {selectedProject.skills}
                </p>
                <p>
                  <strong>Résultats :</strong> {selectedProject.results}
                </p>
                <p>
                  <strong>Améliorations :</strong>{" "}
                  {selectedProject.improvements}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
