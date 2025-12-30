import { Sparkles, MousePointerClick, Compass } from "lucide-react";

export default function Solution() {
  return (
    <>
      <section className="max-w-6xl py-12 md:py-28 mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary mb-12 text-center md:text-left">
          Une approche pensée pour votre projet
        </h2>
        <h3 className="text-lg sm:text-xl font-medium tracking-tight text-text-secondary mb-8 text-center md:text-left">
          Chaque projet est différent. Mon approche consiste à comprendre votre
          activité afin de concevoir un site web cohérent, utile et évolutif,
          capable de transformer vos utilisateurs en clients.
        </h3>
        <br />
        <ul className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <li className="p-5 card-solution lg:col-span-2 lg:mx-auto lg:max-w-lg">
            <div className="flex gap-2">
              <Compass className="h-5 w-5 text-primary" />
              <h4 className="pb-4">
                <strong>Identité & cohérence</strong>
              </h4>
            </div>
            <p>
              Un site web aligné avec votre image et vos valeurs. Je prends le
              temps de comprendre votre activité, votre façon de travailler et
              votre univers, afin de concevoir un site qui vous ressemble
              vraiment.
            </p>
          </li>
          <li className="p-5 card-solution">
            <div className="flex gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h4 className="pb-4">
                <strong>Clarté du message</strong>
              </h4>
            </div>
            <p>
              Un message clair et structuré. Le contenu et la structure du site
              sont pensés pour guider vos visiteurs et leur permettre de
              comprendre rapidement votre offre et vos objectifs.
            </p>
          </li>
          <li className="p-5 card-solution ">
            <div className="flex gap-2">
              <MousePointerClick className="h-5 w-5 text-primary" />
              <h4 className="pb-4">
                <strong>Expérience utilisateur</strong>
              </h4>
            </div>
            <p>
              Une expérience fluide et agréable. Je conçois des interfaces
              rapides, lisibles et adaptées à tous les écrans, afin d’offrir une
              navigation simple et efficace.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
