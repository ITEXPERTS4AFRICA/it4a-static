import React, { useEffect, useRef, useState } from 'react';

type Locale = { code: string; label: string; emoji?: string };

interface LanguageSwitcherProps {
  currentLocale: string;
  locales?: Locale[];
  className?: string;
}

const defaultLocales: Locale[] = [
  { code: 'fr', label: 'FR', emoji: '🇫🇷' },
  { code: 'en', label: 'EN', emoji: '🇬🇧' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, locales = defaultLocales, className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  // Get current path and strip leading /en or /fr
  const { pathname, search, hash } = window.location;
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '/';
  const suffix = `${search || ''}${hash || ''}`;

  const otherLocales = locales.filter(l => l.code !== currentLocale);

  function buildHref(code: string) {
    const base = `/${code}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    return encodeURI(`${base}${suffix}`);
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        aria-haspopup="true"
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-white hover:text-blue-400 transition-colors duration-150"
      >
        <span aria-hidden="true">{locales.find(l => l.code === currentLocale)?.emoji}</span>
        <span className="font-medium">{locales.find(l => l.code === currentLocale)?.label}</span>
        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.656a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute right-0 mt-2 w-40 bg-neutral-900/80 rounded-md shadow-lg py-1 z-50">
          {otherLocales.map((loc) => (
            <a
              key={loc.code}
              role="menuitem"
              href={buildHref(loc.code)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>{loc.emoji}</span>
              <span>{loc.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
