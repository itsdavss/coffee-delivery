import { useState } from "react";
import { ButtonContainer } from './style'

export default function SetQuantityButton() {
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);

  const increment = () => {
    setCoffeeQuantity(coffeeQuantity + 1);
  };

  const decrement = () => {
    {
      coffeeQuantity > 0 && setCoffeeQuantity(coffeeQuantity - 1);
    }
  };

  return (
    <ButtonContainer>
      <button onClick={decrement}>-</button>
      <span>{coffeeQuantity}</span>
      <button onClick={increment}>+</button>
    </ButtonContainer>
  );
}
