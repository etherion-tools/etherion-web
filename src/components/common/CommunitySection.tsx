import React from "react";
import { Github, Users } from "lucide-react"; // Lucide relevant icon import

const CommunitySection = () => (
  <section id="community" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Connect with fellow developers, contribute to our projects, and help shape the future of web3 tools
        </p>
      </div>
    </div>
    <div className="flex justify-center w-full">
      <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center w-full min-h-[340px] flex flex-col justify-center" style={{ maxWidth: '96rem' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Github
            size={32}
            color="#fff"
            className="w-8 h-8 text-white"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Contribute to our open-source projects and help build the future</p>
        <div className="flex items-center justify-center text-blue-400">
          <Users
            size={20}
            className="w-4 h-4 mr-2"
            color="#60a5fa" // Tailwind .text-blue-400
          />
          <a href="#" className="underline hover:text-blue-500">50+ Contributors</a>
        </div>
      </div>
    </div>
  </section>
);

export default CommunitySection;
