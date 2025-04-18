import {
  CartCard,
  CartItems,
  CartItem,
  CartSection,
  OrderSummary,
  ConfirmButton,
  Buttons,
  RemoveButton,
} from "./styles";
import tradicional from "../../assets/images/expresso-tradicional.png";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import SetQuantityButton from "../../utils/setQuantityButton";
import { useState } from "react";

export default function () {
  const navigate = useNavigate();

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
    <CartSection>
      <h2>Cafés selecionados</h2>
      <CartCard>
        <CartItems>
          <CartItem>
            <img src={tradicional} alt="" />
            <Buttons>
              <p>Expresso Tradicional</p>
              <div>
                <SetQuantityButton
                  increment={increment}
                  decrement={decrement}
                  coffeeQuantity={coffeeQuantity}
                />
                <RemoveButton>
                  <Trash />
                  Remover
                </RemoveButton>
              </div>
            </Buttons>
            <h4>R$ 9,90</h4>
          </CartItem>
        </CartItems>
        <OrderSummary>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
          </div>
        </OrderSummary>
        <ConfirmButton
          onClick={() => {
            navigate("/success");
          }}
        >
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </CartCard>
    </CartSection>
  );
}
