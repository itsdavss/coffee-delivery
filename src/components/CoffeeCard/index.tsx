import { ShoppingCart } from "phosphor-react";
import { BuyArea, Card, Info, Tipo } from "./styles";
import Tradicional from '../../assets/images/expresso-tradicional.png'

export function CoffeeCard() {
  return (
    <Card>
      <img src={Tradicional} alt="Imagem café" />
      <Tipo>
        <p>TRADICIONAL</p>
      </Tipo>
      <Info>
        <h3>Expresso tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </Info>
      <BuyArea>
        <h4>
          R$ <span>9,90</span>
        </h4>
        <p>1</p>
        <button>
          <ShoppingCart size={22} />
        </button>
      </BuyArea>
    </Card>
  );
}
