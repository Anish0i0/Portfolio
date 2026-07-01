import stocky from "../assets/stocky.png";
import airbnb from "../assets/airbnb.png";
import emiCalculator from "../assets/emi-calc.png";

const projects = [
  {
    title: "Stock Exchange Platform",
    description:
      "Built a full-stack stock exchange web application featuring interactive stock dashboards, analytical charts, secure authentication & authorization, and a modern responsive landing page. Developed using the MERN stack with a focus on performance, scalability, and clean UI/UX.",

    tech: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],

    image: stocky,

    live: "https://stock-exchange-webapp.vercel.app/",
    github: "https://github.com/Anish0i0/Stock-Exchange-Webapp.git",
  },

  {
    title: "Airbnb clone",
    description:
      "Developed a full-stack Airbnb clone featuring property listings, user authentication, authorization, and dynamic booking functionalities. Built using Node.js, Express, MongoDB, and EJS with a focus on responsive design, secure user access, and scalable backend architecture.",

    tech: ["Express", "Node.js", "EJS", "Bootstrap", "MongoDB"],

    image: airbnb,

    live: "https://airbnb-clone-project-tww2.onrender.com/listings",
    github: "https://github.com/Anish0i0/AirBnb-Clone-.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-cyan-400 mb-3">My Work</p>

          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg hover:border-cyan-400/40 transition duration-300"
            >
              {/* IMAGE */}

              <div className="overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 py-3 border border-white/20 rounded-xl hover:border-cyan-400 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
