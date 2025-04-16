import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import entregador from "../../assets/images/entregador.png";
import { ImageContainer, InfoBox, Information, MainContainer, TextSection } from "./styles";

export default function Success() {
  return (
    <MainContainer>
      <TextSection>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <InfoBox>
          <Information>
            <MapPin size={16} className="pin" />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Information>
          <Information>
            <Timer size={16} className="timer" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </Information>
          <Information>
            <CurrencyDollar size={16} className="dollar" />
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>Cartão de crédito</strong></p>
            </div>
          </Information>
        </InfoBox>
      </TextSection>
      <ImageContainer>
        <img src={entregador} />
      </ImageContainer>
    </MainContainer>
  );
}
