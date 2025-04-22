import styled from "styled-components";
import Background from "../../../public/assets/images/Background.png";

export const Section = styled.section`
  background-image: url(${Background});

  > div {
    max-width: 1350px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 92px 0;

    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0;

      .divImagem {
        display: flex;
        justify-content: center;
        padding-top: 2rem;

        img {
          width: 70%;
        }
      }
    }
  }
`;

export const TextArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  p, li {
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  >div {
    h1 {
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-title"]};
    }
    
    p {
      font-size: 1.25rem;
    }
  }

  >ul {
    display: grid;
    margin-top: 66px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 40px;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    svg {
      padding: 8px;
      border-radius: 50%;
      color: ${(props) => props.theme["white"]};
    }

    .carrinho {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }

    .caixa {
      background-color: ${(props) => props.theme["base-text"]};
    }

    .timer {
      background-color: ${(props) => props.theme["yellow"]};
    }

    .cafe {
      background-color: ${(props) => props.theme["purple"]};
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;

  >div {
    margin-top: 20px;
    text-align: center;
    h1 {
      font-size: 2rem;
      margin-bottom: 15px;
    }
  }

  > ul {
    margin-top: 30px;
  }
  }

`;
