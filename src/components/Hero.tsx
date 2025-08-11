'use client';

import type { FC } from 'react';
import { ChevronRight } from 'lucide-react';
import CustomButton from './common/CustomButton';
import CustomCard from './common/CustomCard';
import { useEffect, useState } from 'react';
import { fetchRepoInfo } from '@/lib/github';

interface StatItem {
  value: string;
  label: string;
  valueColor: string;
}

const Hero: FC = () => {
  const [stars, setStars] = useState<string>('...');
  const [forks, setForks] = useState<string>('...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRepoInfo();
        setStars(data.stargazers_count?.toString() ?? '0');
        setForks(data.forks_count?.toString() ?? '0');
      } catch {
        setStars('N/A');
        setForks('N/A');
      }
    };
    
    fetchData();
  }, []);

  const stats: StatItem[] = [
    {
      value: stars,
      label: 'GitHub Stars',
      valueColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      value: forks,
      label: 'GitHub Forks',
      valueColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      value: '3',
      label: 'Core Projects',
      valueColor: 'text-cyan-600 dark:text-cyan-400'
    },
  ];

  return (
    <section className="relative py-20 px-6 dark:bg-[#101828]">
      {/* Blue gradient blob in the lower left corner, only in dark mode */}
      <div className="hidden dark:block absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-400/40 via-blue-500/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Forging next-generation
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            open-source web3 tools
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Empowering developers in the Scout Game ecosystem with innovative tools for
          DEV token monitoring, enhanced user experiences, and seamless blockchain
          integration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CustomButton
            type="default"
            onClick={() => window.location.href = '/tools'}
            rightIcon={<ChevronRight className="ml-2 w-5 h-5" />}
            className="whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Explore Our Tools
          </CustomButton>
          <CustomButton
            type="transparent"
            onClick={() => window.location.href = '/community'}
            className="whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 border-2 border-blue-500/30 hover:border-blue-500/50 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-white/10 dark:bg-gray-800/10"
          >
            Join Community
          </CustomButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <CustomCard
              key={index}
              type="transparent"
              className="text-center backdrop-blur-lg bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6"
            >
              <div className={`text-3xl font-bold ${stat.valueColor}`}>{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 