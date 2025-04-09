import { Section, TextArea } from "./styles";
import imagemCafe from "../../assets/images/café.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function InfoSection() {
  return (
    <Section>
      <div>
        <TextArea>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <li>
              <ShoppingCart className="carrinho" size={16} />
              Compra simples e segura
            </li>
            <li>
              <Package className="caixa" size={16} />
              Embalagem mantém o café intacto
            </li>
            <li>
              <Timer className="timer" size={16} />
              Entrega rápida e rastreada
            </li>
            <li>
              <Coffee className="cafe" size={16} />O café chega fresquinho até você
            </li>
          </ul>
        </TextArea>
        <div className="divImagem">
          <img
            src={imagemCafe}
            alt="Copo de café para viagem com a marca 'Coffee Delivery' em destaque, cercado por grãos de café e colheres com café moído sobre fundo amarelo estilizado."
          />
        </div>
      </div>
    </Section>
  );
}
