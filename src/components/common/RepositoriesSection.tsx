import React from 'react';
import { repositories } from '../../constants';

export default function RepositoriesSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Repositories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our open-source projects that power the Scout Game ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo, idx) => (
            <div
              key={idx}
              className="group backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  {repo.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{repo.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{repo.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 mr-1"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    {repo.stars}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork w-4 h-4 mr-1"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>
                    {repo.forks}
                  </div>
                </div>
                <a
                  href={repo.link}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-4 h-4 mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
