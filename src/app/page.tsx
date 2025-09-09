"use client";

import React, { useState } from 'react';
import RobloxLogo from '@/components/RobloxLogo';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import SocialButtons from '@/components/SocialButtons';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function RobloxLoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <RobloxLogo size="lg" />
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Games</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Catalog</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Develop</a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Welcome Content */}
              <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                    Welcome to
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">
                      ROBLOX
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Join millions of players in the ultimate virtual universe. 
                    Play, create, and share experiences with friends from around the world.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🎮</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Play Games</h3>
                    <p className="text-sm text-gray-600">Millions of experiences</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">⚙️</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Create</h3>
                    <p className="text-sm text-gray-600">Build your world</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">👥</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Connect</h3>
                    <p className="text-sm text-gray-600">Meet new friends</p>
                  </div>
                </div>

                {/* Platform Availability */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Available on all your devices</p>
                  <div className="flex justify-center lg:justify-start space-x-6 text-gray-400">
                    <div className="text-center">
                      <div className="text-2xl mb-1">💻</div>
                      <span className="text-xs">PC</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">📱</div>
                      <span className="text-xs">Mobile</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎮</div>
                      <span className="text-xs">Xbox</span>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl mb-1">🥽</div>
                      <span className="text-xs">VR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login/Signup Form */}
              <div className="order-1 lg:order-2">
                <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {isSignUp ? 'Sign Up for Roblox' : 'Sign in to Roblox'}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                      {isSignUp 
                        ? 'Create your account and join the adventure' 
                        : 'Welcome back! Sign in to your account'
                      }
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Social Login Buttons */}
                    <SocialButtons />
                    
                    <div className="relative">
                      <Separator className="my-4" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white px-4 text-xs text-gray-500 uppercase tracking-wider">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    {/* Login/Signup Form */}
                    {isSignUp ? (
                      <RegisterForm onToggleForm={toggleForm} />
                    ) : (
                      <LoginForm onToggleForm={toggleForm} />
                    )}
                  </CardContent>
                </Card>

                {/* Additional Links */}
                <div className="text-center mt-6 space-y-2">
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </a>
                  </p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-400">
                    <a href="#" className="hover:text-gray-600">Help</a>
                    <a href="#" className="hover:text-gray-600">Safety</a>
                    <a href="#" className="hover:text-gray-600">Parents</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <RobloxLogo size="sm" />
              <span>&copy; 2024 Roblox Corporation. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700">About</a>
              <a href="#" className="hover:text-gray-700">Jobs</a>
              <a href="#" className="hover:text-gray-700">Blog</a>
              <a href="#" className="hover:text-gray-700">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}