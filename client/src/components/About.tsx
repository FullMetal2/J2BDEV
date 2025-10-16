import user from "@/assets/photo.webp";
import user2 from "@assets/photo-1.webp";

export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={user}
          data-src={user2}
          alt="Portrait de Jean-Baptiste Bertron"
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
            Je suis Jean-Baptiste Bertron, développeur web front-end junior,
            passionné par la création et le code. J’aime concevoir des
            interfaces modernes, performantes et accessibles avec React et
            Tailwind CSS, en accordant une attention particulière à l’expérience
            utilisateur. Actuellement, je me forme au back-end avec Node.js afin
            de comprendre l’ensemble de la stack et devenir plus polyvalent.
          </p>
        </div>
      </section>
    </>
  );
}
