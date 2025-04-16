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
`;

export const CartCard = styled.section`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px 32px 8px 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItems = styled.div`
  width: 100%;
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

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;

    button {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    padding: 6.5px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 4px;

    svg {
      color: ${(props) => props.theme["purple"]};
    }
    }
  }

  h4 {
    color: ${(props) => props.theme["base-text"]};
    margin-left: 21%;
  }
`
