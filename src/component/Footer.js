import React from 'react';
import { Cpu, Mail, Calendar } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-black py-12 border-t border-white/10 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Cpu className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">Chips & Bytes</span>
          </div>
          <p className="text-sm">Empowering next-gen computer architects through hands-on learning.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          {['About Us', 'Projects', 'Events', 'Resources'].map((link, i) => (
            <p key={i} className="hover:text-white cursor-pointer text-sm">{link}</p>
          ))}
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Community</h3>
          {['Discord', 'GitHub', 'Forums', 'Newsletter'].map((link, i) => (
            <p key={i} className="hover:text-white cursor-pointer text-sm">{link}</p>
          ))}
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" /><span>contact@chipsbytes.edu</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" /><span>Weekly Meetings</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © 2025 Chips & Bytes Club. Built with ❤️ for learning.
      </div>
    </div>
  </footer>
);

export default Footer;
