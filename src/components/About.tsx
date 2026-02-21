import { motion } from "motion/react";
import { Code, Cpu, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            We Engineer Scalable Digital Solutions
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Dark X Quantum builds intelligent web systems powered by automation and AI.
            We create full-stack web applications, modern animated websites, AI agents, and workflow automation tools designed to streamline operations and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              desc: "To eliminate repetitive tasks and optimize business operations through intelligent automation.",
              icon: <Zap className="w-8 h-8 text-cyan-400" />
            },
            {
              title: "Our Approach",
              desc: "We don't just write code. We analyze, strategize, and build systems that solve real business problems.",
              icon: <Code className="w-8 h-8 text-blue-400" />
            },
            {
              title: "The Difference",
              desc: "We combine aesthetic excellence with powerful backend engineering. Beauty meets brains.",
              icon: <Cpu className="w-8 h-8 text-teal-400" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
