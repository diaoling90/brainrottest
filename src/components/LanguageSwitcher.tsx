'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="bg-transparent border border-purple-500/30 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="en" className="bg-black">English</option>
        <option value="zh" className="bg-black">中文</option>
      </select>
    </div>
  );
}