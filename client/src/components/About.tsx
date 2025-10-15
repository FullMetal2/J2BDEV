import user from "@/assets/photo.webp";
import user2 from "@assets/photo-1.webp";

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={user}
          data-src={user2}
          alt="Photo de Jb"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="384"
          height="577"
          className="rounded-xl shadow-lg w-64 md:w-80 lg:w-96 mx-auto md:mx-0 blur-sm transition-all duration-700 ease-out"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
        <div className="max-w-xl">
          <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-gray-300">
            Je suis Jean-Baptiste Bertron, développeur web front-end junior.
            J’ai déjà réalisé plusieurs projets en React, Node.js et TypeScript,
            et je suis prêt à apprendre de nouvelles technologies selon les
            besoins. Passionné par la tech et la création, j’aime transformer
            des idées en applications modernes et utiles.
          </p>
        </div>
      </section>
    </>
  );
}
