import React, { useState } from 'react';
import { Lightbulb, Sparkles, RefreshCw, Copy, Heart, Share2, Download, Zap } from 'lucide-react';

interface AIExecutionIdeasProps {
  brandData?: any;
  productData?: any;
}

const AIExecutionIdeas: React.FC<AIExecutionIdeasProps> = ({ brandData, productData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const [likedIdeas, setLikedIdeas] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Ideas', icon: Sparkles },
    { id: 'content', name: 'Content Marketing', icon: Lightbulb },
    { id: 'social', name: 'Social Media', icon: Share2 },
    { id: 'digital', name: 'Digital Campaigns', icon: Zap },
    { id: 'events', name: 'Events & PR', icon: Heart }
  ];

  const [ideas] = useState([
    {
      id: 1,
      category: 'content',
      title: 'Interactive Product Demo Series',
      description: 'Create a series of interactive video demos showcasing your product features with real-time user engagement and Q&A sessions.',
      tactics: [
        'Live streaming product walkthroughs',
        'Interactive polls during demos',
        'User-generated content campaigns',
        'Behind-the-scenes development stories'
      ],
      estimatedReach: '50K-100K',
      difficulty: 'Medium',
      timeline: '2-3 weeks',
      budget: '$5,000-$10,000',
      kpis: ['Engagement Rate', 'Demo Completion Rate', 'Lead Generation']
    },
    {
      id: 2,
      category: 'social',
      title: 'Viral Challenge Campaign',
      description: 'Launch a branded challenge that encourages user participation and showcases your product benefits in a fun, shareable way.',
      tactics: [
        'Hashtag challenge creation',
        'Influencer partnerships',
        'User-generated content rewards',
        'Cross-platform promotion'
      ],
      estimatedReach: '100K-500K',
      difficulty: 'High',
      timeline: '4-6 weeks',
      budget: '$15,000-$30,000',
      kpis: ['Hashtag Usage', 'User Participation', 'Brand Mentions']
    },
    {
      id: 3,
      category: 'digital',
      title: 'Personalized Email Journey',
      description: 'Develop an AI-powered email sequence that adapts content based on user behavior and preferences for maximum engagement.',
      tactics: [
        'Behavioral trigger emails',
        'Dynamic content personalization',
        'A/B testing optimization',
        'Multi-channel integration'
      ],
      estimatedReach: '10K-25K',
      difficulty: 'Medium',
      timeline: '3-4 weeks',
      budget: '$3,000-$8,000',
      kpis: ['Open Rate', 'Click-through Rate', 'Conversion Rate']
    },
    {
      id: 4,
      category: 'events',
      title: 'Virtual Launch Event',
      description: 'Host an immersive virtual launch event with interactive elements, guest speakers, and exclusive product reveals.',
      tactics: [
        'Virtual event platform setup',
        'Guest speaker coordination',
        'Interactive breakout sessions',
        'Exclusive product previews'
      ],
      estimatedReach: '5K-15K',
      difficulty: 'High',
      timeline: '6-8 weeks',
      budget: '$20,000-$50,000',
      kpis: ['Attendance Rate', 'Engagement Time', 'Post-event Actions']
    },
    {
      id: 5,
      category: 'content',
      title: 'Educational Webinar Series',
      description: 'Create valuable educational content that positions your brand as a thought leader while subtly showcasing product benefits.',
      tactics: [
        'Expert guest interviews',
        'Industry trend discussions',
        'Case study presentations',
        'Interactive Q&A sessions'
      ],
      estimatedReach: '15K-30K',
      difficulty: 'Medium',
      timeline: '4-5 weeks',
      budget: '$8,000-$15,000',
      kpis: ['Webinar Attendance', 'Lead Quality', 'Content Engagement']
    },
    {
      id: 6,
      category: 'digital',
      title: 'Gamified Product Experience',
      description: 'Transform your product trial into a game-like experience with achievements, rewards, and social sharing elements.',
      tactics: [
        'Achievement system design',
        'Progress tracking gamification',
        'Social sharing rewards',
        'Leaderboard competitions'
      ],
      estimatedReach: '25K-75K',
      difficulty: 'High',
      timeline: '8-10 weeks',
      budget: '$25,000-$40,000',
      kpis: ['User Engagement', 'Trial Completion', 'Social Shares']
    }
  ]);

  const filteredIdeas = selectedCategory === 'all' 
    ? ideas 
    : ideas.filter(idea => idea.category === selectedCategory);

  const generateNewIdeas = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const toggleLike = (ideaId: number) => {
    setLikedIdeas(prev => 
      prev.includes(ideaId) 
        ? prev.filter(id => id !== ideaId)
        : [...prev, ideaId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Execution Ideas</h1>
              <p className="text-gray-600">AI-powered campaign ideas tailored to your brand and goals</p>
            </div>
          </div>
          <button
            onClick={generateNewIdeas}
            disabled={isGenerating}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Generating...' : 'Generate New Ideas'}</span>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredIdeas.map(idea => (
          <div key={idea.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(idea.difficulty)}`}>
                    {idea.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{idea.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{idea.title}</h3>
                <p className="text-gray-600 mb-4">{idea.description}</p>
              </div>
              <button
                onClick={() => toggleLike(idea.id)}
                className={`p-2 rounded-lg transition-colors ${
                  likedIdeas.includes(idea.id)
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                <Heart className={`h-4 w-4 ${likedIdeas.includes(idea.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Tactics */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Tactics:</h4>
              <div className="space-y-1">
                {idea.tactics.map((tactic, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Estimated Reach</div>
                <div className="text-sm font-medium text-gray-900">{idea.estimatedReach}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Timeline</div>
                <div className="text-sm font-medium text-gray-900">{idea.timeline}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Budget Range</div>
                <div className="text-sm font-medium text-gray-900">{idea.budget}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Key KPIs</div>
                <div className="text-xs text-gray-700">{idea.kpis.join(', ')}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="h-3 w-3" />
                  <span>Share</span>
                </button>
              </div>
              <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                Use This Idea
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Trending Strategy</h4>
            <p className="text-sm text-gray-600">Interactive content is showing 40% higher engagement rates this quarter.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Budget Optimization</h4>
            <p className="text-sm text-gray-600">Consider allocating 60% to digital channels for maximum ROI in your industry.</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Timing Recommendation</h4>
            <p className="text-sm text-gray-600">Launch campaigns on Tuesday-Thursday for 23% better performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIExecutionIdeas;