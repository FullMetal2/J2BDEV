export default function Maintenance() {
  return (
    <div className="container">
      <span className="maintenance"> Maintenance en cours</span>
      <main>
        <img src="/logo_j2bdev.webp" alt="Logo J2BDev" className="logo" />

        <h1 className="title">J2BDev revient bientôt ✨</h1>
        <p className="phrase">
          Je prépare une nouvelle version de mon portfolio (React + Node).\n
          Merci pour votre patience.
        </p>

        <div className="contact">
          <p>
            Besoin de me joindre ?
            <a href="mailto:contact@j2bdev.fr"> contact@j2bdev.fr </a> <br />
            Suivez l'avancement sur :
            <a
              href="https://github.com/FullMetal2/J2BDEV"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub{" "}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
