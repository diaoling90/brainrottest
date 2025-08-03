import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Home, Brain } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import AboutScrollLink from './AboutScrollLink';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations('Navigation');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href={`/${locale}`}
            className="flex items-center space-x-2 text-xl font-heading font-bold gradient-text"
          >
            <Brain className="w-6 h-6" />
            <span>BrainrotTest</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href={`/${locale}`}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>{t('home')}</span>
            </Link>
            <Link 
              href={`/${locale}/quiz`}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all"
            >
              <Brain className="w-4 h-4" />
              <span>{t('quiz')}</span>
            </Link>
            <AboutScrollLink />
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}