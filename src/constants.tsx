import React from 'react';

interface Repository {
    name: string;
    description: string;
    tags: string[];
    stars: number;
    forks: number;
    link: string;
    icon: React.ReactNode;
  }
    
    export const repositories: Repository[] = [
    {
      name: 'DEV-bot',
      description:
        'A Discord bot for the ScoutGame token DEV with features for price monitoring, volume tracking, wallet linking, and balance inquiries.',
      tags: ['TypeScript', 'Discord.js', 'Node.js', 'Web3'],
      stars: 42,
      forks: 12,
      link: 'https://github.com/etherion-tools/DEV-bot',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot w-6 h-6 text-white"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
      ),
    },
    {
      name: 'ScoutLens',
      description:
        'A Chrome extension providing enhanced UI/UX improvements for Scout Game, with experimental features and improved visualizations.',
      tags: ['TypeScript', 'Chrome APIs', 'React', 'Web3'],
      stars: 28,
      forks: 8,
      link: 'https://github.com/etherion-tools/ScoutLens',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chrome w-6 h-6 text-white"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" x2="12" y1="8" y2="8"></line><line x1="3.95" x2="8.54" y1="6.06" y2="14"></line><line x1="10.88" x2="15.46" y1="21.94" y2="14"></line></svg>
      ),
    },
    {
      name: 'Scout Game Tools',
      description:
        'Additional tools and utilities for the Scout Game ecosystem, enhancing the developer experience.',
      tags: ['TypeScript', 'React', 'Web3', 'API'],
      stars: 15,
      forks: 5,
      link: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad2 w-6 h-6 text-white"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
      ),
    },
  ];
