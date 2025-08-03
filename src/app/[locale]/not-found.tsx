import Link from 'next/link';
import { Brain, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 animate-float">
          <Brain className="w-8 h-8 text-white" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 gradient-text">
          404 - Page Not Found
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this page got lost in the brainrot void. Let's get you back to the test!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/en"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <Link
            href="/en/quiz"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Brain className="w-5 h-5 mr-2" />
            Take the Test
          </Link>
        </div>
      </div>
    </div>
  );
}