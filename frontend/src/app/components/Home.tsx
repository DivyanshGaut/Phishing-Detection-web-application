import { Link } from 'react-router';
import { Shield, Search, Brain, BarChart3, Lock, Download, AlertTriangle, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
          <Shield className="w-4 h-4" />
          <span>AI-Powered Protection</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Stay Safe from Phishing Attacks
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Advanced artificial intelligence analyzes URLs in real-time to detect and prevent phishing attempts. 
          Protect yourself and your organization from cyber threats with our state-of-the-art detection system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/scanner">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
              <Search className="w-5 h-5 mr-2" />
              Scan URL Now
            </Button>
          </Link>
          <Link to="/education">
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50">
              <Brain className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
        <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="text-3xl font-bold text-blue-600 mb-1">98.5%</div>
          <div className="text-sm text-gray-600">Detection Rate</div>
        </Card>
        <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="text-3xl font-bold text-purple-600 mb-1">&lt;2s</div>
          <div className="text-sm text-gray-600">Analysis Time</div>
        </Card>
        <Card className="p-6 text-center bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
          <div className="text-3xl font-bold text-pink-600 mb-1">10k+</div>
          <div className="text-sm text-gray-600">URLs Scanned</div>
        </Card>
        <Card className="p-6 text-center bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <div className="text-3xl font-bold text-indigo-600 mb-1">24/7</div>
          <div className="text-sm text-gray-600">Protection</div>
        </Card>
      </div>
      
      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Comprehensive Security Features
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our advanced platform combines multiple detection techniques to provide the most accurate phishing detection available.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-blue-200 bg-white">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">URL Scanner</h3>
            <p className="text-gray-600 mb-4">
              Instantly analyze any URL with our powerful scanning engine. Get results in seconds with detailed breakdowns.
            </p>
            <div className="flex items-center text-blue-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Real-time Analysis
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-purple-200 bg-white">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">AI Prediction</h3>
            <p className="text-gray-600 mb-4">
              Machine learning algorithms trained on millions of phishing attempts to accurately detect threats.
            </p>
            <div className="flex items-center text-purple-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              98.5% Accuracy
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-pink-200 bg-white">
            <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Feature Explanation</h3>
            <p className="text-gray-600 mb-4">
              Understand exactly why a URL is flagged. Detailed analysis of each security indicator and risk factor.
            </p>
            <div className="flex items-center text-pink-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Transparent Results
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-indigo-200 bg-white">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Risk Score</h3>
            <p className="text-gray-600 mb-4">
              Clear risk assessment from 0-100 with confidence levels. Make informed decisions about website safety.
            </p>
            <div className="flex items-center text-indigo-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Easy to Understand
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-green-200 bg-white">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Domain & SSL Check</h3>
            <p className="text-gray-600 mb-4">
              Verify domain age, registrar information, and SSL certificate validity to ensure authenticity.
            </p>
            <div className="flex items-center text-green-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Complete Verification
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all border-2 hover:border-orange-200 bg-white">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Report Download</h3>
            <p className="text-gray-600 mb-4">
              Export detailed reports for documentation, compliance, or sharing with security teams.
            </p>
            <div className="flex items-center text-orange-600 font-medium text-sm">
              <CheckCircle2 className="w-4 h-4 mr-1" />
              Professional Reports
            </div>
          </Card>
        </div>
      </div>
      
      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
        <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-3xl font-bold mb-4">
          Don't Fall Victim to Phishing Attacks
        </h2>
        <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
          Cybercriminals are getting smarter every day. Protect yourself with AI-powered detection 
          that identifies threats before they can harm you.
        </p>
        <Link to="/scanner">
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg border-0 shadow-lg">
            Start Scanning Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </Card>
    </div>
  );
}
