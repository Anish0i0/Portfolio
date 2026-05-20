import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 md:pt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-4">MERN Stack Developer</p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building modern
            <span className="text-cyan-400"> web experiences</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
            I build modern and scalable web applications with clean UI,
            responsive design, and performant backend systems.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/Anish'sResume.pdf"
              target="_blank"
              className="px-6 py-3 border border-white/20 rounded-xl hover:border-cyan-400 transition duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* GLOW */}

          <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 blur-3xl rounded-full"></div>

          {/* MAIN CARD */}

          <div className="relative w-[320px] h-[320px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-zinc-400 text-sm mb-2">Currently Building</p>

              <h3 className="text-2xl font-bold leading-snug">
                Full Stack MERN Applications
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-400 text-sm">Frontend</p>

                <p className="text-zinc-300">
                  React • Bootstrap • Framer Motion
                </p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-400 text-sm">Backend</p>

                <p className="text-zinc-300">Node.js • Express • MongoDB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
