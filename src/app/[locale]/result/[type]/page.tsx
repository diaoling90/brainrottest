import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResultClient from '@/components/ResultClient';
import quizData from '@/data/quiz.json';

type Props = {
  params: { locale: string; type: string };
};

export async function generateStaticParams() {
  const resultTypes = Object.keys(quizData.results);
  const locales = ['en', 'zh'];
  
  const params = [];
  for (const locale of locales) {
    for (const type of resultTypes) {
      params.push({ locale, type });
    }
  }
  
  return params;
}

export async function generateMetadata({ params: { locale, type } }: Props): Promise<Metadata> {
  const resultData = quizData.results[type as keyof typeof quizData.results];
  if (!resultData) return {};
  
  const isZh = locale === 'zh';
  const emoji = resultData.emoji;
  
  const title = isZh 
    ? `${emoji} ${type}型脑腐 - 脑腐测试结果`
    : `${emoji} ${type} Brainrot - Your Brainrot Test Result`;
    
  const description = isZh
    ? `我的脑腐测试结果是${type}型！来看看你是哪种脑腐类型。`
    : `My brainrot test result is ${type} type! Find out what type of brainrot you have.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: `/og-image-${type}.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/og-image-${type}.png`],
    },
    metadataBase: new URL('https://brainrottest.com'),
    alternates: {
      canonical: locale === 'en' 
        ? `https://brainrottest.com/result/${type}` 
        : `https://brainrottest.com/${locale}/result/${type}`,
    },
  };
}

export default function ResultPage({ params: { locale, type } }: Props) {
  unstable_setRequestLocale(locale);
  
  const resultData = quizData.results[type as keyof typeof quizData.results];
  if (!resultData) {
    notFound();
  }
  
  return (
    <div className="min-h-screen pt-16">
      <ResultClient locale={locale} resultType={type} />
    </div>
  );
}