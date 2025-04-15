import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;

  h1 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  section {
  margin-bottom: 12px;
  background-color: ${(props) => props.theme["base-card"]};
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 6px;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;

  input {
    border-radius: 4px;
    height: 42px;
    padding-left: 12px;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
  }

  input::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  input.tamanho100 {
    width: 100%; 
  }

  input.tamanho63 {
    width: 63%; 
  }

  input.tamanho48 {
    width: 48%; 
  }

  input.tamanho30 {
    width: 30%; 
  }

  input.tamanho10 {
    width: 10%; 
  }
`;

const BaseInfo = styled.div`
  font-family: "Roboto", sans-serif;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
    margin-bottom: 2px;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }
`;

export const FormInfo = styled(BaseInfo)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentInfo = styled(BaseInfo)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymentInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    cursor: pointer;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 16px;
    width: 25%;
    display: flex;
    flex-direction: center;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
    border: 1px solid ${(props) => props.theme["base-button"]};

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }

  input[type='radio']:checked + label {
    border:1px solid  ${(props) => props.theme["purple"]};
    background-color: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple"]};
  }
`;
