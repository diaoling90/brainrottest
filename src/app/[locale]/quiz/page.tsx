import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import QuizClient from '@/components/QuizClient';

type Props = {
  params: { locale: string };
};

// 启用 ISR - 每小时重新验证
export const revalidate = 3600;

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  // This would normally come from your translation files
  const isZh = locale === 'zh';
  
  return {
    title: isZh ? '开始脑腐测试 - 免费人格测试' : 'Start Brainrot Test - Free Personality Quiz',
    description: isZh 
      ? '开始我们的免费脑腐测试！回答10个问题，发现你的脑腐类型。这个脑腐测试能揭示你的网络行为模式。'
      : 'Start our free brainrot test! Answer 10 questions to discover your brainrot type. This brainrot test reveals your internet behavior patterns.',
    openGraph: {
      title: isZh ? '脑腐测试' : 'Brainrot Test',
      description: isZh ? '发现你的脑腐类型' : 'Discover your brainrot type',
      type: 'website',
    },
  };
}

export default function QuizPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const t = useTranslations('Quiz');

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4 gradient-text">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Quiz Component */}
        <QuizClient locale={locale} />
      </div>
    </div>
  );
}