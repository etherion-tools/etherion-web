import React from "react";
import { Bot, Gamepad2 } from "lucide-react"; // Lucide relevant icon import

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
    name: "DEV-bot",
    description:
      "A Discord bot for the ScoutGame token DEV with features for price monitoring, volume tracking, wallet linking, and balance inquiries.",
    tags: ["TypeScript", "Discord.js", "Node.js", "Web3"],
    stars: 42,
    forks: 12,
    link: "https://github.com/etherion-tools/DEV-bot",
    icon: (
      <Bot
        size={24}
        color="#fff"
        className="w-6 h-6 text-white" 
      />
    ),
  },
  {
    name: "Scout Game Tools",
    description:
      "Additional tools and utilities for the Scout Game ecosystem, enhancing the developer experience.",
    tags: ["TypeScript", "React", "Web3", "API"],
    stars: 15,
    forks: 5,
    link: "#",
    icon: (
      <Gamepad2
        size={24}
        color="#fff"
        className="w-6 h-6 text-white"
      />
    ),
  },
];
