import React from 'react';
import { BarChart3, TrendingUp, Users, Target, Calendar, Clock } from 'lucide-react';

interface DashboardProps {
  currentStep: number;
  totalSteps: number;
}

const Dashboard: React.FC<DashboardProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  // Mock data for dashboard
  const stats = [
    { title: 'Campaign Progress', value: `${Math.round(progressPercentage)}%`, icon: BarChart3, color: 'blue' },
    { title: 'Steps Completed', value: `${currentStep - 1}/${totalSteps}`, icon: TrendingUp, color: 'green' },
    { title: 'Active Tasks', value: '12', icon: Target, color: 'orange' },
    { title: 'Team Members', value: '8', icon: Users, color: 'purple' }
  ];

  const recentActivity = [
    { action: 'Completed Market Research', time: '2 hours ago', user: 'Sarah Chen' },
    { action: 'Updated Brand Guidelines', time: '4 hours ago', user: 'Mike Johnson' },
    { action: 'Added Competitive Analysis', time: '1 day ago', user: 'Lisa Wang' },
    { action: 'Created Project Brief', time: '2 days ago', user: 'David Smith' }
  ];

  const upcomingMilestones = [
    { milestone: 'Creative Direction Review', date: 'Dec 15, 2024', status: 'upcoming' },
    { milestone: 'Campaign Launch', date: 'Jan 8, 2025', status: 'planned' },
    { milestone: 'Analytics Review', date: 'Jan 22, 2025', status: 'planned' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaign Dashboard</h1>
        <p className="text-gray-600">Track your campaign progress and manage key activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            orange: 'bg-orange-100 text-orange-600',
            purple: 'bg-purple-100 text-purple-600'
          };
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Progress Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Campaign Progress</h2>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Phase Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Phase Breakdown</h3>
            {[
              { phase: 'Foundation', steps: '1-3', completed: currentStep > 3, current: currentStep <= 3 },
              { phase: 'Strategy', steps: '4-8', completed: currentStep > 8, current: currentStep > 3 && currentStep <= 8 },
              { phase: 'Planning', steps: '9-10', completed: currentStep > 10, current: currentStep > 8 && currentStep <= 10 },
              { phase: 'Creative', steps: '11-12', completed: currentStep > 12, current: currentStep > 10 && currentStep <= 12 },
              { phase: 'Content', steps: '13-15', completed: currentStep > 15, current: currentStep > 12 && currentStep <= 15 },
              { phase: 'Campaign', steps: '16-17', completed: currentStep > 17, current: currentStep > 15 && currentStep <= 17 },
              { phase: 'Launch', steps: '18-19', completed: currentStep > 19, current: currentStep > 17 && currentStep <= 19 },
              { phase: 'Analysis', steps: '20', completed: currentStep > 20, current: currentStep === 20 }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  phase.completed 
                    ? 'bg-green-50 border-green-200' 
                    : phase.current 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    phase.completed 
                      ? 'bg-green-500' 
                      : phase.current 
                        ? 'bg-blue-500' 
                        : 'bg-gray-300'
                  }`}></div>
                  <span className="font-medium text-gray-900">{phase.phase}</span>
                </div>
                <span className="text-sm text-gray-600">Steps {phase.steps}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Milestones */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Milestones</h3>
            <div className="space-y-3">
              {upcomingMilestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{milestone.milestone}</p>
                    <p className="text-xs text-gray-600">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;