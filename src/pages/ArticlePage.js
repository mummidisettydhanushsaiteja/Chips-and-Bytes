import React, { useState } from 'react';
import { PenTool, Send, Check } from 'lucide-react';

const ArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    content: '',
    tags: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ title: '', author: '', category: '', content: '', tags: '' });
  };

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl">
              <PenTool className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-4">Share Your Knowledge</h1>
          <p className="text-lg text-gray-300 mt-2">Submit articles to help fellow learners.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl space-y-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Article Title" value={formData.title} required
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400" />
            <input type="text" placeholder="Author Name" value={formData.author} required
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400" />
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <select value={formData.category} required
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white">
              <option value="" disabled>Select category...</option>
              <option value="processor">Processor Design</option>
              <option value="memory">Memory Systems</option>
              <option value="fpga">FPGA Development</option>
            </select>
            <input type="text" placeholder="Tags (e.g. cache, cpu)" value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400" />
          </div>

          <textarea rows="6" placeholder="Article Content..." required value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400"></textarea>

          <div className="flex justify-end gap-4">
            <button type="button" className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10">Save Draft</button>
            <button type="submit" disabled={isSubmitted}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:from-pink-600 hover:to-purple-600 flex items-center gap-2">
              {isSubmitted ? <Check className="h-5 w-5" /> : <Send className="h-5 w-5" />}
              {isSubmitted ? 'Published!' : 'Publish'}
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div className="mt-6 bg-green-500/20 p-4 rounded-xl border border-green-500/30 text-green-300">
            Article Published Successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;