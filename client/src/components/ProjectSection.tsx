import { type Project } from "../lib/dataProjects";

type Props = {
  title: string;
  items: Project[];
  variant?: "featured" | "grid";
};
const colsByVariant = {
  featured: "grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto",
  grid: "grid-cols-1 sm:grid-cols-2 max-w6xl mx-auto",
};

export default function ProjectSection({ title, items, variant }: Props) {
  if (items.length === 0)
    return <p className="opacity-70">Aucun projet trouvé.</p>;

  return (
    <section className="space-y-6">
      <h2 className=" py-10 text-2xl text-center font-display font-semibold tracking-tight">
        {title}
      </h2>

      <ul
        className={`grid place-items-center gap-10 ${
          colsByVariant[variant ?? "grid"]
        }`}
      >
        {items.map((p) => (
          <li
            key={p.id}
            className="p-4 md:size-110 card relative overflow-hidden rounded-xl"
          >
            <a href={p.demoUrl ?? p.repoUrl} target="_blank" rel="noreferrer">
              <img
                src={p.cover}
                alt={p.title}
                className="mb-3 rounded-lg w-full h-auto block"
                loading="lazy"
              />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-indigo-300 opacity-80">
                {p.summary}
              </p>
              {p.tags?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded bg-white/10 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
