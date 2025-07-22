'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NotFound: FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 -z-20" />
      
      {/* Animated background artifacts */}
      <div className="fixed inset-0 -z-10">
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/30 dark:bg-blue-600/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-200/40 dark:bg-purple-600/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-pink-200/30 dark:bg-pink-600/20 rounded-full animate-pulse delay-2000" />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/6 right-1/3 w-20 h-20 border-2 border-blue-300/40 dark:border-blue-500/30 rotate-45 animate-[spin_8s_linear_infinite]" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-purple-300/40 dark:border-purple-500/30 rotate-12 animate-[spin_12s_linear_infinite_reverse]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/6 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 dark:from-pink-600/30 dark:to-orange-600/30 rounded-full blur-xl animate-pulse delay-1500" />
      </div>
      
      {/* Main content */}
      <div className={cn(
        'text-center max-w-2xl mx-auto px-6 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}>
        {/* 404 Number with gradient */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          {/* Glowing effect */}
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-blue-300/20 dark:text-blue-500/20 blur-sm animate-pulse">
            404
          </div>
        </div>
        
        {/* Error icon with animation */}
        <div className={cn(
          'flex justify-center mb-6 transition-all duration-700 delay-300',
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        )}>
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
            <AlertCircle className="h-12 w-12 text-red-500 animate-bounce" />
          </div>
        </div>
        
        {/* Text content */}
        <div className={cn(
          'space-y-4 mb-8 transition-all duration-700 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you&apos;re looking for seems to have vanished into the digital void. 
            Don&apos;t worry, it happens to the best of us!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md inline-block">
            Route: {pathname}
          </p>
        </div>
        
        {/* Action buttons */}
        <div className={cn(
          'flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 group"
          >
            <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
        
        {/* Helpful suggestions */}
        <div className={cn(
          'mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 delay-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}>
          <div className="flex items-center justify-center mb-3">
            <Search className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              What can you do?
            </h3>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <li>• Check the URL for typos</li>
            <li>• Use the navigation menu to find what you&apos;re looking for</li>
            <li>• Return to the homepage and start fresh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
