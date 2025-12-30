export default function Mention() {
  return (
    <>
      {/* --- Mentions légales --- */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center md:text-left">
          Mentions légales
        </h2>

        <h3 className="text-lg font-medium text-text-secondary text-center md:text-left">
          J2BDev
        </h3>
        <ul className="space-y-2 text-neutral-300 list-disc list-inside">
          <li>
            Entreprise individuelle — <em>SIRET en cours d’obtention</em>
          </li>
          <li>Responsable de publication : Jean-Baptiste Bertron</li>
          <li>
            Contact :{" "}
            <a
              href="mailto:contact@j2bdev.fr"
              className="text-primary hover:underline"
            >
              contact@j2bdev.fr
            </a>
          </li>
        </ul>

        <h3 className=" pt-6 text-xl font-medium text-text-secondary text-center md:text-left">
          Hébergement du site
        </h3>
        <ul className="space-y-2 text-neutral-300 list-disc list-inside">
          <li>Vercel Inc.</li>
          <li>340 S Lemon Ave #4133, Walnut, CA 91789 — États-Unis</li>
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://vercel.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
