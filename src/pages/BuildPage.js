import React, { useState } from 'react';
import { Cpu, Database, Zap, Wrench, ChevronRight, Check } from 'lucide-react';

const BuildPage = () => {
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState({});

  const projects = [
    {
      id: 1, title: '8-bit CPU Simulator', icon: Cpu, color: 'from-blue-500 to-cyan-500', difficulty: 'Beginner',
      steps: ['Design architecture', 'Implement ALU', 'Create register file', 'Build decoder', 'Add memory', 'Test']
    },
    {
      id: 2, title: 'Cache Memory System', icon: Database, color: 'from-purple-500 to-pink-500', difficulty: 'Intermediate',
      steps: ['Design structure', 'Implement LRU', 'Add coherency', 'Optimize', 'Benchmark']
    },
    {
      id: 3, title: 'FPGA Processor Core', icon: Zap, color: 'from-green-500 to-teal-500', difficulty: 'Advanced',
      steps: ['Pipeline design', 'Hazard handling', 'Custom instructions', 'Verilog code', 'FPGA synthesis', 'Test']
    }
  ];

  const updateProgress = (id, idx) => {
    setProgress((prev) => ({
      ...prev,
      [id]: { ...prev[id], [idx]: !prev[id]?.[idx] }
    }));
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl inline-block">
            <Wrench className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mt-4">Build Your Own</h1>
          <p className="text-lg text-gray-300 mt-2">Choose a project to start building architecture components.</p>
        </div>

        {!selected ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} onClick={() => setSelected(p)}
                className={`p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer`}>
                <div className={`w-14 h-14 bg-gradient-to-r ${p.color} flex items-center justify-center rounded-xl mb-4`}>
                  <p.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-xl font-semibold text-white">{p.title}</div>
                <div className="text-sm text-gray-400">{p.difficulty}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/5 p-6 rounded-2xl">
            <button onClick={() => setSelected(null)} className="text-gray-300 hover:text-white mb-4 flex items-center">
              <ChevronRight className="rotate-180 h-5 w-5 mr-1" /> Back
            </button>

            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <ul className="space-y-3">
              {selected.steps.map((step, idx) => (
                <li key={idx} onClick={() => updateProgress(selected.id, idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center space-x-3 ${progress[selected.id]?.[idx] ? 'bg-green-500/20 border-green-500' : 'border-white/10 hover:bg-white/10'}`}>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${progress[selected.id]?.[idx] ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}>
                    {progress[selected.id]?.[idx] && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <span className={`${progress[selected.id]?.[idx] ? 'text-green-300 line-through' : 'text-white'}`}>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildPage;
