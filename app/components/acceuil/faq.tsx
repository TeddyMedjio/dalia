import Container from "../common/container";
import { AccordionDemo } from "./accordion";

export default function Faq() {
  return (
    <div className="bg-neutral-100 py-20 grid place-items-center">
      <Container>
        <div className="w-full grid place-items-center space-y-20 max-w-[650px]">
          <h2 className="text-center text-vert-fonce text-[34px] leading-10 md:text-5xl font-medium md:leading-14">
            Réponses à vos questions les plus courantes
          </h2>
          <AccordionDemo />
        </div>
      </Container>
    </div>
  );
}
