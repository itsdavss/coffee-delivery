import styled from "styled-components";

export const CartSection = styled.section`
  width: 40%;
  font-family: 'Roboto', sans-serif;


  h2 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    margin-bottom: 15px;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const CartCard = styled.section`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px 32px 8px 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
   padding: 30px 20px;
   margin-bottom: 5%;
  }
`;

export const CartItems = styled.div`
  width: 100%;


  h6 {
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
    font-size: 1rem;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding-bottom: 24px;
  margin-bottom: 24px;

  img {
    width: 64px;
    margin-right: 6%;
  }

  h4 {
    color: ${(props) => props.theme["base-text"]};
    margin-left: 13%;
  }

  @media (max-width: 1024px) {
    justify-content: space-between;

    img {
      margin-right: 0px;
    }

    h4 {
      margin-left: 0px;
    }
  }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;

    div {
      display: flex;
      gap: 8px;
    }
`;

export const RemoveButton = styled.button`
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    padding: 6.5px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 8px;

    svg {
      color: ${(props) => props.theme["purple"]};
      font-size: 1rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
      color: ${(props) => props.theme["base-subtitle"]};

        svg {
          color: ${(props) => props.theme["purple-dark"]};
        }
    }
`;

export const OrderSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
    color: ${(props) => props.theme["base-text"]};
    }

    h3 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }
  }
`;

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  width: 100%;
  padding: 16px 0;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 4px;
  margin-top: 24px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-label"]};
    cursor: not-allowed;
  }
`;
