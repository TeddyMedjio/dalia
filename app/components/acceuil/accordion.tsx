import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg")}
        >
          Est ce que le papier Hygiénique Dalia Premium est meilleur ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert-secondary text-balance")}>
          <p>
            Fournisseur de qualité en papier hygiénique, rams de papier et
            papier thermique pour professionnels et particuliers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg")}
        >
          De quoi est fait le papier toilette Dalia Premium ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert-secondary text-balance")}>
          <p>
            Fournisseur de qualité en papier hygiénique, rams de papier et
            papier thermique pour professionnels et particuliers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg")}
        >
          Les Rams de Papiers PAPYRUS font-ils le travail ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert-secondary text-balance")}>
          <p>
            Fournisseur de qualité en papier hygiénique, rams de papier et
            papier thermique pour professionnels et particuliers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg")}
        >
          Est ce que le service client est reactif ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert-secondary text-balance")}>
          <p>
            Fournisseur de qualité en papier hygiénique, rams de papier et
            papier thermique pour professionnels et particuliers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg")}
        >
          Commence se passe la livraison ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert-secondary text-balance")}>
          <p>
            Fournisseur de qualité en papier hygiénique, rams de papier et
            papier thermique pour professionnels et particuliers.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
