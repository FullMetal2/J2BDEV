import { Button } from "../../../components/ui/Button";
import { HashLink } from "react-router-hash-link";
import {
  LibraryBig,
  LayoutDashboard,
  Gauge,
  SearchCheck,
  Blocks,
} from "lucide-react";

export default function Expertise() {
  return (
    <>
      <section className="max-w-6xl py-12 md:py-28 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-12 text-center md:text-left">
          Mon expertise
        </h2>

        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-text-secondary mb-8 text-center md:text-left">
          Des compétences techniques au service de sites web utiles, performants
          et durables.
        </h3>

        <ul className="space-y-6">
          <li>
            <p className="font-medium text-text-primary">
              Création de sites web sur mesure
            </p>
            <p className="text-text-secondary">
              Conception et développement de sites adaptés à votre activité,
              pensés pour vos utilisateurs et alignés avec vos objectifs
              (visibilité, crédibilité, conversion).
            </p>
            <div className="flex gap-2">
              <LibraryBig className="h-5 w-5 text-primary" />
              <p className="text-text-secondary">
                Résultat : un site qui vous ressemble et qui a du sens.
              </p>
            </div>{" "}
          </li>

          <li>
            <p className="font-medium text-text-primary">
              WordPress & sites vitrines professionnels
            </p>
            <p className="text-text-secondary">
              Création ou refonte de sites WordPress clairs, rapides et faciles
              à administrer, sans dépendre de thèmes lourds ou de solutions
              inutiles.
            </p>
            <div className="flex gap-2">
              <Blocks className="w-5 h-5 text-primary" />
              <p className="text-text-secondary">
                Résultat : un site fiable, évolutif et simple à gérer.
              </p>
            </div>
          </li>

          <li>
            <p className="font-medium text-text-primary">
              Applications web modernes (React)
            </p>
            <p className="text-text-secondary">
              Développement d’interfaces dynamiques et performantes pour des
              projets plus avancés ou des besoins spécifiques.
            </p>
            <div className="flex gap-2">
              <LayoutDashboard className="h-6 w-5 text-primary" />
              <p className="text-text-secondary">
                Résultat : une expérience fluide et moderne.
              </p>
            </div>
          </li>

          <li>
            <p className="font-medium text-text-primary">
              Performance & optimisation
            </p>
            <p className="text-text-secondary">
              Optimisation du temps de chargement, des images et du code pour
              offrir un site rapide sur tous les appareils.
            </p>
            <div className="flex gap-2">
              <Gauge className="h-6 w-7 text-primary" />
              <p className="text-text-secondary">
                Résultat :de meilleures performances et une meilleure expérience
                utilisateur.
              </p>
            </div>
          </li>

          <li>
            <p className="font-medium text-text-primary">SEO & accessibilité</p>
            <p className="text-text-secondary">
              Mise en place des bonnes pratiques SEO et accessibilité dès la
              conception pour améliorer la visibilité et l’utilisabilité du
              site.
            </p>
            <div className="flex gap-2">
              <SearchCheck className="h-6 w-6 text-primary" />
              <p className="text-text-secondary">
                Résultat : un site plus visible, plus inclusif et plus efficace.
              </p>
            </div>
          </li>
        </ul>

        <p className="mt-10 text-text-secondary">
          Vous souhaitez travailler avec quelqu’un qui s’implique réellement
          dans votre projet ? Découvrez mon parcours et ma façon de travailler.
        </p>
        <div className="flex justify-center md:justify-start">
          <HashLink to="/#about">
            <Button variant="secondary">Qui suis-je ?</Button>
          </HashLink>
        </div>
      </section>
    </>
  );
}
