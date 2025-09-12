export default function Maintenance() {
  return (
    <div className="container">
      {/* Titre principal */}
      <span className="maintenance">Maintenance en cours</span>

      <main>
        {/* Logo */}
        <img src="/logo_j2bdev.webp" alt="Logo J2BDev" className="logo" />

        {/* Sous-titre */}
        <h1 className="subtitle">J2BDev revient bientôt ✨</h1>

        {/* Phrase */}
        <p className="phrase">
          Je prépare une nouvelle version de mon portfolio (React + Node).
          <br />
          Merci pour votre patience.
        </p>

        {/* Liens */}
        <div className="contact">
          <p>
            Besoin de me joindre ?
            <a href="mailto:contact@j2bdev.fr"> contact@j2bdev.fr </a>
            <br />
            Suivez l&apos;avancement sur :
            <a
              href="https://github.com/FullMetal2/J2BDEV"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
console.log(import.meta.env.VITE_API_URL);
