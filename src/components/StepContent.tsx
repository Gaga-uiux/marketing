import React, { useState } from 'react';
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
  CheckCircle,
  ChevronRight,
  Plus,
  Edit3,
  Save
} from 'lucide-react';

interface StepContentProps {
  currentStep: number;
}

const stepData = {
  1: {
    title: 'Brand/Company Setup',
    icon: Building2,
    description: 'Establish your brand foundation with company information, values, and core identity.',
    tasks: [
      'Define company mission and vision',
      'Establish brand values and personality',
      'Create brand guidelines document',
      'Set up legal structure and registrations'
    ],
    deliverables: ['Brand Identity Document', 'Company Registration', 'Brand Guidelines'],
    timeline: '1-2 weeks'
  },
  2: {
    title: 'Orderly Steps Planning',
    icon: ClipboardList,
    description: 'Create a structured timeline and workflow for your entire campaign process.',
    tasks: [
      'Map out campaign phases',
      'Set project milestones',
      'Assign responsibilities',
      'Create project timeline'
    ],
    deliverables: ['Project Timeline', 'Milestone Chart', 'Team Assignments'],
    timeline: '3-5 days'
  },
  3: {
    title: 'Product Concept & Info',
    icon: Package,
    description: 'Define your product specifications, features, and unique selling propositions.',
    tasks: [
      'Document product features',
      'Define target specifications',
      'Identify unique selling points',
      'Create product roadmap'
    ],
    deliverables: ['Product Specification', 'Feature List', 'USP Document'],
    timeline: '1 week'
  },
  4: {
    title: 'Project Brief',
    icon: FileText,
    description: 'Comprehensive brief outlining project scope, objectives, and requirements.',
    tasks: [
      'Define project objectives',
      'Set success metrics',
      'Outline scope and constraints',
      'Establish budget parameters'
    ],
    deliverables: ['Project Brief Document', 'Success Metrics', 'Budget Outline'],
    timeline: '3-4 days'
  },
  5: {
    title: 'Market Research',
    icon: Search,
    description: 'Conduct thorough market analysis to understand your target audience and market conditions.',
    tasks: [
      'Analyze market size and trends',
      'Identify target demographics',
      'Study consumer behavior',
      'Research market opportunities'
    ],
    deliverables: ['Market Research Report', 'Target Audience Profiles', 'Market Opportunity Analysis'],
    timeline: '2-3 weeks'
  },
  6: {
    title: 'Competitive Review',
    icon: Users,
    description: 'Analyze competitors to identify market gaps and positioning opportunities.',
    tasks: [
      'Identify direct and indirect competitors',
      'Analyze competitor strategies',
      'Map competitive landscape',
      'Identify market gaps'
    ],
    deliverables: ['Competitive Analysis Report', 'Competitor Matrix', 'Gap Analysis'],
    timeline: '1-2 weeks'
  },
  7: {
    title: 'Brand Positioning',
    icon: Target,
    description: 'Develop your unique market position and value proposition.',
    tasks: [
      'Define positioning statement',
      'Create value proposition',
      'Develop brand messaging',
      'Map brand perception'
    ],
    deliverables: ['Positioning Statement', 'Value Proposition', 'Brand Messaging Framework'],
    timeline: '1 week'
  },
  8: {
    title: 'Strategic Direction',
    icon: Navigation,
    description: 'Establish strategic approach and address key challenges.',
    tasks: [
      'Identify key challenges',
      'Define strategic priorities',
      'Create solution frameworks',
      'Plan risk mitigation'
    ],
    deliverables: ['Strategic Plan', 'Challenge Assessment', 'Risk Management Plan'],
    timeline: '1-2 weeks'
  },
  9: {
    title: 'Roll Out Plan',
    icon: Calendar,
    description: 'Create detailed execution timeline with phases and milestones.',
    tasks: [
      'Plan campaign phases',
      'Set launch timeline',
      'Coordinate team activities',
      'Prepare contingency plans'
    ],
    deliverables: ['Roll-out Timeline', 'Phase Plans', 'Contingency Strategies'],
    timeline: '1 week'
  },
  10: {
    title: 'Execution Ideas',
    icon: Lightbulb,
    description: 'Brainstorm and develop creative execution concepts.',
    tasks: [
      'Generate campaign concepts',
      'Develop creative ideas',
      'Plan execution tactics',
      'Create idea repository'
    ],
    deliverables: ['Concept Presentations', 'Creative Brief', 'Execution Playbook'],
    timeline: '1-2 weeks'
  },
  11: {
    title: 'Creative Direction',
    icon: Palette,
    description: 'Establish visual identity and creative guidelines for the campaign.',
    tasks: [
      'Define visual style',
      'Create design systems',
      'Develop brand assets',
      'Set creative standards'
    ],
    deliverables: ['Creative Guidelines', 'Visual Identity', 'Brand Assets Library'],
    timeline: '2-3 weeks'
  },
  12: {
    title: 'Development',
    icon: Code,
    description: 'Build and develop all necessary assets and platforms.',
    tasks: [
      'Develop digital platforms',
      'Create campaign assets',
      'Build content management',
      'Implement tracking systems'
    ],
    deliverables: ['Digital Platforms', 'Campaign Assets', 'Analytics Setup'],
    timeline: '3-4 weeks'
  },
  13: {
    title: 'Brand Content',
    icon: PenTool,
    description: 'Create compelling brand content across all touchpoints.',
    tasks: [
      'Develop content strategy',
      'Create brand messaging',
      'Write copy and content',
      'Design visual content'
    ],
    deliverables: ['Content Calendar', 'Brand Copy', 'Visual Content Library'],
    timeline: '2-3 weeks'
  },
  14: {
    title: 'Paid/Earned Content',
    icon: DollarSign,
    description: 'Plan and create content for paid advertising and earned media.',
    tasks: [
      'Plan paid content strategy',
      'Create ad creatives',
      'Develop earned media content',
      'Set up tracking systems'
    ],
    deliverables: ['Ad Creatives', 'Media Assets', 'Tracking Implementation'],
    timeline: '2 weeks'
  },
  15: {
    title: 'PR & Publishers',
    icon: Megaphone,
    description: 'Coordinate with PR agencies, publishers, and influencers.',
    tasks: [
      'Identify PR opportunities',
      'Connect with publishers',
      'Engage influencers',
      'Plan media outreach'
    ],
    deliverables: ['PR Strategy', 'Media List', 'Influencer Partnerships'],
    timeline: '2-3 weeks'
  },
  16: {
    title: 'Always-On Campaign',
    icon: BarChart3,
    description: 'Set up continuous campaign activities and monitoring.',
    tasks: [
      'Plan ongoing activities',
      'Set up automation',
      'Create monitoring systems',
      'Establish KPIs'
    ],
    deliverables: ['Always-On Strategy', 'Automation Setup', 'KPI Dashboard'],
    timeline: '1-2 weeks'
  },
  17: {
    title: 'Media Planning',
    icon: TrendingUp,
    description: 'Develop comprehensive media strategy and buying plan.',
    tasks: [
      'Plan media mix',
      'Set media budgets',
      'Schedule campaigns',
      'Negotiate media buys'
    ],
    deliverables: ['Media Plan', 'Budget Allocation', 'Campaign Schedule'],
    timeline: '2 weeks'
  },
  18: {
    title: 'Campaign Execution',
    icon: Rocket,
    description: 'Launch and manage all campaign activities.',
    tasks: [
      'Execute launch plan',
      'Monitor performance',
      'Manage activities',
      'Optimize campaigns'
    ],
    deliverables: ['Launch Execution', 'Performance Reports', 'Optimization Plan'],
    timeline: 'Ongoing'
  },
  19: {
    title: 'Product Launch',
    icon: Eye,
    description: 'Coordinate the official product launch and announcement.',
    tasks: [
      'Execute launch event',
      'Coordinate announcements',
      'Manage media coverage',
      'Track launch metrics'
    ],
    deliverables: ['Launch Event', 'Media Coverage', 'Launch Analytics'],
    timeline: '1 week'
  },
  20: {
    title: 'Analytics & Monitoring',
    icon: CheckCircle,
    description: 'Track, analyze, and optimize campaign performance.',
    tasks: [
      'Monitor key metrics',
      'Analyze performance data',
      'Generate reports',
      'Optimize strategies'
    ],
    deliverables: ['Analytics Dashboard', 'Performance Reports', 'Optimization Recommendations'],
    timeline: 'Ongoing'
  }
};

