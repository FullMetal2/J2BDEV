import detective from "@/assets/logo-detective.webp";
import steam from "@/assets/cover-app-steam.webp";
import nina from "@/assets/nina.webp";
import kasa from "@/assets/kasa.webp";
import booki from "@/assets/booki.webp";
import ramen from "@/assets/ramen.webp";

export type Project = {
  id: number;
  title: string;
  cover?: string;
  alt: string;
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
    alt: "Logo du site web de détective",
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
    alt: "Logo de l'app web Steamapp",
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
    alt: "Logo de la photographe Nina Carducci",
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
    alt: "Logo de l'app Kasa",
    summary: "Application web de location immobilère. Front-end.",
    tags: ["React ", "JSON "],
    demoUrl: "https://kasa-psi-sand.vercel.app/",
    featured: false,
    training: true,
  },
  {
    id: 5,
    title: "Booki",
    cover: booki,
    alt: "Logo du site web Booki",
    summary: "Réalisation d'une page d'accueil de l'agence de voyage Booki",
    tags: ["HTML ", "CSS "],
    demoUrl: "https://fullmetal2.github.io/Booki/",
    featured: false,
    training: true,
  },
  {
    id: 6,
    title: "Le Ramen toi",
    cover: ramen,
    alt: "Image de ramen",
    summary:
      "Premier projet web : conception d’une page de restaurant pour apprendre les bases du HTML, CSS, JavaScript et responsive design.",
    tags: ["HTML ", "CSS ", "JavaScript"],
    demoUrl: "https://fullmetal2.github.io/Le-ramen-toi/",
    featured: true,
    training: false,
  },
];
