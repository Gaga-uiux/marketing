import React from 'react';
import { 
  Building2, 
  ClipboardList, 
  Package, 
  FileText, 
  Search, 
  Users, 
  Target, 
  Navigation, 
  Calendar,
  Lightbulb,
  Palette,
  Code,
  PenTool,
  DollarSign,
  Megaphone,
  BarChart3,
  TrendingUp,
  Rocket,
  Eye,
  CheckCircle
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  category: string;
  completed?: boolean;
}

const steps: Step[] = [
  { id: 1, title: 'Brand/Company Setup', icon: Building2, category: 'Foundation' },
  { id: 2, title: 'Orderly Steps Planning', icon: ClipboardList, category: 'Foundation' },
  { id: 3, title: 'Product Concept & Info', icon: Package, category: 'Foundation' },
  { id: 4, title: 'Project Brief', icon: FileText, category: 'Strategy' },
  { id: 5, title: 'Market Research', icon: Search, category: 'Strategy' },
  { id: 6, title: 'Competitive Review', icon: Users, category: 'Strategy' },
  { id: 7, title: 'Brand Positioning', icon: Target, category: 'Strategy' },
  { id: 8, title: 'Strategic Direction', icon: Navigation, category: 'Strategy' },
  { id: 9, title: 'Roll Out Plan', icon: Calendar, category: 'Planning' },
  { id: 10, title: 'Execution Ideas', icon: Lightbulb, category: 'Planning' },
  { id: 11, title: 'Creative Direction', icon: Palette, category: 'Creative' },
  { id: 12, title: 'Development', icon: Code, category: 'Creative' },
  { id: 13, title: 'Brand Content', icon: PenTool, category: 'Content' },
  { id: 14, title: 'Paid/Earned Content', icon: DollarSign, category: 'Content' },
  { id: 15, title: 'PR & Publishers', icon: Megaphone, category: 'Content' },
  { id: 16, title: 'Always-On Campaign', icon: BarChart3, category: 'Campaign' },
  { id: 17, title: 'Media Planning', icon: TrendingUp, category: 'Campaign' },
  { id: 18, title: 'Campaign Execution', icon: Rocket, category: 'Launch' },
  { id: 19, title: 'Product Launch', icon: Eye, category: 'Launch' },
  { id: 20, title: 'Analytics & Monitoring', icon: CheckCircle, category: 'Analysis' }
];

interface SidebarProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep, setCurrentStep, isOpen, setIsOpen }) => {
  const categories = ['Foundation', 'Strategy', 'Planning', 'Creative', 'Content', 'Campaign', 'Launch', 'Analysis'];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-16 left-0 z-40 w-80 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 overflow-y-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-0
      `}>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Campaign Steps</h2>
          
          {categories.map(category => {
            const categorySteps = steps.filter(step => step.category === category);
            
            return (
              <div key={category} className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="space-y-1">
                  {categorySteps.map(step => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = step.id < currentStep;
                    
                    return (
                      <button
                        key={step.id}
                        onClick={() => {
                          setCurrentStep(step.id);
                          setIsOpen(false);
                        }}
                        className={`
                          w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors
                          ${isActive ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                          ${isCompleted ? 'text-green-600' : 'text-gray-700'}
                          hover:bg-gray-50
                        `}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : isCompleted ? 'text-green-500' : 'text-gray-400'}`} />
                        <span className="text-sm font-medium truncate">{step.title}</span>
                        {isCompleted && (
                          <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;