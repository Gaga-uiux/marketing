import React, { useState } from 'react';
import { Megaphone, Users, FileText, Calendar, Star, ExternalLink, Plus, Filter, Search } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  category: 'journalist' | 'influencer' | 'publisher' | 'blogger';
  reach: string;
  lastContact: string;
  status: 'active' | 'pending' | 'inactive';
  rating: number;
}

interface Campaign {
  id: number;
  title: string;
  type: 'press-release' | 'media-kit' | 'influencer' | 'advertorial';
  status: 'draft' | 'sent' | 'published' | 'declined';
  contacts: number[];
  sentDate?: string;
  publishDate?: string;
  reach: string;
  engagement: string;
}

const PRManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contacts' | 'campaigns' | 'content'>('contacts');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const [contacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Tech Reporter',
      company: 'TechCrunch',
      email: 'sarah.j@techcrunch.com',
      phone: '+1-555-0123',
      category: 'journalist',
      reach: '2.5M',
      lastContact: '2024-01-15',
      status: 'active',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Influencer',
      company: '@mikechentech',
      email: 'mike@mikechentech.com',
      phone: '+1-555-0124',
      category: 'influencer',
      reach: '850K',
      lastContact: '2024-01-10',
      status: 'active',
      rating: 4
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      role: 'Editor',
      company: 'Business Insider',
      email: 'l.rodriguez@businessinsider.com',
      phone: '+1-555-0125',
      category: 'publisher',
      reach: '5.2M',
      lastContact: '2024-01-08',
      status: 'pending',
      rating: 5
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Content Creator',
      company: 'TechBlog Daily',
      email: 'david@techblogdaily.com',
      phone: '+1-555-0126',
      category: 'blogger',
      reach: '320K',
      lastContact: '2024-01-05',
      status: 'active',
      rating: 3
    }
  ]);

  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      title: 'Product Launch Press Release',
      type: 'press-release',
      status: 'sent',
      contacts: [1, 3],
      sentDate: '2024-01-15',
      reach: '7.7M',
      engagement: '12.5%'
    },
    {
      id: 2,
      title: 'Influencer Partnership Campaign',
      type: 'influencer',
      status: 'published',
      contacts: [2],
      sentDate: '2024-01-10',
      publishDate: '2024-01-12',
      reach: '850K',
      engagement: '8.2%'
    },
    {
      id: 3,
      title: 'Industry Thought Leadership',
      type: 'advertorial',
      status: 'draft',
      contacts: [4],
      reach: '320K',
      engagement: 'N/A'
    }
  ]);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || contact.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'journalist': return '📰';
      case 'influencer': return '⭐';
      case 'publisher': return '📖';
      case 'blogger': return '✍️';
      default: return '👤';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-orange-100 p-3 rounded-lg">
            <Megaphone className="h-8 w-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">PR & Media Management</h1>
            <p className="text-gray-600">Manage relationships with journalists, influencers, and publishers</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'contacts', label: 'Media Contacts', icon: Users },
            { id: 'campaigns', label: 'PR Campaigns', icon: Megaphone },
            { id: 'content', label: 'Press Materials', icon: FileText }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contacts Tab */}
      {activeTab === 'contacts' && (
        <div>
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="journalist">Journalists</option>
              <option value="influencer">Influencers</option>
              <option value="publisher">Publishers</option>
              <option value="blogger">Bloggers</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Add Contact</span>
            </button>
          </div>

          {/* Contacts Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredContacts.map(contact => (
              <div key={contact.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-xl">
                      {getCategoryIcon(contact.category)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600">{contact.role}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Company:</span>
                    <span className="text-sm font-medium text-gray-900">{contact.company}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reach:</span>
                    <span className="text-sm font-medium text-gray-900">{contact.reach}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Rating:</span>
                    <div className="flex space-x-1">
                      {renderStars(contact.rating)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Contact:</span>
                    <span className="text-sm text-gray-900">{contact.lastContact}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors">
                    Contact
                  </button>
                  <button className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Campaigns Tab */}
      {activeTab === 'campaigns' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">PR Campaigns</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>New Campaign</span>
            </button>
          </div>

          <div className="space-y-4">
            {campaigns.map(campaign => (
              <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 capitalize">{campaign.type.replace('-', ' ')}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Contacts</div>
                    <div className="text-sm font-medium text-gray-900">{campaign.contacts.length}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Reach</div>
                    <div className="text-sm font-medium text-gray-900">{campaign.reach}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Engagement</div>
                    <div className="text-sm font-medium text-gray-900">{campaign.engagement}</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Sent Date</div>
                    <div className="text-sm font-medium text-gray-900">{campaign.sentDate || 'Not sent'}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {campaign.contacts.slice(0, 3).map(contactId => {
                      const contact = contacts.find(c => c.id === contactId);
                      return contact ? (
                        <div key={contactId} className="flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded-full text-xs">
                          <span>{getCategoryIcon(contact.category)}</span>
                          <span>{contact.name}</span>
                        </div>
                      ) : null;
                    })}
                    {campaign.contacts.length > 3 && (
                      <div className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        +{campaign.contacts.length - 3} more
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Tab */}
      {activeTab === 'content' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Press Materials</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="h-4 w-4" />
              <span>Create Material</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Company Press Kit', type: 'Media Kit', updated: '2024-01-15', downloads: 45 },
              { title: 'Product Launch Release', type: 'Press Release', updated: '2024-01-12', downloads: 23 },
              { title: 'Executive Bios', type: 'Biography', updated: '2024-01-10', downloads: 18 },
              { title: 'High-Res Images', type: 'Media Assets', updated: '2024-01-08', downloads: 67 },
              { title: 'Fact Sheet', type: 'Information', updated: '2024-01-05', downloads: 34 },
              { title: 'Awards & Recognition', type: 'Achievements', updated: '2024-01-03', downloads: 12 }
            ].map((material, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{material.title}</h3>
                      <p className="text-sm text-gray-600">{material.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last Updated:</span>
                    <span className="text-sm text-gray-900">{material.updated}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Downloads:</span>
                    <span className="text-sm font-medium text-gray-900">{material.downloads}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors">
                    Download
                  </button>
                  <button className="px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PRManagement;