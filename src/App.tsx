import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StepContent from './components/StepContent';
import Dashboard from './components/Dashboard';
import BrandSetup from './components/BrandSetup';
import AIExecutionIdeas from './components/AIExecutionIdeas';
import PRManagement from './components/PRManagement';
import { Home, List, Building2, Sparkles, Megaphone } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'steps' | 'brand-setup' | 'ai-ideas' | 'pr-management'>('dashboard');
  const [brandData, setBrandData] = useState(null);
  const totalSteps = 20;

  const handleBrandSave = (data: any) => {
    setBrandData(data);
    // You could also save to localStorage or send to an API
    console.log('Brand data saved:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentStep={currentStep} 
        totalSteps={totalSteps}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <div className="flex">
        <Sidebar 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        />
        
        <main className="flex-1 md:ml-80">
          {/* View Toggle */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setCurrentView('steps')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'steps'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <List className="h-4 w-4" />
                <span>Step Details</span>
              </button>
              <button
                onClick={() => setCurrentView('brand-setup')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'brand-setup'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Building2 className="h-4 w-4" />
                <span>Brand Setup</span>
              </button>
              <button
                onClick={() => setCurrentView('ai-ideas')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'ai-ideas'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                <span>AI Ideas</span>
              </button>
              <button
                onClick={() => setCurrentView('pr-management')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === 'pr-management'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Megaphone className="h-4 w-4" />
                <span>PR & Media</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="py-8">
            {currentView === 'dashboard' && (
              <Dashboard currentStep={currentStep} totalSteps={totalSteps} />
            )}
            {currentView === 'steps' && (
              <StepContent currentStep={currentStep} />
            )}
            {currentView === 'brand-setup' && (
              <BrandSetup onSave={handleBrandSave} />
            )}
            {currentView === 'ai-ideas' && (
              <AIExecutionIdeas brandData={brandData} />
            )}
            {currentView === 'pr-management' && (
              <PRManagement />
            )}
          </div>

          {/* Navigation Footer */}
          {currentView === 'steps' && (
            <div className="bg-white border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between items-center max-w-4xl mx-auto">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous Step
                </button>
                <span className="text-sm text-gray-600">
                  Step {currentStep} of {totalSteps}
                </span>
                <button
                  onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                  disabled={currentStep === totalSteps}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;