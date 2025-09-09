"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface SignupFormProps {
  onToggleForm: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onToggleForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.birthMonth || !formData.birthDay || !formData.birthYear) {
      newErrors.birthdate = 'Please enter your complete birth date';
    }
    
    if (!formData.agreeTerms) {
      newErrors.terms = 'You must agree to the Terms of Service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Signup attempt:', formData);
      alert('Signup functionality would be implemented here');
      setIsLoading(false);
    }, 1500);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-username" className="text-sm font-medium text-gray-700">
              Username
            </Label>
            <Input
              id="signup-username"
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.username ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Enter your username"
              disabled={isLoading}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="signup-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Enter your email"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password" className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="signup-password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.password ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Confirm your password"
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Birthday
            </Label>
            <div className="grid grid-cols-3 gap-2">
              <select
                value={formData.birthMonth}
                onChange={(e) => handleInputChange('birthMonth', e.target.value)}
                className="px-3 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 bg-white text-sm"
                disabled={isLoading}
              >
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={month} value={index + 1}>{month}</option>
                ))}
              </select>
              <select
                value={formData.birthDay}
                onChange={(e) => handleInputChange('birthDay', e.target.value)}
                className="px-3 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 bg-white text-sm"
                disabled={isLoading}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                value={formData.birthYear}
                onChange={(e) => handleInputChange('birthYear', e.target.value)}
                className="px-3 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 bg-white text-sm"
                disabled={isLoading}
              >
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            {errors.birthdate && (
              <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                disabled={isLoading}
                className="mt-1"
              />
              <Label 
                htmlFor="agreeTerms" 
                className="text-sm text-gray-600 cursor-pointer leading-relaxed"
              >
                I agree to Roblox's{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              Creating Account...
            </div>
          ) : (
            'Sign Up'
          )}
        </Button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onToggleForm}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;