const StepContent: React.FC<StepContentProps> = ({ currentStep }) => {
  const [notes, setNotes] = useState('');
  const [editingNotes, setEditingNotes] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState<{ [key: number]: boolean }>({});

  const step = stepData[currentStep as keyof typeof stepData];
  const Icon = step.icon;

  const toggleTask = (index: number) => {
    setCheckedTasks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedTasks = Object.values(checkedTasks).filter(Boolean).length;
  const totalTasks = step.tasks.length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Step Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium text-gray-500">Step {currentStep}</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium text-blue-600">Timeline: {step.timeline}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{step.title}</h1>
          </div>
        </div>
        <p className="text-lg text-gray-600">{step.description}</p>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Task Progress</span>
            <span>{completedTasks}/{totalTasks} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tasks Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tasks & Activities</h2>
            <div className="space-y-3">
              {step.tasks.map((task, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                    checkedTasks[index] 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(index)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      checkedTasks[index]
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 hover:border-green-500'
                    }`}
                  >
                    {checkedTasks[index] && (
                      <CheckCircle className="h-3 w-3 text-white" />
                    )}
                  </button>
                  <span className={`text-gray-700 ${checkedTasks[index] ? 'line-through text-gray-500' : ''}`}>
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Notes & Comments</h2>
              <button
                onClick={() => setEditingNotes(!editingNotes)}
                className="flex items-center space-x-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {editingNotes ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
                <span>{editingNotes ? 'Save' : 'Edit'}</span>
              </button>
            </div>
            {editingNotes ? (
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add your notes and observations for this step..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <div className="min-h-32 p-3 bg-gray-50 rounded-lg text-gray-600">
                {notes || 'No notes added yet. Click Edit to add notes.'}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Deliverables */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Deliverables</h3>
            <div className="space-y-2">
              {step.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Info */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Timeline</h3>
            <p className="text-blue-700">{step.timeline}</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Plus className="h-4 w-4" />
                <span>Add Custom Task</span>
              </button>
              <button className="w-full flex items-center space-x-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <FileText className="h-4 w-4" />
                <span>Export Step Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContent;