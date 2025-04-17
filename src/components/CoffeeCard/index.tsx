import { ShoppingCart } from "phosphor-react";
import { BuyArea, BuyButton, Card, Info, Tipo } from "./styles";
import SetQuantityButton from "../../utils/setQuantityButton";

interface CoffeeCardProps {
  name: string;
  image: string;
  description: string;
  value: number;
  types: string[];
}

export function CoffeeCard({
  name,
  image,
  description,
  value,
  types,
}: CoffeeCardProps) {
  return (
    <Card>
      <img src={image} alt="Imagem café" />
      <Tipo>
        {types.map((type, index) => {
          return <p key={index}>{type}</p>;
        })}
      </Tipo>
      <Info>
        <h3>{name}</h3>
        <p>{description}</p>
      </Info>
      <BuyArea>
        <h4>
          R$ <span>{value.toFixed(2).replace(".", ",")}</span>
        </h4>
        <SetQuantityButton />
        <BuyButton>
          <ShoppingCart size={22} />
        </BuyButton>
      </BuyArea>
    </Card>
  );
}
