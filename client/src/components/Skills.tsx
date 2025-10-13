const skills = [
  { name: "HTML", logo: "logo-skills/html.svg" },
  { name: "CSS", logo: "logo-skills/css.svg" },
  { name: "JavaScript", logo: "logo-skills/js.svg" },
  { name: "React", logo: "logo-skills/react.svg" },
  { name: "Node.js", logo: "logo-skills/node.svg" },
  { name: "TypeScript", logo: "logo-skills/typescript-svgrepo-com.svg" },
  { name: "Git", logo: "logo-skills/git.svg" },
];

export default function Skills() {
  return (
    <>
      <section className="py-12">
        <h2 className=" flex justify-center text-2xl md:text-3xl mb-15 font-display font-semibold tracking-tight">
          Mes compétences principales
        </h2>
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-12">
          {skills.map((skills) => (
            <div key={skills.name} className="flex flex-col items-center gap-5">
              <p className="flex gap-4 font-sans leading-relaxed text-neutral-700 dark:text-neutral-300">
                {skills.name}
              </p>
              <img
                src={skills.logo}
                alt={skills.name}
                className="flex justify-center h-12 w-12 md:grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
