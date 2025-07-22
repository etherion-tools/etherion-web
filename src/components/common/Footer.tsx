import React from 'react';

const Footer: React.FC = () => (
  <footer className="py-12 px-6 border-t border-white/20 dark:border-gray-700/20">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">E</span>
        </div>
        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Etherion Tools</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Forging next-generation open-source web3 tools for the Scout Game ecosystem
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Etherion Tools. Open source and community driven.
      </p>
    </div>
  </footer>
);

export default Footer; 