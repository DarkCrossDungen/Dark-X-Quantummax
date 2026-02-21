import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bot, Zap, Globe, Cpu, ShieldCheck } from "lucide-react";

export default function Hero() {
  const typingText = "Pressure Builds Precision. We Build the Future.";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-teal-900/40 z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[100px] z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] z-0"
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-sm font-medium tracking-wider text-cyan-300 mb-4">
              DARK X QUANTUM
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight min-h-[160px] md:min-h-[220px]">
              {typingText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-xl text-gray-300 border-l-4 border-cyan-500 pl-4"
          >
            We Don’t Build Websites. We Build Systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] ring-1 ring-transparent hover:ring-cyan-500/50">
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />
            </a>
            <a href="#work" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              View Work
            </a>
          </motion.div>
        </div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Card 1 - Analytics */}
          <FloatingCard 
            delay={0} 
            className="absolute top-10 right-10 z-30"
            icon={<BarChart3 className="w-6 h-6 text-cyan-400" />}
            title="Analytics"
            value="+128%"
            desc="Growth Rate"
          />
          
          {/* Card 2 - AI Processing */}
          <FloatingCard 
            delay={1.5} 
            className="absolute top-1/2 left-0 z-20"
            icon={<Bot className="w-6 h-6 text-blue-400" />}
            title="AI Agents"
            value="Active"
            desc="Processing Data"
          />

          {/* Card 3 - System Health */}
          <FloatingCard 
            delay={0.8} 
            className="absolute bottom-20 right-20 z-10"
            icon={<Zap className="w-6 h-6 text-teal-400" />}
            title="System"
            value="99.9%"
            desc="Uptime Guaranteed"
          />

          {/* Decorative Elements behind cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ delay, className, icon, title, value, desc }: { delay: number, className: string, icon: React.ReactNode, title: string, value: string, desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0] 
      }}
      transition={{ 
        opacity: { duration: 0.8, delay: delay + 3 }, // Entrance delay
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay } // Floating animation
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)" }}
      className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl w-64 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-lg">
          {icon}
        </div>
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
      </div>
      <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <p className="text-xs text-gray-500">{desc}</p>
    </motion.div>
  );
}
