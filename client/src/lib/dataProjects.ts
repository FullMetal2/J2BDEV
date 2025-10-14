import detective from "../assets/logo-detective.png";
import steam from "../assets/cover-app-steam.webp";
import nina from "../assets/nina.webp";
import kasa from "../assets/kasa.webp";
import booki from "../assets/booki.webp";

export type Project = {
  id: number;
  title: string;
  cover?: string;
  summary: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  training?: boolean;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Détective-privé",
    cover: detective,
    summary: "Optimisation perf/SEO + a11y (avant/après, webp, cache)",
    tags: ["WordPress ", "SEO ", "Perf "],
    demoUrl: "https://www.detective-perpignan.com/",
    featured: true,
    training: false,
  },
  {
    id: 2,
    title: "SteamApp",
    cover: steam,
    summary: "Lien compte Steam, bibliothèque, playtime - MVP en cours.",
    tags: ["React ", "Node ", "Steam API "],
    demoUrl: "https://github.com/FullMetal2/Steam-App",
    featured: true,
    training: false,
  },
  {
    id: 3,
    title: "Nina Carducci",
    cover: nina,
    summary: "Optimisation du référencement, débugge de certaine fonctions.",
    tags: ["HTML ", "CSS ", "Javascript "],
    demoUrl: "https://fullmetal2.github.io/Nina-Carducci/",
    featured: false,
    training: true,
  },
  {
    id: 4,
    title: "Kasa",
    cover: kasa,
    summary: "Application web de location immobilère. Front-end.",
    tags: ["React ", "JSON "],
    demoUrl: "https://github.com/FullMetal2/Kasa",
    featured: false,
    training: true,
  },
  {
    id: 5,
    title: "Booki",
    cover: booki,
    summary: "Réalisation d'une page d'accueil de l'agence de voyage Booki",
    tags: ["HTML ", "CSS "],
    demoUrl: "https://fullmetal2.github.io/Booki/",
    featured: false,
    training: true,
  },
];
