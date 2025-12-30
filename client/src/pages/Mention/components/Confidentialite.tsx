export default function Confidentialité() {
  return (
    <>
      {/* --- Politique de confidentialité --- */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center md:text-left">
          Politique de confidentialité & protection des données
        </h2>

        <h3 className="text-xl font-medium text-text-secondary text-center md:text-left">
          Données collectées via le formulaire
        </h3>

        <ul className="space-y-2 text-neutral-300 list-disc list-inside">
          <li>Nom</li>
          <li>Adresse e-mail</li>
          <li>Message</li>
        </ul>

        <div className="space-y-6">
          <h3 className="text-xl font-medium text-text-secondary text-center md:text-left">
            Finalité de la collecte
          </h3>
          <p className="leading-relaxed">
            Les données envoyées via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande. Elles ne sont ni
            revendues, ni cédées à des tiers.
          </p>

          <h3 className="text-xl font-medium text-text-secondary text-center md:text-left">
            Durée de conservation
          </h3>
          <p className="leading-relaxed">
            Les messages peuvent être conservés jusqu’à 12 mois, uniquement dans
            le cadre de l’échange entre vous et J2BDev.
          </p>

          <h3 className="text-xl font-medium text-text-secondary text-center md:text-left">
            Vos droits
          </h3>
          <p>Conformément au RGPD, vous pouvez demander :</p>
          <ul className="space-y-2 text-neutral-300 list-disc list-inside">
            <li>L’accès à vos données</li>
            <li>La rectification</li>
            <li>La suppression</li>
          </ul>

          <p>
            Pour toute demande :
            <a
              href="mailto:contact@j2bdev.fr"
              className="text-primary hover:underline ml-1"
            >
              contact@j2bdev.fr
            </a>
            <span className="text-neutral-400">
              {" "}
              (Objet : « RGPD — demande de suppression des données »)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
