import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    desc: "We analyze your business needs, define goals, and map out a strategic roadmap."
  },
  {
    number: "02",
    title: "Architecture & Planning",
    desc: "We design the system architecture, select the right tech stack, and plan the development phases."
  },
  {
    number: "03",
    title: "Development & Integration",
    desc: "Our engineers build the solution with clean, scalable code and integrate necessary APIs."
  },
  {
    number: "04",
    title: "Testing & Optimization",
    desc: "Rigorous testing ensures performance, security, and a bug-free user experience."
  },
  {
    number: "05",
    title: "Deployment & Scaling",
    desc: "We launch your product and monitor its performance, ready to scale as you grow."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#050505] text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400">From concept to reality in 5 steps</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                    <span className="text-6xl font-bold text-white/5 mb-4 block">{step.number}</span>
                    <h3 className="text-2xl font-bold mb-3 text-cyan-300">{step.title}</h3>
                    <p className="text-gray-400 max-w-md">{step.desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
