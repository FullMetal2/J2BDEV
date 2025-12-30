export default function Collab() {
  return (
    <>
      {/* --- collaboration --------------------------------------------------- */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-4">
          Comment je collabore
        </h2>
        <ul className="space-y-3 text-text-secondary">
          <li>• Je vous écoute avant de vous conseiller.</li>
          <li>
            • Je clarifie chaque étape pour que vous sachiez où on en est.
          </li>
          <li>
            • Je vise un résultat aligné : votre site doit vous ressembler.
          </li>
        </ul>
      </section>
      {/* --- Collaboration photographie --------------------------------------- */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center md:text-left mb-4">
          Une identité visuelle soignée
        </h2>

        <p className="max-w-2xl text-text-secondary leading-relaxed">
          Pour les projets nécessitant des photos professionnelles, je travaille
          en collaboration avec <strong>Marine Remy</strong>, photographe
          professionnelle basée à Perpignan :{" "}
          <a
            href="https://photographe.marine-remy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            photographe.marine-remy
          </a>
          .
        </p>

        <p className="max-w-2xl text-text-secondary leading-relaxed">
          Cette collaboration me permet de vous proposer un site cohérent jusque
          dans les visuels : des photos pensées pour le web, alignées avec votre
          activité et votre image de marque.
        </p>

        <ul className="space-y-3 text-text-secondary">
          <li>• Shooting photo sur site</li>
          <li>• Direction artistique & conseils avant shooting</li>
          <li>• Sélection & retouches adaptées à l’identité du site</li>
        </ul>

        <p className="text-text-secondary">
          Vous n’avez rien à organiser : si besoin, je coordonne le shooting et
          l’intégration des visuels afin que votre site reflète réellement ce
          que vous faites — avec professionnalisme.
        </p>
      </section>
    </>
  );
}
