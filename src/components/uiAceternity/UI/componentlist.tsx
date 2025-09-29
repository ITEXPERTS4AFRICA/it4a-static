
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Monitor, Server, Wifi, Lock } from "lucide-react";
import ScrollReveal from "@/components/react/UI/Animation/ScrollReveal";
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

const content = { fr, en };

interface ServicesProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode|any;
  index?: number;
  className?: string;
}


// additional services will be built dynamically based on locale


const ServicesComponents: React.FC<ServicesProps> = ({
  title,
  description,
  icon,
  index = 0,
}) => {
  return (
    <div id="services"
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/Services border-neutral-800 bg-white/20 text-white",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b order-it4a-primary/20"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/Services:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/Services:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-it4a-primary  ">
        {icon}
      </div>
      <div className="text-xs md:text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/Services:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-00 dark:bg-neutral-700 group-hover/Services:bg-it4a-primary transition-all duration-200 origin-center" />
        <span className="group-hover/Services:translate-x-2 transition duration-200 inline-block text-transparent bg-clip-text bg-gradient-to-r from-it4a-primary to-it4a-orange">
          {title}
        </span>
      </div>
      <p className="text-sm  max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};



export const ServicesComplementaire: React.FC<ServicesProps> = (
  { className }
) => {
  const [lang, setLang] = useState<string>('fr');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      setLang(path.startsWith('/en') ? 'en' : 'fr');
    }
  }, []);

  const t = content[lang as keyof typeof content] || content.fr;

  const additionalFromLocale = (t.services_section && (t as any).services_section.additional_services) || null;

  const additionalServices = [
    {
      icon: <Wifi/>,
      title: additionalFromLocale?.wifi?.title ?? (lang === 'en' ? 'Wi-Fi Professional' : 'Wi-Fi Professionnel'),
      description: additionalFromLocale?.wifi?.description ?? (lang === 'en' ? 'High-performance Wi‑Fi solutions for businesses' : "Solutions Wi-Fi haute performance pour entreprises"),
    },
    {
      icon: <Server/>,
      title: additionalFromLocale?.servers?.title ?? (lang === 'en' ? 'Server Infrastructure' : 'Infrastructure Serveurs'),
      description: additionalFromLocale?.servers?.description ?? (lang === 'en' ? "Installation and management of enterprise servers" : "Installation et gestion de serveurs d'entreprise"),
    },
    {
      icon: <Monitor/>,
      title: additionalFromLocale?.monitoring?.title ?? (lang === 'en' ? 'Monitoring & Supervision' : 'Monitoring & Supervision'),
      description: additionalFromLocale?.monitoring?.description ?? (lang === 'en' ? 'Continuous monitoring of your IT infrastructure' : 'Surveillance continue de votre infrastructure IT'),
    },
    {
      icon: <Lock/>,
      title: additionalFromLocale?.security?.title ?? (lang === 'en' ? 'Advanced Security' : 'Sécurité Avancée'),
      description: additionalFromLocale?.security?.description ?? (lang === 'en' ? 'Multilayer protection against cyber threats' : 'Protection multicouche contre les cybermenaces'),
    },
  ];

  return (

    <section className={` py-2 md:p-4 h-full w-full flex flex-col items-center  justify-center scroll-mt-px z-0 ${className} `}>
      <div className={` container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-3  `}>
        {additionalServices.map((services, index) => (
          <ServicesComponents key={services.title} {...services} index={index} />
        ))}
      </div>
    </section>
  );
}




export default {ServicesComponents, ServicesComplementaire}