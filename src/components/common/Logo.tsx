import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-indigo-600">
        <Image
          src="/etherion-tools-logo.svg"
          alt="Etherion Tools Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>
      <span className="text-[20px] leading-7 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Etherion Tools
      </span>
    </Link>
  );
}