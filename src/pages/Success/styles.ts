import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const TextSection = styled.section`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;

  >div {
    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
      font-family: "Baloo 2", sans-serif;
      font-size: 2rem;
    }

    >p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
    }

  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const InfoBox = styled.div`
  width: 80%;
  background: linear-gradient(#fff, #fff), linear-gradient(to right, #DBAC2C, #8047F8);
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  border: 1px solid transparent;
  border-radius: 8px 32px 8px 32px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
      color: ${(props) => props.theme["base-text"]};
      line-height: 130%;
  }
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    padding: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme["white"]};

    &.pin {
      background-color: ${(props) => props.theme["purple"]}; 
    }

    &.timer {
      background-color: ${(props) => props.theme["yellow"]}; 
    }

    &.dollar {
      background-color: ${(props) => props.theme["yellow-dark"]}; 
    }
  }
`;

export const ImageContainer = styled.div`

  @media (max-width: 768px) {
      width: 60%;

      img {
        width: 100%;
    }}
  `;
