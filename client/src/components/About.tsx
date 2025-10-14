import user from "@/assets/webp/images/photo.webp";
import booki from "@/assets/booki.webp";

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img src={booki} alt="" />
        <img
          src={user}
          alt="Photo de Jb"
          className="rounded-xl shadow-lg w-64 md:w-80 lg:w-96 mx-auto md:mx-0"
        />
        <div className="max-w-xl">
          <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-gray-300">
            Je suis Jb, développeur web full-stack junior fraîchement diplômé.
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
