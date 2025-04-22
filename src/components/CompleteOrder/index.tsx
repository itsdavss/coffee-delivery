import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {
  ContainerSection,
  Form,
  FormInfo,
  FormInputs,
  PaymentInfo,
  PaymentInputs,
} from "./styles";
import { useForm } from "../../contexts/FormContext";

export default function CompleteOrder() {
   const { formRef, handleCepSearch, addressData } = useForm()

  return (
    <ContainerSection>
      <h1>Complete seu pedido</h1>
      <Form ref={formRef}>
        <section>
          <FormInfo>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormInfo>
          <FormInputs>
            <input type="text" name="cep" placeholder="CEP*" onChange={handleCepSearch} className="tamanho30" />
            <input type="text" name="rua" value={addressData.rua}  placeholder="Rua*" className="tamanho100" readOnly  />
            <input type="text" name="numero" placeholder="Número*" className="tamanho30" />
            <input
              type="text"
              placeholder="Complemento"
              className="tamanho63"
            />
            <input type="text" name="bairro" value={addressData.bairro}  placeholder="Bairro*" className="tamanho30" readOnly />
            <input type="text" name="cidade" value={addressData.cidade}  placeholder="Cidade*" className="tamanho48" readOnly  />
            <input type="text" name="uf" value={addressData.uf}  placeholder="UF*" className="tamanho10" readOnly  />
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
              value="Cartão de crédito"
              hidden
            />
            <label htmlFor="credito"><CreditCard size={22} /> CARTÃO DE CRÉDITO</label>
            <input
              type="radio"
              name="pagamento"
              id="debito"
              value="Cartão de debito"
              hidden
            />
            <label htmlFor="debito"><Bank size={22} /> CARTÃO DE DÉBITO</label>
            <input
              type="radio"
              name="pagamento"
              id="dinheiro"
              value="Dinheiro"
              hidden
            />
            <label htmlFor="dinheiro"><Money size={22} /> DINHEIRO</label>
          </PaymentInputs>
        </section>
      </Form>
    </ContainerSection>
  );
}
