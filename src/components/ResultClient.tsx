'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Download, Share2, RefreshCw, Copy, Twitter, MessageCircle } from 'lucide-react';
import { getResultData, generateShareText } from '@/utils/quiz';
import html2canvas from 'html2canvas';

interface ResultClientProps {
  locale: string;
  resultType: string;
}

export default function ResultClient({ locale, resultType }: ResultClientProps) {
  const t = useTranslations('Results');
  const tResultTypes = useTranslations('ResultTypes');
  const resultCardRef = useRef<HTMLDivElement>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const resultData = getResultData(resultType);

  const handleSaveImage = async () => {
    if (!resultCardRef.current) return;
    
    setIsGeneratingImage(true);
    try {
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: '#000000',
        scale: 2,
        useCORS: true,
      });
      
      if (typeof document !== 'undefined') {
        const link = document.createElement('a');
        link.download = `brainrot-result-${resultType}.png`;
        link.href = canvas.toDataURL();
        link.click();
      }
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleShare = (platform: string) => {
    const shareText = generateShareText(resultType, locale);
    const url = typeof window !== 'undefined' ? window.location.href : '';
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + url)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: t('shareTitle'),
            text: shareText,
            url: url,
          });
        }
        return;
    }
    
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  // 如果没有结果数据，显示错误状态而不是返回null（避免hydration错误）
  if (!resultData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">结果加载错误</h1>
          <p className="text-gray-300 mb-8">无法找到测试结果，请重新测试。</p>
          <Link
            href={`/${locale}/quiz`}
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            重新测试
          </Link>
        </div>
      </div>
    );
  }

  const resultName = tResultTypes(`${resultType}.name`);
  const resultDescription = tResultTypes(`${resultType}.description`);
  const resultTraits = tResultTypes(`${resultType}.traits`) as unknown as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Result Card */}
      <div 
        ref={resultCardRef}
        className="bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 rounded-3xl border-2 border-purple-400/50 p-8 sm:p-12 mb-8 text-center relative overflow-hidden shadow-2xl"
        style={{ 
          backgroundColor: '#1a1b3a',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-cyan-400 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white drop-shadow-lg">
            {t('subtitle')} <span className="text-yellow-300 drop-shadow-md">{resultName}</span>
          </h1>

          {/* Emoji with better background */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110"></div>
            <div className="relative text-8xl sm:text-9xl animate-float filter drop-shadow-lg">
              {resultData.emoji}
            </div>
          </div>

          {/* Description with better contrast */}
          <div className="bg-black/30 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white/20">
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
              {resultDescription}
            </p>
          </div>

          {/* Traits with improved styling */}
          {Array.isArray(resultTraits) && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {resultTraits.map((trait, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold border-2 border-white/50 shadow-lg"
                  style={{ 
                    color: resultData.color,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          )}

          {/* Hashtags with better visibility */}
          <div className="bg-black/20 rounded-lg p-3 inline-block border border-white/30">
            <div className="text-sm text-white font-medium drop-shadow-sm">
              {t('hashtags')}
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-4 right-4 text-xs text-white/60 font-medium">
            BrainrotTest.com
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={handleSaveImage}
          disabled={isGeneratingImage}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
        >
          {isGeneratingImage ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <Download className="w-5 h-5" />
          )}
          <span>{t('saveButton')}</span>
        </button>

        <button
          onClick={() => handleShare('twitter')}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <Twitter className="w-5 h-5" />
          <span>Twitter</span>
        </button>

        <button
          onClick={() => handleShare('whatsapp')}
          className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </button>

        <button
          onClick={handleCopyLink}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
            copySuccess 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          <Copy className="w-5 h-5" />
          <span>{copySuccess ? (locale === 'zh' ? '已复制!' : 'Copied!') : t('copyButton')}</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href={`/${locale}/quiz`}
          className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-5 h-5" />
          <span>{t('retakeButton')}</span>
        </Link>

        <Link
          href={`/${locale}`}
          className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <span>{locale === 'zh' ? '返回首页' : 'Back Home'}</span>
        </Link>
      </div>

      {/* Additional Results */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-heading font-bold mb-8 gradient-text">
          {locale === 'zh' ? '其他脑腐类型' : 'Other Brainrot Types'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(require('@/data/quiz.json').results)
            .filter(([key]) => key !== resultType)
            .slice(0, 4)
            .map(([key, data]: [string, any]) => (
              <Link
                key={key}
                href={`/${locale}/result/${key}`}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-2">{data.emoji}</div>
                <div className="text-sm font-medium text-gray-300">
                  {tResultTypes(`${key}.name`)}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}