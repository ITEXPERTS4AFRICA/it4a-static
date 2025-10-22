// @ts-check
import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    output:'static',
    site:'https://itexperts4africa.com',

       i18n: {
        defaultLocale: "fr",
        locales: ["en", "fr"],
        fallback: {
            en: "fr"
        },
        routing: {
            prefixDefaultLocale:false,
            redirectToDefaultLocale: true,
            fallbackType: "rewrite",
          }
    },

    integrations:[ react(),sitemap({
            i18n:{
                defaultLocale: "fr",
                locales:{
                    en:'en-Us',
                    fr:'fr-FR'
                }
            }
        })],
      vite:{
        define:{
            'ssr':{
                noExternal: ['@react-email/components', 'react-email','lucide-react']
            },
        },
        plugins:[
            tailwindcss(),
        ],
    },
    // adapter: node(
    //     {
    //         mode: 'standalone',
    //         experimentalStaticHeaders:true,
    //     }
    // )
});