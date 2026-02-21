export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">DARK X QUANTUM</h3>
            <p className="text-gray-500 text-sm">Building the future of intelligent systems.</p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Dark X Quantum. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
