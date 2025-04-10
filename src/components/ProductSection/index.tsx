import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, Section, Title } from "./styles";

export function ProductSection() {
  return (
    <Section>
      <Title>
        <h2>Nossos cafés</h2>
      </Title>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </Section>
  );
}
