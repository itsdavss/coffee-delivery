import { ShoppingCart } from "phosphor-react";
import { BuyArea, BuyButton, Card, Info, Tipo } from "./styles";
import SetQuantityButton from "../../utils/setQuantityButton";
import { useState } from "react";

interface CoffeeCardProps {
  name: string;
  image: string;
  description: string;
  value: number;
  types: string[];
}

export function CoffeeCard({ name, image, description, value, types, }: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);

  const increment = () => {
    setCoffeeQuantity(coffeeQuantity + 1);
  };

  const decrement = () => {
    {
      coffeeQuantity > 0 && setCoffeeQuantity(coffeeQuantity - 1);
    }
  };
  
  const addItemToCart = () => {
    console.log(name)
    console.log(image)
    console.log(description)
    console.log(value)
    console.log(types)
    console.log(coffeeQuantity)
  }

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
        <SetQuantityButton increment={increment} decrement={decrement} coffeeQuantity={coffeeQuantity}/>
        <BuyButton onClick={addItemToCart}>
          <ShoppingCart size={22} />
        </BuyButton>
      </BuyArea>
    </Card>
  );
}
