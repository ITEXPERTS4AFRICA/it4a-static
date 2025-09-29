import { ChevronRight } from "lucide-react";
import GlowButton from "../UI/components/GlowButton";
import TitleDescript from "../UI/components/TitleDescript";
import { ImgAbout } from "@/assets/assets";
import { motion} from "framer-motion";

interface SectionAboutProps {
  t: typeof import("@/locales/fr.json");
}

export default function SectionAbout({ t }: SectionAboutProps) {
    return (
        <section id="about" className="py-16 backdrop-blur-3xl  md:py-2 bg-gradient-to-r from-it4a-primary/500 via-it4a-secondary to-it4a-secondary/50 ">
            <div className="container mx-auto px-6">
                <div className="flex  flex-col lg:flex-row items-center gap-2 ">
                    <div className="sm:flex sm:flex-col items-center md:items-start lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 space-y-4">
                        <TitleDescript className="text-center md:text-left " title={t.section_about.title1} title2={t.section_about.title2} descript={t.section_about.description} />
                        <div className="flex flex-col sm:flex-row gap-4">

                            <GlowButton href="/about" variant="primary" className="group">
                                {t.section_about.learn_more_button}
                                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </GlowButton>
                            <GlowButton href="/services" variant="outline">
                                {t.section_about.our_services_button}
                            </GlowButton>
                        </div>
                    </div>

                    <picture className="lg:w-1/2 "  >
                        <div className="relative rounded-xl overflow-hidden shadow-lg">
                            <motion.img src={ImgAbout} alt="Équipe IT Experts 4 Africa" className="w-full h-auto aspect-video object-center object-cover " />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1d3446] to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">{t.section_about.team_title}</h3>
                                <p className="text-lg">{t.section_about.team_description}</p>
                            </div>
                        </div>
                    </picture>
                </div>
            </div>
        </section>
    );
}