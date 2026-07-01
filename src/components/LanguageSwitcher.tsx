import React, {memo} from 'react';

import {useLanguage} from '../context/LanguageContext';

const LanguageSwitcher: React.FC = memo(() => {
  const {language, toggleLanguage} = useLanguage();

  return (
    <button
      aria-label="Switch Language"
      className="rounded-full bg-stone-800 px-3 py-1 text-sm font-semibold text-white shadow-md ring-1 ring-white/20 transition-all duration-300 hover:bg-orange-500 hover:ring-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      onClick={toggleLanguage}>
      {language === 'en' ? '🇯🇵 日本語' : '🇺🇸 English'}
    </button>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher;
