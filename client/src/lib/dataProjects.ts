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
    title: "Détective-privé",
    cover: detective,
    alt: "Logo du site web de détective",
    summary: "Optimisation perf/SEO + a11y (avant/après, webp, cache)",
    context:
      "Projet réalisé pendant une semaine de stage d'immersion avant la formation OC.",
    stack: ["WordPress ", "SEO ", "Perf "],
    demoUrl: "https://www.detective-perpignan.com/",
    featured: true,
    training: false,
    objectives:
      "Refonte totale du site, pour moderniser et être aligné avec les standards du web actuel.",
    skills:
      "Optimisation SEO (balises, métadonnées, structure sémantique), audit de performance.",
    results: "Site fonctionnel, optimisation SEO.",
    improvements: "",
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
    featured: true,
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
      "Projet réalisé en tant que développeur freelance pour améliorer le SEO et la performance du site d'une photographe professionnelle.",
    stack: ["HTML ", "CSS ", "Javascript ", "Lighthouse", "Wave"],
    demoUrl: "https://fullmetal2.github.io/Nina-Carducci/",
    featured: false,
    training: true,
    objectives:
      "Identifier les problèmes techniques via Lighthouse et Wave, corriger les erreurs d’accessibilité, améliorer la structure du code et la vitesse de chargement",
    skills:
      "Optimisation SEO (balises, métadonnées, structure sémantique), audit de performance, débogage JavaScript, accessibilité WCAG.",
    results:
      "Score Lighthouse passé de 68 à plus de 95 sur les quatre axes (Performance, Accessibilité, SEO, Bonnes pratiques). Code nettoyé et navigation fluide",
    improvements:
      "Automatiser le redimensionnement des images selon le device, et intégrer un sitemap dynamique pour le référencement.",
  },
  {
    id: 4,
    title: "Kasa",
    cover: kasa,
    alt: "Logo de l'app Kasa",
    summary: "Application web de location immobilère. Front-end.",
    context:
      "Projet réalisé à partir de maquettes Figma pour construire une SPA (Single Page Application) réactive et performante.",

    stack: ["React", "React Router", "Vite", "SASS", "JavaScript"],
    demoUrl: "https://kasa-psi-sand.vercel.app/",
    featured: false,
    training: true,
    objectives:
      "Structurer une application avec Vite et React Router, afficher les données dynamiquement à partir d’un fichier JSON et créer une expérience fluide et responsive.",

    skills:
      "Utilisation de React, React Router, Node.js, SASS, et des hooks pour la gestion d’état et la navigation dynamique.",

    results:
      "Application entièrement fonctionnelle avec routing, composants modulaires, gestion des erreurs 404 et transitions fluides.",

    improvements:
      "Connecter le front à une API back-end pour rendre la plateforme entièrement dynamique.",
  },
  {
    id: 5,
    title: "Booki",
    cover: booki,
    alt: "Logo du site web Booki",
    summary: "Réalisation d'une page d'accueil de l'agence de voyage Booki",
    context:
      "L’entreprise Booki souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
    stack: ["HTML ", "CSS "],
    demoUrl: "https://fullmetal2.github.io/Booki/",
    featured: false,
    training: true,
    objectives:
      "Intégrer la maquette fournie avec HTML et CSS en respectant la sémantique, le responsive design et les standards d’accessibilité.",
    skills:
      "Structuration du contenu avec HTML5, mise en page flexible avec Flexbox et Grid, adaptation mobile.",
    results:
      "Une page conforme à la maquette Figma, responsive et validée par les validateurs W3C.",
    improvements:
      "Optimiser les performances et l’accessibilité, et ajouter une version avec un framework CSS moderne.",
  },
  {
    id: 6,
    title: "Le Ramen toi",
    cover: ramen,
    alt: "Image de ramen",
    summary: "Découverte des languages du web ( base )",
    context: "Comprendre les bases du web avec de l'HTML, CSS et JavaScript",
    stack: ["HTML ", "CSS ", "JavaScript"],
    demoUrl: "https://fullmetal2.github.io/Le-ramen-toi/",
    featured: true,
    training: false,
    objectives: "Créer une page d'accueil d'un restaurant",
    skills: "Utilisation de l'HTML, CSS, JavaScript",
    results:
      "Page d'accueil fonctionnelle avec header main footer nav et formulaire pour réserver",
    improvements: "",
  },
];
