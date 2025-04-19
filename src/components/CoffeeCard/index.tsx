import { ShoppingCart } from "phosphor-react";
import { BuyArea, BuyButton, Card, Info, Tipo } from "./styles";
import SetQuantityButton from "../../utils/setQuantityButton";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

interface CoffeeCardProps {
  id: number,
  name: string;
  image: string;
  description: string;
  value: number;
  types: string[];
}

export function CoffeeCard({ name, image, description, value, types, id }: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);
  const { addToCart } = useCart()

  const increment = () => {
    setCoffeeQuantity(coffeeQuantity + 1);
  };

  const decrement = () => {
    {
      coffeeQuantity > 0 && setCoffeeQuantity(coffeeQuantity - 1);
    }
  };
  
  const addItemToCart = () => {
    if(coffeeQuantity > 0) {
      addToCart({id, name, image, value, coffeeQuantity})
      console.log('item adicionado: ', {id, name, image, value, coffeeQuantity})
    }
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
