import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Extraordinary</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-12">
              Ready to transform your business with AI and intelligent systems? Reach out to us today.
            </p>

            <div className="space-y-8">
              <ContactItem 
                icon={<Mail className="w-6 h-6" />}
                label="Email"
                value="krisshivanandakumar@gmail.com"
                href="mailto:krisshivanandakumar@gmail.com"
              />
              <ContactItem 
                icon={<Phone className="w-6 h-6" />}
                label="Phone"
                value="+91 96004 76486"
                href="tel:+919600476486"
              />
              <ContactItem 
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn"
                value="Quantum Max Studio"
                href="#"
              />
            </div>

            <div className="mt-12">
                <a 
                    href="https://wa.me/919600476486" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/20"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Chat on WhatsApp
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">{value}</div>
      </div>
    </a>
  );
}
