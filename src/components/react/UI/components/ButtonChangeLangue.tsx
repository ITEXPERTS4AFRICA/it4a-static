import React, { useEffect, useState } from "react";
import frFlag from "/image/lang/france_flag.webp?url";
import enFlag from "/image/lang/usa_flag.webp?url";

type Locale = {
  code: "fr" | "en";
  label: string;
  Flag: string;
};

const locales: Locale[] = [
  { code: "fr", label: "FR", Flag: frFlag },
  { code: "en", label: "EN", Flag: enFlag },
];

export default function ButtonChangeLanguage(): JSX.Element {
  const [pathWithoutLocale, setPathWithoutLocale] = useState<string>("/");
  const [suffix, setSuffix] = useState<string>("");
  const [currentLocale, setCurrentLocale] = useState<Locale>(locales[0]);
  const [otherLocales, setOtherLocales] = useState<Locale[]>([]);

  useEffect(() => {
    const { pathname, search, hash } = window.location;
    const current = pathname.startsWith("/en")
      ? "en"
      : pathname.startsWith("/fr")
      ? "fr"
      : "fr";

    const pathNoLocale = pathname.replace(/^\/(en|fr)/, "") || "/";
    const suf = `${search || ""}${hash || ""}`;

    const active = locales.find((l) => l.code === current) ?? locales[0];
    const others = locales.filter((l) => l.code !== current);

    setPathWithoutLocale(pathNoLocale);
    setSuffix(suf);
    setCurrentLocale(active);
    setOtherLocales(others);
  }, []);

  function buildHref(code: string) {
    const base = `/${code}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    return encodeURI(`${base}${suffix}`);
  }

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-2">
      <span
        className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-white/80"
        aria-current="true"
      >
        <span aria-hidden="true">
          <img
            src={currentLocale.Flag}
            alt={currentLocale.label}
            className="w-4 h-4 object-cover rounded-full"
          />
        </span>
        <span className="font-medium">{currentLocale.label}</span>
      </span>

      {otherLocales.map((loc) => (
        <a
          key={loc.code}
          href={buildHref(loc.code)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-white hover:text-blue-400 transition-colors duration-150"
          aria-label={`Basculer en ${loc.code.toUpperCase()}`}
        >
          <span aria-hidden="true">
            <img src={loc.Flag} alt={loc.label} className="w-4 h-4 object-cover rounded-full" />
          </span>
          <span className="font-medium">{loc.label}</span>
        </a>
      ))}
    </nav>
  );
}
