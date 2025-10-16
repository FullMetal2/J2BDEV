import { type Project } from "../lib/dataProjects";
import { motion } from "framer-motion";

type Props = {
  title: string;
  items: Project[];
  variant?: "featured" | "grid";
};
const colsByVariant = {
  featured: "grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto",
  grid: "grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto",
};

export default function ProjectSection({ title, items, variant }: Props) {
  const isDesktop = window.innerWidth >= 1024;
  if (items.length === 0)
    return <p className="opacity-70">Aucun projet trouvé.</p>;

  return (
    <section className="space-y-6">
      <h2 className=" py-10 text-2xl text-center font-display font-semibold tracking-tight">
        {title}
      </h2>

      <motion.ul
        className={`grid justify-items-center gap-10 ${
          colsByVariant[variant ?? "grid"]
        }`}
        initial={{ opacity: 0, x: isDesktop ? -500 : 0 }} // 🚀 départ sur le côté gauche
        whileInView={{ opacity: 1, x: 0 }} // 🎯 arrive au centre
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 10,
          duration: 0.6, // ⏱ vitesse
          ease: "easeOut", // 🧈 effet de fluidité
        }}
      >
        {items.map((p) => (
          <motion.li
            key={p.id}
            className="p-4 card-wrapper  md:size-110 overflow-hidden rounded-xl"
          >
            <a href={p.demoUrl ?? p.repoUrl} target="_blank" rel="noreferrer">
              <div className="card">
                <img
                  src={p.cover}
                  alt={p.alt}
                  className="mb-3 rounded-lg transition duration-500 ease-out md:grayscale-[60%] md:hover:grayscale-0 md:hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                  loading="lazy"
                />

                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-1 text-sm opacity-80">{p.summary}</p>
                {p.tags?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded bg-white/10 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
