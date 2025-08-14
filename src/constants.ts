// src/constants.ts

export const CORE_PROJECT_COUNT = 3;

export const FALLBACK_STATS = {
  stars: "...",
  forks: "...",
};

export const STAT_LABELS = [
  { label: "GitHub Stars", valueColor: "text-purple-600 dark:text-purple-400" },
  { label: "GitHub Forks", valueColor: "text-blue-600 dark:text-blue-400" },
  { label: "Core Projects", valueColor: "text-cyan-600 dark:text-cyan-400" },
];

// Repository data (icon field is a key, not a JSX node)
export const repositories = [
  {
    name: "DEV-bot",
    description: "A Discord bot for the ScoutGame token DEV with features for price monitoring, volume tracking, wallet linking, and balance inquiries.",
    tags: ["TypeScript", "Discord.js", "Node.js", "Web3"],
    stars: 42,
    forks: 12,
    link: "https://github.com/etherion-tools/DEV-bot",
    icon: "bot", // just a key for icon
  },
  {
    name: "Scout Game Tools",
    description: "Additional tools and utilities for the Scout Game ecosystem, enhancing the developer experience.",
    tags: ["TypeScript", "React", "Web3", "API"],
    stars: 15,
    forks: 5,
    link: "#",
    icon: "gamepad2",
  },
  
];
