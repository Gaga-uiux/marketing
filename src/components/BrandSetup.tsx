import React, { useState } from 'react';
import { Building2, Save, Upload, Eye, EyeOff, Palette, Globe, Users, Target } from 'lucide-react';

interface BrandSetupProps {
  onSave: (data: any) => void;
}

const BrandSetup: React.FC<BrandSetupProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    foundedYear: '',
    headquarters: '',
    website: '',
    mission: '',
    vision: '',
    values: '',
    targetAudience: '',
    brandPersonality: '',
    brandVoice: '',
    primaryColor: '#1e3a8a',
    secondaryColor: '#0d9488',
    logo: '',
    tagline: '',
    uniqueSellingProposition: '',
    competitiveAdvantage: '',
    brandStory: '',
    socialMediaHandles: {
      twitter: '',
      linkedin: '',
      instagram: '',
      facebook: ''
    }
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as any,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Brand & Company Setup</h1>
              <p className="text-gray-600">Establish your brand foundation and company identity</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save Brand Profile</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Company Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Founded Year</label>
                <input
                  type="number"
                  value={formData.foundedYear}
                  onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2024"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourcompany.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Headquarters Location</label>
              <input
                type="text"
                value={formData.headquarters}
                onChange={(e) => handleInputChange('headquarters', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="City, Country"
              />
            </div>
          </div>

          {/* Brand Identity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Brand Identity</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                <textarea
                  value={formData.mission}
                  onChange={(e) => handleInputChange('mission', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What is your company's purpose and reason for existence?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vision Statement</label>
                <textarea
                  value={formData.vision}
                  onChange={(e) => handleInputChange('vision', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Where do you see your company in the future?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Core Values</label>
                <textarea
                  value={formData.values}
                  onChange={(e) => handleInputChange('values', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your company's core values (one per line)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleInputChange('tagline', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your memorable brand tagline"
                />
              </div>
            </div>
          </div>

          {/* Brand Colors & Visual Identity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Visual Identity</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Brand Color</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={formData.primaryColor}
                    onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.primaryColor}
                    onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Brand Color</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={formData.secondaryColor}
                    onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                    className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.secondaryColor}
                    onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Logo Upload</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload logo or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG, SVG up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Social Media Presence</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Twitter Handle</label>
                <input
                  type="text"
                  value={formData.socialMediaHandles.twitter}
                  onChange={(e) => handleInputChange('socialMediaHandles.twitter', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@yourcompany"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="text"
                  value={formData.socialMediaHandles.linkedin}
                  onChange={(e) => handleInputChange('socialMediaHandles.linkedin', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="linkedin.com/company/yourcompany"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                <input
                  type="text"
                  value={formData.socialMediaHandles.instagram}
                  onChange={(e) => handleInputChange('socialMediaHandles.instagram', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="@yourcompany"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                <input
                  type="text"
                  value={formData.socialMediaHandles.facebook}
                  onChange={(e) => handleInputChange('socialMediaHandles.facebook', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="facebook.com/yourcompany"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          {showPreview && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Brand Preview</h3>
              <div className="space-y-4">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: formData.primaryColor + '10' }}>
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: formData.primaryColor }}>
                    {formData.companyName.charAt(0) || 'C'}
                  </div>
                  <h4 className="font-bold text-gray-900">{formData.companyName || 'Company Name'}</h4>
                  <p className="text-sm text-gray-600">{formData.tagline || 'Your tagline here'}</p>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p><strong>Industry:</strong> {formData.industry || 'Not specified'}</p>
                  <p><strong>Founded:</strong> {formData.foundedYear || 'Not specified'}</p>
                  <p><strong>Location:</strong> {formData.headquarters || 'Not specified'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Setup Progress</h3>
            <div className="space-y-3">
              {[
                { label: 'Company Info', completed: !!(formData.companyName && formData.industry) },
                { label: 'Brand Identity', completed: !!(formData.mission && formData.vision) },
                { label: 'Visual Identity', completed: !!(formData.primaryColor && formData.secondaryColor) },
                { label: 'Social Media', completed: !!(formData.socialMediaHandles.twitter || formData.socialMediaHandles.linkedin) }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.label}</span>
                  <div className={`w-4 h-4 rounded-full ${item.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Setup Tips</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• Keep your mission statement clear and concise</li>
              <li>• Choose colors that reflect your brand personality</li>
              <li>• Ensure your tagline is memorable and unique</li>
              <li>• Complete all sections for best results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSetup;