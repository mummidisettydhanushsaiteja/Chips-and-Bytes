import React from 'react';
import { Cpu, PenTool, Wrench, Menu, X } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen, scrollY }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Cpu },
    { id: 'article', label: 'Write Article', icon: PenTool },
    { id: 'build', label: 'Build Your Own', icon: Wrench }
  ];

  const renderNavButton = (id, label, Icon) => (
    <button
      key={id}
      onClick={() => {
        setActiveTab(id);
        setIsMenuOpen(false);
      }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        activeTab === id 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-white/10' 
        : 'bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <Cpu className="h-8 w-8 text-cyan-400" />
            <h1 className="text-xl font-bold text-white">Chips & Bytes</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ id, label, icon }) => renderNavButton(id, label, icon))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {navItems.map(({ id, label, icon }) => renderNavButton(id, label, icon))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

