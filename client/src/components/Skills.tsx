import htmlLogo from "@/assets/logo-skills/html.svg";
import cssLogo from "@/assets/logo-skills/css.svg";
import jsLogo from "@/assets/logo-skills/js.svg";
import reactLogo from "@/assets/logo-skills/react.svg";
import nodeLogo from "@/assets/logo-skills/node.svg";
import tsLogo from "@/assets/logo-skills/typescript-svgrepo-com.svg";
import gitLogo from "@/assets/logo-skills/git.svg";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Git", logo: gitLogo },
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
