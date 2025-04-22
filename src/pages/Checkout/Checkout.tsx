import Cart from "../../components/Cart";
import CompleteOrder from "../../components/CompleteOrder";
import { FormProvider } from "../../contexts/FormContext";
import { MainContainer } from "./styles";

export default function Checkout() {
  return (
    <MainContainer>
      <FormProvider>
        <CompleteOrder />
        <Cart />
      </FormProvider>
    </MainContainer>
  );
}
