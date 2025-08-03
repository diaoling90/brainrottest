import Link from 'next/link';
import { Brain } from 'lucide-react';

export default function RootPage() {
  // 默认显示英文内容，不使用翻译系统减少加载

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-xl font-heading font-bold gradient-text"
            >
              <Brain className="w-6 h-6" />
              <span>BrainrotTest</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/quiz"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Take Quiz
              </Link>
              <Link 
                href="/en"
                className="text-sm text-gray-400 hover:text-white"
              >
                EN
              </Link>
              <Link 
                href="/zh"
                className="text-sm text-gray-400 hover:text-white"
              >
                中文
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative px-4 py-20 sm:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-8 animate-float">
              <Brain className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
              Free <span className="gradient-text">Brainrot Test</span> - Discover Your Brainrot Type
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Take our free brainrot test to discover your unique brainrot type! This brainrot test helps you understand your online behavior patterns and digital habits. Start the brainrot test now and reveal your brainrot personality!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                href="/quiz"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <Brain className="inline w-6 h-6 mr-2" />
                Start Brainrot Test
              </Link>
              
              <Link
                href="#about"
                className="px-8 py-4 border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white text-lg font-medium rounded-full transition-all duration-300 hover:bg-purple-500/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 py-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
                What is Brainrot Test?
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
                Understand your internet obsession personality through our comprehensive brainrot test - this free brainrot test is based on scientific analysis
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <Brain className="w-6 h-6 mr-2" />
                Take the Brainrot Test
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}