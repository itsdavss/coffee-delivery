import Cart from "../../components/Cart";
import CompleteOrder from "../../components/CompleteOrder";
import { MainContainer } from "./styles";

export default function Checkout() {
  return (
    <MainContainer>
        <CompleteOrder />
        <Cart />
    </MainContainer>
  );
}
