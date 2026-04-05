/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import html from "../assets/skill/icons8-html-5.svg";
import css from "../assets/skill/icons8-css3.svg";
import tailwind from "../assets/skill/icons8-tailwind-css.svg";
import react from "../assets/skill/React-icon.svg";
import next from "../assets/skill/icons8-nextjs.svg";
import javascript from "../assets/skill/icons8-javascript.svg";
import typescript from "../assets/skill/icons8-typescript.svg";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React", icon: react },
      { name: "Next", icon: next },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
      { name: "Mongoose", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg" },
      { name: "JWT", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jsonwebtokens.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Render", icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto mt-10 md:mt-20 w-full max-w-6xl text-white px-4"
    >
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
        Technical <span className="text-neon shadow-neon">Skills</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col rounded-3xl border border-white/10 bg-glass p-7 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white/90">
                {category.title}
              </h3>
              <div className="h-1 w-12 bg-neon mt-2 rounded-full shadow-[0_0_8px_#00f3ff]" />
            </div>

            {/* Skills List */}
            <div className="space-y-6 flex-grow">
              {category.skills.map((skill, sIdx) => (
                <div key={skill.name} className="flex items-center group">
                  {/* Left: Text */}
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors flex-shrink-0 w-24">
                    {skill.name}
                  </span>

                  {/* Middle: Animated Connecting Line */}
                  <div className="flex-grow mx-4 relative h-[1px] bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: sIdx * 0.1 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-neon to-transparent"
                    />
                    {/* Scanning Glow Effect */}
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </div>

                  {/* Right: Icon */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-white/5 bg-white/5 group-hover:border-neon group-hover:shadow-[0_0_10px_#00f3ff] transition-all duration-300 overflow-hidden">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain p-1"
                      />
                    ) : (
                      <span className="text-[8px] text-white/30 uppercase">
                        None
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
