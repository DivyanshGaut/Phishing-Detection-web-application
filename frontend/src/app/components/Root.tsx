import { Outlet, Link, useLocation } from 'react-router';
import { Shield, Search, History, BookOpen, Github, Mail } from 'lucide-react';

export function Root() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PhishGuard AI
                </h1>
                <p className="text-xs text-gray-500">Advanced Threat Detection</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/') && location.pathname === '/'
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/scanner"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/scanner')
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Scanner</span>
              </Link>
              <Link
                to="/history"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/history')
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <History className="w-4 h-4" />
                <span>History</span>
              </Link>
              <Link
                to="/education"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/education')
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Learn</span>
              </Link>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center gap-1 mt-3 overflow-x-auto">
            <Link
              to="/"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/scanner"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                isActive('/scanner')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Scanner</span>
            </Link>
            <Link
              to="/history"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                isActive('/history')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <History className="w-4 h-4" />
              <span>History</span>
            </Link>
            <Link
              to="/education"
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                isActive('/education')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Learn</span>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">PhishGuard AI</span>
              </div>
              <p className="text-sm text-gray-600">
                Advanced AI-powered phishing detection to keep you safe online. 
                Protect yourself from malicious websites and cyber threats.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
                <li><Link to="/scanner" className="text-gray-600 hover:text-blue-600">URL Scanner</Link></li>
                <li><Link to="/education" className="text-gray-600 hover:text-blue-600">Security Education</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Connect</h3>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a href="mailto:support@example.com" 
                   className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Mail className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
            <p>© 2026 PhishGuard AI. All rights reserved. | Made with ❤️ for online safety</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
