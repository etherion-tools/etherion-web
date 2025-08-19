"use client";
import React from "react";
import { repositories } from "../../constants";
import { Bot, Gamepad2, Star, GitFork, Github } from "lucide-react";

// Icon mapping: key string -> Lucide React node
const ICONS: { [key: string]: React.ReactNode } = {
  bot: <Bot size={24} color="#fff" className="w-6 h-6 text-white" />,
  gamepad2: <Gamepad2 size={24} color="#fff" className="w-6 h-6 text-white" />,
  
};

export default function RepositoriesSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Repositories
            </span>
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
                {/* Render Lucide icon from key */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  {ICONS[repo.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {repo.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {repo.description}
              </p>
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
                    <Star size={16} className="w-4 h-4 mr-1" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center">
                    <GitFork size={16} className="w-4 h-4 mr-1" />
                    {repo.forks}
                  </div>
                </div>
                <a
                  href={repo.link}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} className="w-4 h-4 mr-1" />
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
