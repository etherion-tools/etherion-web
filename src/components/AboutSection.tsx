'use client';
import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Etherion Tools
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We&apos;re a forward-thinking web3 organization dedicated to building innovative tools that enhance the developer experience in the Scout Game ecosystem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To empower developers with cutting-edge tools that simplify web3 development, enhance user experiences, and foster innovation in the decentralized ecosystem. We believe in the power of open-source collaboration to drive the future of blockchain technology.
          </p>
        </div>
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To become the leading provider of developer tools in the Scout Game ecosystem, creating seamless bridges between traditional development practices and innovative web3 technologies that unlock new possibilities for creators worldwide.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 