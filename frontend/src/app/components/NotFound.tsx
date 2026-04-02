import { Link } from 'react-router';
import { AlertTriangle, Home, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-2xl mx-auto p-12 text-center">
        <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to safety!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Link to="/scanner">
            <Button variant="outline">
              <Search className="w-4 h-4 mr-2" />
              Scan a URL
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
