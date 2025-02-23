import { FunctionComponent } from 'react';
import { Mail, X, Instagram } from 'lucide-react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 py-6 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        {/* Left Section - Logo and Navigation */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <b className="text-xl font-bold">Happen</b>
          <nav className="flex flex-wrap gap-5 text-sm">
            <a href="#" className="hover:text-white transition">What's New</a>
            <a href="#" className="hover:text-white transition">Discover</a>
            <a href="#" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Help</a>
          </nav>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex justify-end gap-4 text-gray-400">
          <a href="mailto:info@weeb.com" aria-label="Email" className="hover:text-white transition">
            <Mail size={20} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition">
            <X size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;