'use client';

import { Info } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutScrollLink() {
  const t = useTranslations('Navigation');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a 
      href="#about"
      onClick={handleClick}
      className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-all cursor-pointer"
    >
      <Info className="w-4 h-4" />
      <span>{t('about')}</span>
    </a>
  );
}