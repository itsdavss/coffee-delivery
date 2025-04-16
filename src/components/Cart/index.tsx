import { CartCard, CartItems, CartItem, CartSection, OrderSummary, ConfirmButton } from "./styles";
import tradicional from "../../assets/images/expresso-tradicional.png";
import { Trash } from "phosphor-react";

export default function () {
  return (
    <CartSection>
      <h2>Cafés selecionados</h2>
      <CartCard>
        <CartItems>
          <CartItem>
            <img src={tradicional} alt="" />
            <div>
              <p>Expresso Tradicional</p>
              <button>
                <Trash />
                Remover
              </button>
            </div>
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
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </CartCard>
    </CartSection>
  );
}
