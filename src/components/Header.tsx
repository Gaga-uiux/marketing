import React from 'react';
import { Target, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentStep: number;
  totalSteps: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentStep, totalSteps, isMenuOpen, setIsMenuOpen }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Campaign Roadmap</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Progress:</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {currentStep}/{totalSteps}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;