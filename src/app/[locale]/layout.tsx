import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Analytics from '@/components/Analytics';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  
  const messages = await getMessages();
  const seoData = (messages as any).SEO?.homepage;
  
  const seoTitle = locale === 'zh' 
    ? '脑腐测试 - 你的脑腐类型是什么？| 免费测试'
    : 'Brainrot Test - What\'s Your Brainrot Type? | Free Quiz';
  
  const seoDescription = locale === 'zh'
    ? '免费脑腐测试帮你发现独特的脑腐类型！这个病毒式人格测试揭示你的网络行为模式和数字习惯。'
    : 'Free brainrot test helps you discover your unique brainrot type! This viral personality quiz reveals your internet behavior patterns and digital habits.';

  return {
    title: {
      default: seoTitle,
      template: `%s | ${seoTitle}`,
    },
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      locale: locale,
      url: locale === 'en' ? 'https://brainrottest.com/' : `https://brainrottest.com/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
    },
    metadataBase: new URL('https://brainrottest.com'),
    alternates: {
      canonical: locale === 'en' ? 'https://brainrottest.com/' : `https://brainrottest.com/${locale}`,
      languages: {
        'en': 'https://brainrottest.com/',
        'zh': 'https://brainrottest.com/zh',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/brain-icon.png',
      apple: '/brain-icon.png',
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black">
        <Navigation locale={locale} />
        <main>
          {children}
        </main>
        <Analytics />
      </div>
    </NextIntlClientProvider>
  );
}