import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, Section, Title } from "./styles";
import products from "../../utils/products";

export function ProductSection() {
  return (
    <Section>
      <Title>
        <h2>Nossos cafés</h2>
      </Title>
      <CoffeeList>
        {products.map((product) => {
          return (
            <CoffeeCard
              name={product.name}
              image={product.image}
              description={product.description}
              value={product.value}
              types={product.types}
            />
          )
        })}
      </CoffeeList>
    </Section>
  );
}
