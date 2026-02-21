import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Stories</h2>
          <p className="text-gray-400">What people say about working with us</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Testimonials */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="w-8 h-8 text-cyan-500/50 mb-4" />
              <p className="text-gray-300 mb-6 italic">
                "Dark X Quantum transformed our internal workflows. The AI agents they built are handling 80% of our customer queries automatically."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                <div>
                  <div className="font-bold">Client Name</div>
                  <div className="text-sm text-gray-500">CEO, Tech Company</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
