import { ButtonContainer } from './style'

interface SetQuantityButtonProps {
  increment: () => void,
  decrement: () => void,
  coffeeQuantity: number,
} 

export default function SetQuantityButton({ increment, decrement, coffeeQuantity}: SetQuantityButtonProps) {

  return (
    <ButtonContainer>
      <button onClick={decrement}>-</button>
      <span>{coffeeQuantity}</span>
      <button onClick={increment}>+</button>
    </ButtonContainer>
  );
}
