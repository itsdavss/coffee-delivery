import CompleteOrder from "../../components/CompleteOrder";
import { MainContainer } from "./styles";

export default function Checkout() {
  return (
    <MainContainer>
      <CompleteOrder />
      <h1>Cafés Selecionados</h1>
    </MainContainer>
  );
}
