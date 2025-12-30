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
  context: string;
  objectives: string;
  stack: string[];
  skills: string;
  results: string;
  improvements: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  training?: boolean;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Détective privé",
    cover: detective,
    alt: "Logo du site web de détective",
    summary: "Optimisation perf/SEO + a11y (avant/après, webp, cache)",
    context:
      "Refonte et optimisation d’un site vitrine WordPress pour améliorer la lisibilité de l’offre, la rapidité d’affichage et la visibilité sur les moteurs de recherche.",
    stack: ["WordPress ", "SEO ", "Perf "],
    demoUrl: "https://www.detective-perpignan.com/",
    featured: true,
    training: false,
    objectives:
      "Moderniser le site, renforcer sa crédibilité et aligner sa structure technique avec les standards actuels du web.",
    skills:
      "Optimisation SEO (balises, métadonnées, structure sémantique), audit de performance, compression & conversion des images, amélioration du cache navigateur.",
    results:
      "Site plus rapide, plus clair et mieux positionné sur des requêtes locales stratégiques.",
    improvements:
      "Ajouter un suivi des conversions (Google Analytics / Matomo) pour mesurer la performance commerciale du site et guider les futures améliorations SEO.",
  },
  {
    id: 2,
    title: "SteamApp",
    cover: steam,
    alt: "Logo de l'app web Steamapp",
    summary: "Lien compte Steam, bibliothèque, playtime - MVP en cours.",
    context:
      "Créer une application web pour les utilisateur de steam, pouvoir connecter sont compte et en récupérer les données ( bibliothèque, succès steam, amis ). ",
    stack: ["React ", "Vite", "Node ", "Steam API "],
    demoUrl: "https://github.com/FullMetal2/Steam-App",
    featured: false,
    training: false,
    objectives:
      "Progresser dans le développement du back-end d'une application web.",
    skills: "Utilisation de React, API Steam public, Node",
    results: "MVP en cours",
    improvements: "",
  },
  {
    id: 3,
    title: "Nina Carducci",
    cover: nina,
    alt: "Logo de la photographe Nina Carducci",
    summary:
      "Optimisation du référencement, de la performance et de l’accessibilité.",
    context:
      "Optimisation technique & SEO du site d’une photographe professionnelle pour améliorer le référencement local et la vitesse de chargement.",
    stack: ["HTML ", "CSS ", "JS", "Lighthouse", "Wave"],
    demoUrl: "https://fullmetal2.github.io/Nina-Carducci/",
    featured: false,
    training: true,
    objectives:
      "Identifier les points bloquants, améliorer la performance et corriger les erreurs d’accessibilité pour renforcer la visibilité.",
    skills:
      "Audit Lighthouse/Wave, optimisation SEO, correction des erreurs d’accessibilité, nettoyage JavaScript, compression & restructuration des assets.",
    results:
      "Score Lighthouse passé de 68 → 95+ sur Performance, Accessibilité, SEO & Bonnes pratiques. Navigation plus fluide, pages plus rapides.",
    improvements:
      "Automatisation de la génération d’images responsives & sitemap dynamique pour le SEO.",
  },
  {
    id: 4,
    title: "Kasa",
    cover: kasa,
    alt: "Logo de l'app Kasa",
    summary: "Application web de location immobilère. Front-end.",
    context:
      "Développement d’une application web de location immobilière, structurée autour de composants réutilisables et d’une navigation fluide.",

    stack: ["React", "Vite", "SASS", "JavaScript"],
    demoUrl: "https://kasa-psi-sand.vercel.app/",
    featured: true,
    training: false,
    objectives:
      "Créer une application responsive et performante avec React, afficher des données dynamiques et proposer une expérience intuitive.",

    skills:
      "Architecture modulaire, gestion du routing, intégration des maquettes, hooks pour la gestion d’état & navigation, transitions fluides.",

    results:
      "Application fonctionnelle avec affichage dynamique, pages réactives, transitions & gestion d’erreurs (404).",

    improvements:
      "Connexion à une API back-end pour rendre la plateforme entièrement dynamique.",
  },
  {
    id: 5,
    title: "Booki",
    cover: booki,
    alt: "Logo du site web Booki",
    summary: "Réalisation d'une page d'accueil de l'agence de voyage Booki",
    context:
      "Intégration responsive d’une page d’accueil d’agence de voyage à partir d’une maquette, en respectant les standards d’accessibilité et de performance.",
    stack: ["HTML ", "CSS "],
    demoUrl: "https://fullmetal2.github.io/Booki/",
    featured: false,
    training: true,
    objectives:
      "Transformer une maquette en page web responsive, accessible et fidèle tout en assurant une structure HTML propre.",
    skills:
      "Structuration sémantique, mise en page flexible via Flexbox/Grid, responsive design mobile-first.",
    results:
      "Page conforme à la maquette Figma, responsive & validée par les validateurs W3C.",
    improvements:
      "Optimiser les performances et proposer une version avec framework CSS moderne.",
  },
  {
    id: 6,
    title: "Le Ramen toi",
    cover: ramen,
    alt: "Image de ramen",
    summary: "Création d’une page vitrine simple pour un restaurant fictif.",
    context:
      "Création d’une page vitrine simple pour un restaurant fictif afin de maîtriser les bases HTML, CSS & JavaScript.",
    stack: ["HTML ", "CSS ", "JavaScript"],
    demoUrl: "https://fullmetal2.github.io/Le-ramen-toi/",
    featured: false,
    training: true,
    objectives:
      "Structurer une page claire et attractive avec navigation et formulaire fonctionnel.",
    skills:
      "Création de l’arborescence, navigation interne, formulaire de réservation, interactions JavaScript.",
    results:
      "Page fonctionnelle avec navigation fluide et mise en page structurée.",
    improvements: "Reprendre le design pour une version plus professionnelle.",
  },
];
