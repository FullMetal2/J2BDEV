export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};
export const projects: Project[] = [
  {
    slug: "WordPress-detective",
    title: "Détective-privé",
    summary: "Optimisation perf/SEO + a11y (avant/après, webp, cache",
    tags: ["WordPress", "SEO", "Perf"],
    demoUrl: "https://www.detective-perpignan.com/",
  },
  {
    slug: "Steam-Dashboard",
    title: "SteamApp",
    summary: "Lien compte Steam, bibliothèque, playtime - MVP en cours.",
    tags: ["React", "Node", "Steam API"],
    demoUrl: "https://github.com/FullMetal2/Steam-App",
  },
];
