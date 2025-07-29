import React from 'react';
import { Cpu, Database, Zap, Code, ArrowRight, Wrench, Star } from 'lucide-react';

const HomePage = () => {
  const animatedCards = [0, 1, 2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Hero Section */}
      <div className="text-center py-20">
        <Cpu className="mx-auto h-16 w-16 text-cyan-400 animate-bounce" />
        <h1 className="text-5xl font-bold text-white mt-4">Chips & Bytes</h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto mt-4">
          Dive deep into the fascinating world of computer architecture.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-cyan-600">
            <span>Join Our Community</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-white/20">
            <Wrench className="h-4 w-4" />
            <span>Start Building</span>
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: Database, title: 'Memory Systems', desc: 'Master cache hierarchies and storage optimization.', color: 'from-blue-500 to-cyan-500' },
          { icon: Zap, title: 'Processor Design', desc: 'Learn pipelines, ISAs, and performance tuning.', color: 'from-purple-500 to-pink-500' },
          { icon: Code, title: 'Hardware Programming', desc: 'Work with Verilog, VHDL, and FPGA boards.', color: 'from-green-500 to-teal-500' }
        ].map(({ icon: Icon, title, desc, color }, i) => (
          <div key={i} className={`p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-transform transform hover:scale-105`}>            <div className={`w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-gradient-to-r ${color}`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Member Spotlights</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Chen', content: 'Transformed my understanding of architecture.', role: 'Senior Member' },
              { name: 'Alex Rodriguez', content: 'Built a CPU simulator with amazing support.', role: 'Project Lead' },
              { name: 'Maya Patel', content: 'The collaboration and innovation here is unmatched.', role: 'Workshop Coordinator' }
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-transform transform hover:scale-105">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic mb-4">"{t.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-500 text-white font-bold rounded-full mr-3">{t.name[0]}</div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;