const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}

        <div>
          <p className="text-cyan-400 mb-3">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building modern and scalable web applications.
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            I'm a passionate MERN stack developer focused on building modern,
            responsive, and scalable web applications. I enjoy creating clean
            user interfaces, developing efficient backend systems, and
            transforming ideas into real-world digital experiences.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            I have experience building full-stack applications including
            dashboard systems, authentication-based platforms, and dynamic web
            applications using React, Node.js, Express, and MongoDB. I'm
            constantly improving my skills by working on real-world projects and
            exploring modern web technologies.
          </p>
        </div>

        {/* RIGHT SIDE */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">2+</h3>

            <p className="text-zinc-400">Full Stack Projects</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">MERN</h3>

            <p className="text-zinc-400">Specialized Stack</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">UI/UX</h3>

            <p className="text-zinc-400">Clean Modern Interfaces</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">100%</h3>

            <p className="text-zinc-400">Responsive Design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
