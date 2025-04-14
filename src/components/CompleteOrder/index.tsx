import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {
  ContainerSection,
  Form,
  FormInfo,
  FormInputs,
  PaymentInfo,
  PaymentInputs,
} from "./styles";

export default function CompleteOrder() {
  return (
    <ContainerSection>
      <h1>Complete seu pedido</h1>
      <Form action="">
        <section>
          <FormInfo>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormInfo>
          <FormInputs>
            <input type="text" placeholder="CEP" className="tamanho30" />
            <input type="text" placeholder="Rua" className="tamanho100" />
            <input type="text" placeholder="Número" className="tamanho30" />
            <input
              type="text"
              placeholder="Complemento"
              className="tamanho63"
            />
            <input type="text" placeholder="Bairro" className="tamanho30" />
            <input type="text" placeholder="Cidade" className="tamanho48" />
            <input type="text" placeholder="UF" className="tamanho10" />
          </FormInputs>
        </section>
        <section>
          <PaymentInfo>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentInfo>
          <PaymentInputs>
            <input
              type="radio"
              name="pagamento"
              id="credito"
              value="cartao_credito"
              hidden
            />
            <label htmlFor="credito"><CreditCard size={22} /> CARTÃO DE CRÉDITO</label>
            <input
              type="radio"
              name="pagamento"
              id="credito"
              value="cartao_credito"
              hidden
            />
            <label htmlFor="credito"><Bank size={22} /> CARTÃO DE DÉBITO</label>
            <input
              type="radio"
              name="pagamento"
              id="credito"
              value="cartao_credito"
              hidden
            />
            <label htmlFor="credito"><Money size={22} /> DINHEIRO</label>
          </PaymentInputs>
        </section>
      </Form>
    </ContainerSection>
  );
}
