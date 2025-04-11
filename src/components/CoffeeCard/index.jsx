import { ShoppingCart } from "phosphor-react";
import { BuyArea, Card, Info, Tipo } from "./styles";

export function CoffeeCard({ name, image, description, value, types }) {
  return (
    <Card>
      <img src={image} alt="Imagem café" />
      <Tipo>
        {types.map((type)=>{
          return (
          <p>{type}</p>
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
