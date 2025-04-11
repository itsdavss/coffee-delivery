import { ShoppingCart } from "phosphor-react";
import { BuyArea, Card, Info, Tipo } from "./styles";

interface CoffeeTag {
  type: string
}

interface CoffeeCardProps{
  name: string,
  image: string,
  description: string,
  value: number,
  types: CoffeeTag[]
}

export function CoffeeCard({ name, image, description, value, types }: CoffeeCardProps) {
  return (
    <Card>
      <img src={image} alt="Imagem café" />
      <Tipo>
        {types.map((type: CoffeeTag, index)=>{
          return (
          <p key={index}>{type.type}</p>
        )
        })}
      </Tipo>
      <Info>
        <h3>{name}</h3>
        <p>{description}</p>
      </Info>
      <BuyArea>
        <h4>
          R$ <span>{value}</span>
        </h4>
        <p>1</p>
        <button>
          <ShoppingCart size={22} />
        </button>
      </BuyArea>
    </Card>
  );
}
