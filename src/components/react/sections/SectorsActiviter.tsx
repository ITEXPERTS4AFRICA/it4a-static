import ChromaGrid, { type ChromaItem } from "../UI/components/ChromaGrid";
import TitleDescript from "../UI/components/TitleDescript";
import SanteImage from "/image/sections/image-service-sante.jpg?url";
import BanckImage from "/image/sections/image-service-banck.jpg?url";
import EcomImage from "/image/sections/image-service-ecommerce.jpg?url";
import LogistiqueImage from "/image/sections/image-service-logistique.jpg?url";
import NetworkImage from "/image/sections/image-service-network.jpg?url";
import SecurityImage from "/image/sections/image-service-security.jpg?url";
import TriangularBackground from "../UI/Animation/TriangularBackground";
import { motion } from "framer-motion";

interface SectorActivitetProps {
  t: typeof import("@/locales/fr.json");
}

export default function SectorActivitet({ t }: SectorActivitetProps){
    const sectors: ChromaItem[] = [
    { title: t.sectors.items.health, image: SanteImage },
    { title: t.sectors.items.finance_banking_insurance, image: BanckImage },
    { title: t.sectors.items.telecommunications_media, image: NetworkImage },
    { title: t.sectors.items.security, image: SecurityImage },
    { title: t.sectors.items.education_training, image: EcomImage },
    { title: t.sectors.items.public_sector_administrations, image: LogistiqueImage }
  ];
    
  return(
        <TriangularBackground className="bg-transparent w-full" fadeSpeed={20} lineOpacity={100}  pointCount={100} theme="dark">
          <motion.section initial={{opacity:0,y:34 }} whileInView={{opacity:1,y:0}} viewport={{once:true}} className=" w-full py-10 px-4 bg-gradient-to-r from-it4a-primary/500 via-it4a-secondary to-it4a-secondary/50">
            <div className="container flex flex-col itmes-center justify-center gap-1 max-w-7xl mx-auto">
              <TitleDescript title={t.sectors.title1} title2={t.sectors.title2} descript={t.sectors.description}/>
              <ChromaGrid className="bg-transparent backdrop-blur-xs p-4 rounded-2xl place-items-center font-Poppins" items={sectors}/>
            </div>
          </motion.section>
        </TriangularBackground>
  );
}