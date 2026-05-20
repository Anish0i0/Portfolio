import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-cyan-400 mb-3">Contact</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Something Great Together
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
          I'm always open to discussing new projects, internship opportunities,
          freelance work, or collaborations.
        </p>

        {/* SOCIAL LINKS */}

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/Anish0i0"
            target="_blank"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
          >
            <FaGithub className="text-2xl text-cyan-400" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/anish0i076586"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
          >
            <FaLinkedin className="text-2xl text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:anish905699@email.com"
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
          >
            <FaEnvelope className="text-2xl text-cyan-400" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
