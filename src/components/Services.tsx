import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Workflow, Layout, Globe, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "automation",
    title: "AI Automation",
    icon: <Workflow className="w-5 h-5" />,
    headline: "Intelligent Workflow Automation",
    description: "We design and implement AI-driven automation systems that eliminate repetitive tasks and optimize business operations. From CRM workflows and inventory management to internal process automation, our systems reduce manual effort and increase operational efficiency.",
    deliverables: [
      "Business process automation",
      "CRM & lead management workflows",
      "Inventory & stock automation systems",
      "Task automation pipelines",
      "Custom internal dashboards"
    ]
  },
  {
    id: "agents",
    title: "AI Agents",
    icon: <Bot className="w-5 h-5" />,
    headline: "Smart AI Agents",
    description: "We build intelligent AI agents capable of handling customer interactions, internal assistance, and decision-support tasks. Our AI systems can operate 24/7, respond contextually, and integrate seamlessly with your business tools.",
    deliverables: [
      "AI chatbots",
      "AI call agents",
      "Virtual business assistants",
      "Knowledge-based AI systems",
      "Custom AI integrations"
    ]
  },
  {
    id: "webapp",
    title: "Web Applications",
    icon: <Layout className="w-5 h-5" />,
    headline: "Full-Stack Web Applications",
    description: "We develop scalable, secure, database-integrated web applications tailored to complex business requirements. Our systems are built with performance, security, and long-term scalability in mind.",
    deliverables: [
      "Custom dashboards",
      "Admin panels",
      "Authentication systems",
      "API integrations",
      "Cloud-ready deployments"
    ]
  },
  {
    id: "websites",
    title: "Modern Websites",
    icon: <Globe className="w-5 h-5" />,
    headline: "Animated & High-Performance Websites",
    description: "We craft visually stunning, interactive websites designed to capture attention and convert visitors into customers. Our websites combine modern UI, smooth animations, and optimized performance.",
    deliverables: [
      "Responsive design",
      "Scroll-based animations",
      "Interactive UI",
      "High-speed performance",
      "SEO-optimized structure"
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section id="services" className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400">Comprehensive solutions for the digital age</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === service.id
                    ? "bg-white/10 border border-white/20 text-white shadow-lg"
                    : "hover:bg-white/5 text-gray-400 hover:text-white border border-transparent"
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === service.id ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5"}`}>
                  {service.icon}
                </div>
                <span className="font-medium text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeTab && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 h-full"
                  >
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-cyan-400">{service.headline}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">What We Deliver</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-200">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
