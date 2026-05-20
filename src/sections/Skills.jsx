import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiJavascript,
  SiFirebase,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiVercel,
  SiRender,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "HTML & CSS",
    icon: <SiHtml5 />,
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },

  {
    name: "Render",
    icon: <SiRender />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}

        <div className="mb-16">
          <p className="text-cyan-400 mb-3">Technologies</p>

          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tools</h2>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-4">{skill.icon}</div>

              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
