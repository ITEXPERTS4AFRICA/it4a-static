import React from "react";
import { useEffect, useState } from "react";

interface LangLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string|any;
  children: React.ReactNode;
  className?: string;
  langPath?:string;
}

const LangLink: React.FC<LangLinkProps> = ({ href, children, langPath='fr' , className, ...props }) => {
  const [lang, setLang] = useState(langPath)// par défaut fr
  useEffect(() => {
    // Détecte la langue à partir de l'URL
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setLang("en");
    } else {
      setLang("fr");
    }
  }, []);

  // Remove any accidental `class` prop that may have been passed in `props`
  const { class: _classProp, ...restProps } = props as any;

  return (
    <a href={`/${lang}${href.startsWith('/') ? href : `/${href}`}`} className={className} {...restProps}>
      {children}
    </a>
  );
};

export default LangLink;
