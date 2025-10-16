import htmlLogo from "../assets/webp/logo-skills/html.webp";
import cssLogo from "@/assets/webp/logo-skills/css.webp";
import jsLogo from "@/assets/webp/logo-skills/js.webp";
import reactLogo from "@/assets/webp/logo-skills/react.webp";
import nodeLogo from "@/assets/webp/logo-skills/node.webp";
import tsLogo from "@/assets/webp/logo-skills/typescript-svgrepo-com.webp";
import gitLogo from "@/assets/webp/logo-skills/git.webp";

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
      <section className="">
        <h2 className=" flex justify-center text-2xl md:text-3xl mb-15 text-center font-display font-semibold tracking-tight">
          Mes compétences principales
        </h2>
        <ul className="grid grid-cols-4 lg:grid-cols-6 gap-12">
          {skills.map((skills) => (
            <li key={skills.name} className="flex flex-col items-center gap-5">
              <p className="flex gap-4 font-sans leading-relaxed text-neutral-700 dark:text-neutral-300">
                {skills.name}
              </p>
              <img
                src={skills.logo}
                alt={skills.name}
                className="flex justify-center h-12 w-12 md:grayscale hover:grayscale-0 transition duration-300"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
