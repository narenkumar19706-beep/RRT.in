import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Box - Material Symbol */}
            <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[20px]">pets</span>
            </div>
            {/* Brand Text */}
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-black">Rapid</span>
              <span className="font-bold text-gray-400 text-xs">Response Team</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <a href="#download" className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors">
              Get App
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
            <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Privacy Policy</Link>
            <a href="#download" onClick={() => setIsMenuOpen(false)} className="bg-black text-white text-center py-3 font-medium">
              Download App
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[16px]">pets</span>
                <span className="font-bold">Rapid Response Team</span>
              </div>
              <p className="text-gray-500 text-sm max-w-xs">
                Where empathy meets action. A community-driven animal welfare support platform.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-black">Home</Link></li>
                <li><a href="#how-it-works" className="hover:text-black">How it Works</a></li>
                <li><a href="#download" className="hover:text-black">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
                <li><Link to="/privacy" className="hover:text-black">Terms of Service</Link></li>
                <li><a href="mailto:support@rrt.org" className="hover:text-black">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rapid Response Team. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>Secure access</span>
              <span>Privacy ensured</span>
              <span>Community driven</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;