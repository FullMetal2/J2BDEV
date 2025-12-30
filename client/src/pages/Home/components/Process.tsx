import { Button } from "../../../components/ui/Button";
import { HashLink } from "react-router-hash-link";
export default function Process() {
  return (
    <>
      <section className="max-w-6xl py-12 md:py-28 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-12 text-center md:text-left">
          Mon processus de travail
        </h2>

        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-text-secondary mb-8 text-center md:text-left">
          Un accompagnement clair et structuré, du premier échange jusqu’à la
          mise en ligne.
        </h3>
        <ol className="pl-6 space-y-7">
          <li>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-violet-500/40 text-sm text-white/80">
                1
              </span>
              <span className="font-medium text-white">
                Comprendre votre projet
              </span>
            </div>
            <p className="pl-9 text-gray-300">
              Nous échangeons sur vos objectifs, votre activité et vos
              contraintes afin de bien cerner vos besoins réels.
            </p>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-violet-500/40 text-sm text-white/80">
                2
              </span>
              <span className="font-medium">
                Votre activité et vos besoins.
              </span>
            </div>
            <p className="pl-9 text-gray-300">
              Analyse de votre contexte, de votre cible et de vos enjeux pour
              poser des bases solides et cohérentes.
            </p>
          </li>

          <li>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-violet-500/40 text-sm text-white/80">
                3
              </span>
              <span className="font-medium">Concevoir la solution</span>
            </div>

            <p className="pl-9 text-gray-300">
              Définition de la structure, du contenu et de l’expérience
              utilisateur pour un site clair et efficace.
            </p>
          </li>

          <li>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-violet-500/40 text-sm text-white/80">
                4
              </span>
              <span className="font-medium">Développer et optimiser</span>
            </div>

            <p className="pl-9 text-gray-300">
              Développement d’un site performant, accessible et optimisé pour le
              référencement naturel.
            </p>
          </li>

          <li>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/5 border border-violet-500/40 text-sm text-white/80">
                5
              </span>
              <span className="font-medium">Livrer et accompagner</span>
            </div>

            <p className="pl-9 text-gray-300">
              Mise en ligne du site, accompagnement et évolutions possibles
              selon vos besoins.
            </p>
          </li>
        </ol>
        <div className="flex justify-center md:justify-start">
          <HashLink to={"/process"}>
            <Button variant="secondary">Découvrir mon processus</Button>
          </HashLink>
        </div>
      </section>
    </>
  );
}
