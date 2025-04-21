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
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import SetQuantityButton from "../../utils/setQuantityButton";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeItem } = useCart();
  const [coffeeQuantity, setCoffeeQuantity] = useState(0);

  const increment = () => {
    setCoffeeQuantity(coffeeQuantity + 1);
  };

  const decrement = () => {
    {
      coffeeQuantity > 0 && setCoffeeQuantity(coffeeQuantity - 1);
    }
  };

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.value * item.coffeeQuantity,
    0
  );
  const delivery = 3.5;
  const total = totalItems + delivery;

  return (
    <CartSection>
      <h2>Cafés selecionados</h2>
      <CartCard>
        <CartItems>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt="" />
                <Buttons>
                  <p>{item.name}</p>
                  <div>
                    <SetQuantityButton
                      increment={increment}
                      decrement={decrement}
                      coffeeQuantity={item.coffeeQuantity}
                    />
                    <RemoveButton onClick={() => removeItem(item)}>
                      <Trash />
                      Remover
                    </RemoveButton>
                  </div>
                </Buttons>
                <h4>R$ {item.value.toFixed(2).replace(".", ",")}</h4>
              </CartItem>
            ))
          ) : (
            <h6>Não há itens no carrinho</h6>
          )}
        </CartItems>
        {cartItems.length > 0 && (
          <OrderSummary>
            <div>
              <p>Total de itens</p>
              <p>R$ {totalItems.toFixed(2).replace(".", ",")}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {delivery.toFixed(2).replace(".", ",")}</p>
            </div>
            <div>
              <h3>Total</h3>
              <h3>R$ {total.toFixed(2).replace(".", ",")}</h3>
            </div>
          </OrderSummary>
        )}

        <ConfirmButton
          onClick={() => {
            navigate("/success");
          }}
          disabled={cartItems.length == 0 ? true : false}
        >
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </CartCard>
    </CartSection>
  );
}
