import type { FC } from "react";
import {Accordion, AccordionItem} from "@heroui/react";
import type { Translation } from "@/types/translations";
import TitleDescript from "../UI/components/TitleDescript";
import {useState } from "react";


type Props = {
  t: Translation;
  solutions?: [];
};


const SolutoinAccordion: FC<Props> = ({ t, solutions = t.solutions }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));

  return (
    <div className="container flex flex-col items-center justify-center gap-8 max-w-7xl mx-auto px-4 py-16">
      <TitleDescript
        title={t.solutions_section.title1}
        title2={t.solutions_section.title2}
        descript={t.solutions_section.description}
      />
      <Accordion
        className="w-full"
        itemClasses={{
          base: "px-6 py-4",
          title: "font-Poppins font-semibold text-lg text-it4a-primary hover:text-white transition-colors",
          trigger: "hover:bg-it4a-primary/20 rounded-md",
          content: "text-white font-Poppins",
          indicator:"text-white",
          titleWrapper:"bg-it4a-secondary",
        }}
        selectedKeys={selectedKeys} onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
        
        
        >
        {Object.entries(solutions).map(([key, category], index) => (
          <AccordionItem
            key={index}
            aria-label={category.title}
            title={category.title}
            
            className="border-b border-it4a-primary/20 last:border-b-0 bg-it4a-secondary/50 backdrop-blur-md rounded-md"
          >
            <div className="space-y-4 pl-5">
              {Object.entries(category.items).map(([itemKey, item], itemIndex) => (
                <div
                  key={itemIndex}
                  className="p-4 rounded-md bg-gradient-to-r from-it4a-primary/5 to-it4a-accent/5 border border-it4a-accent/20 hover:border-it4a-accent/50 transition-all"
                >
                  <h3 className="font-Poppins font-bold text-it4a-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SolutoinAccordion;