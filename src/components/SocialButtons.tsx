"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const SocialButtons: React.FC = () => {
  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        className="w-full py-3 border-2 hover:bg-gray-50 transition-colors"
        onClick={() => console.log('Continue with Google')}
      >
        <div className="w-5 h-5 mr-3 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
        Continue with Google
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full py-3 border-2 hover:bg-gray-50 transition-colors"
        onClick={() => console.log('Continue with Facebook')}
      >
        <div className="w-5 h-5 mr-3 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">f</span>
        </div>
        Continue with Facebook
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full py-3 border-2 hover:bg-gray-50 transition-colors"
        onClick={() => console.log('Continue with Apple')}
      >
        <div className="w-5 h-5 mr-3 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">🍎</span>
        </div>
        Continue with Apple
      </Button>
    </div>
  );
};

export default SocialButtons;