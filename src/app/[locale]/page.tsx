import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Brain, Sparkles, Share2, Target, Heart, Users } from 'lucide-react';

type Props = {
  params: { locale: string };
};

// 启用 ISR - 每小时重新验证
export const revalidate = 3600;

export default function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  // 只获取需要的翻译key，减少传输，提升brainrot test关键词密度
  const heroTitle = locale === 'zh' 
    ? '免费脑腐测试 - 发现你的脑腐类型' 
    : 'Free Brainrot Test - Discover Your Brainrot Type';
  const heroSubtitle = locale === 'zh' 
    ? '参加我们的免费脑腐测试，发现你独特的脑腐类型！这个脑腐测试能帮你了解自己的网络行为模式和数字习惯。立即开始脑腐测试，揭示你的脑腐人格！'
    : 'Take our free brainrot test to discover your unique brainrot type! This brainrot test helps you understand your online behavior patterns and digital habits. Start the brainrot test now and reveal your brainrot personality!';
  const startTestText = locale === 'zh' ? '开始脑腐测试' : 'Start Brainrot Test';
  const learnMoreText = locale === 'zh' ? '了解更多' : 'Learn More';
  const aboutTitle = locale === 'zh' ? '什么是脑腐测试？' : 'What is Brainrot Test?';
  const aboutSubtitle = locale === 'zh' 
    ? '通过我们全面的脑腐测试了解你的网络痴迷人格类型，这个免费脑腐测试基于科学分析'
    : 'Understand your internet obsession personality through our comprehensive brainrot test - this free brainrot test is based on scientific analysis';

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 animate-float">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6">
              <span className="gradient-text">{heroTitle}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {heroSubtitle}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href={`/${locale}/quiz`}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 btn-hover"
            >
              <Brain className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              {startTestText}
              <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 mx-auto group-hover:bg-purple-500/30 transition-colors">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">
                {locale === 'zh' ? '精准分析' : 'Accurate Analysis'}
              </h3>
              <p className="text-gray-400 text-sm">
                {locale === 'zh' ? '基于AI的数字行为模式分析' : 'AI-powered analysis of your digital obsession patterns'}
              </p>
            </div>
            
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-full mb-4 mx-auto group-hover:bg-pink-500/30 transition-colors">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-pink-300">
                {locale === 'zh' ? '即时结果' : 'Instant Results'}
              </h3>
              <p className="text-gray-400 text-sm">
                {locale === 'zh' ? '完成脑腐测试后立即获得结果' : 'Get your brainrot test results immediately after completing the quiz'}
              </p>
            </div>
            
            <div className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 mx-auto group-hover:bg-blue-500/30 transition-colors">
                <Share2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-300">
                {locale === 'zh' ? '可分享结果' : 'Shareable Results'}
              </h3>
              <p className="text-gray-400 text-sm">
                {locale === 'zh' ? '下载并分享你的个性化脑腐测试结果卡片' : 'Download and share your personalized brainrot test result cards'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 gradient-text">
            {locale === 'zh' ? '发现你的网络沉迷类型' : 'Discover Your Digital Obsession Type'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {locale === 'zh' 
              ? '找出哪种脑腐类型最符合你的网络行为。我们的脑腐测试分析你的数字习惯并提供准确的结果。'
              : 'Find out which brainrot type best matches your online behavior. Our brainrot test analyzes your digital habits and provides accurate results.'
            }
          </p>
          
          {/* Result Types Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { emoji: '🚨', name: locale === 'zh' ? '破防型' : 'Breakdown', color: 'text-red-400' },
              { emoji: '🔁', name: locale === 'zh' ? '循环型' : 'Loop', color: 'text-orange-400' },
              { emoji: '📖', name: locale === 'zh' ? '同人型' : 'Fanfic', color: 'text-purple-400' },
              { emoji: '🧠', name: locale === 'zh' ? '学术型' : 'Academic', color: 'text-blue-400' },
            ].map((type, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                <div className="text-2xl mb-2">{type.emoji}</div>
                <div className={`text-sm font-medium ${type.color}`}>{type.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          {/* About Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 animate-float">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 gradient-text">
              {aboutTitle}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
              {aboutSubtitle}
            </p>
          </div>

          {/* Definition */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8 mb-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              {locale === 'zh' 
                ? '脑腐指的是一个人对网络内容、虚拟角色或粉丝圈如此深度痴迷，以至于显著影响其日常思维和行为的现象。我们的脑腐测试帮助你了解自己的网络行为模式。'
                : 'Brainrot refers to the phenomenon where someone becomes so deeply obsessed with online content, fictional characters, or fandoms that it significantly impacts their daily thoughts and behavior. Our brainrot test helps you understand your online behavior patterns.'
              }
            </p>
          </div>

          {/* Sections */}
          <div className="grid md:grid-cols-1 gap-8 mb-16">
            {/* Origins */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mr-4">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-blue-300">
                  {locale === 'zh' ? '起源与发展' : 'Origins & Development'}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {locale === 'zh' 
                  ? '脑腐文化起源于互联网社区，特别是粉丝群体和在线论坛。这个免费脑腐测试基于对数字行为模式的深入研究。'
                  : 'Brainrot culture originated from internet communities, especially fan groups and online forums. This free brainrot test is based on in-depth research of digital behavior patterns.'
                }
              </p>
            </div>

            {/* Types */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-purple-300">
                  {locale === 'zh' ? '脑腐类型' : 'Brainrot Types'}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                {locale === 'zh' 
                  ? '我们的脑腐测试识别9种不同的脑腐类型，每种都有独特的特征和行为模式。'
                  : 'Our brainrot test identifies 9 different brainrot types, each with unique characteristics and behavior patterns.'
                }
              </p>
              
              {/* Result Types Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { key: 'breakdown', emoji: '🚨', color: 'text-red-400' },
                  { key: 'loop', emoji: '🔁', color: 'text-orange-400' },
                  { key: 'fanfic', emoji: '📖', color: 'text-purple-400' },
                  { key: 'academic', emoji: '🧠', color: 'text-blue-400' },
                  { key: 'wedding', emoji: '💍', color: 'text-pink-400' },
                  { key: 'submission', emoji: '🧎‍♀️', color: 'text-indigo-400' },
                  { key: 'yandere', emoji: '🎭', color: 'text-red-500' },
                  { key: 'chaotic', emoji: '🐇', color: 'text-green-400' },
                  { key: 'extreme', emoji: '🔥', color: 'text-red-600' },
                ].map((type) => (
                  <div key={type.key} className="p-4 bg-white/5 rounded-lg text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-2">{type.emoji}</div>
                    <div className={`text-sm font-medium ${type.color}`}>
                      {locale === 'zh' ? (
                        type.key === 'breakdown' ? '破防型' :
                        type.key === 'loop' ? '循环型' :
                        type.key === 'fanfic' ? '同人型' :
                        type.key === 'academic' ? '学术型' :
                        type.key === 'wedding' ? '婚礼型' :
                        type.key === 'submission' ? '服从型' :
                        type.key === 'yandere' ? '病娇型' :
                        type.key === 'chaotic' ? '混乱型' :
                        '极致型'
                      ) : (
                        type.key.charAt(0).toUpperCase() + type.key.slice(1)
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-green-500/20 p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mr-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-green-300">
                  {locale === 'zh' ? '社区影响' : 'Community Impact'}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {locale === 'zh' 
                  ? '脑腐现象在全球范围内影响着数百万人。通过我们的脑腐测试，你可以更好地理解自己的数字行为并与同类型的人建立联系。'
                  : 'The brainrot phenomenon affects millions of people worldwide. Through our brainrot test, you can better understand your digital behavior and connect with others of the same type.'
                }
              </p>
            </div>
          </div>

          {/* Test Purpose */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 p-8 mb-12">
            <h3 className="text-2xl font-heading font-bold mb-4 text-center gradient-text">
              {locale === 'zh' ? '测试目的' : 'Purpose of This Test'}
            </h3>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              {locale === 'zh' 
                ? '这个脑腐测试的目的是帮助你了解自己的网络行为模式，发现你的数字人格类型，并为你提供个性化的见解。'
                : 'This brainrot test aims to help you understand your online behavior patterns, discover your digital personality type, and provide personalized insights.'
              }
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href={`/${locale}/quiz`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Brain className="w-6 h-6 mr-2" />
              {startTestText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}