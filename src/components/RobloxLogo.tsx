"use client";

import React from 'react';

interface RobloxLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RobloxLogo: React.FC<RobloxLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-24 h-8',
    md: 'w-32 h-10',
    lg: 'w-40 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <div className="relative flex items-center">
        {/* Roblox text logo recreation */}
        <div className="flex items-center space-x-1">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-2xl px-2 py-1 rounded transform -skew-x-12 shadow-lg">
            R
          </div>
          <div className="font-black text-2xl text-gray-800 tracking-tight">
            OBLOX
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobloxLogo;