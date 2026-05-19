const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}

        <div>
          <p className="text-cyan-400 mb-4">MERN Stack Developer</p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Building modern
            <span className="text-cyan-400"> web experiences</span>
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            I create scalable full-stack applications with clean UI, smooth user
            experiences, and performant backend systems.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-6 py-3 border border-white/20 rounded-xl hover:border-cyan-400 transition">
              Resume
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <div className="w-[320px] h-[320px] rounded-full bg-cyan-400/20 blur-3xl absolute"></div>

          <div className="w-[300px] h-[300px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl relative"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
