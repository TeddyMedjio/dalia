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
          className={cn("text-vert-contrast font-semibold text-lg lg:text-xl")}
        >
          Est ce que le papier Hygiénique Dalia Premium est meilleur ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert text-balance")}>
          <p className="max-w-xl">
            Papier durable — un rouleau dure plus longtemps, ce qui peut réduire
            la quantité utilisée et une bonne absorbance et teinte crème
            naturelle appréciées par les personnes sensibles aux produits
            chimiques.{" "}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg lg:text-xl")}
        >
          De quoi est fait le papier toilette Dalia Premium ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert text-balance")}>
          <p className="max-w-xl">
            Le papier hygiénique Dalia Premium est fabriqué à partir de fibres
            cellulosiques (pulpe de bois vierge) issues de forêts gérées
            durablement
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg lg:text-xl")}
        >
          Les Rams de Papiers PAPYRUS font-ils le travail ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert text-balance")}>
          <p className="max-w-xl">
            Les ramettes de papier PAPYRUS garantissent une impression nette et
            sans bavure, réduisant considérablement les risques de bourrage dans
            les imprimantes et copieurs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger
          className={cn("text-vert-contrast font-semibold text-lg lg:text-xl")}
        >
          Est ce que le service client est reactif ?
        </AccordionTrigger>
        <AccordionContent className={cn("text-vert text-balance")}>
          <p className="max-w-xl">
            Le service client de Dalia Environnement semble globalement réactif
            selon les avis disponibles en ligne. Les utilisateurs apprécient la
            rapidité des réponses et la qualité du suivi après-vente.
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-5">
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
      </AccordionItem> */}
    </Accordion>
  );
}
