import styled from "styled-components";

export const Card = styled.li`
  background-color: ${(props) => props.theme["base-card"]};
  margin-bottom: 40px;
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px 32px 4px 32px;

  img {
    margin-top: -40px;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
    margin-bottom: 45px;
  }
`;

export const Tipo = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  p {
    border-radius: 9999px;
    padding: 4px 8px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 0.7rem;
    font-weight: 700;
  }
`;

export const Info = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme["base-label"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
    width: 80%
  }
`;

export const BuyArea = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.8rem;

    span {
      font-family: "Baloo 2", sans-serif;
      font-size: 1.25rem;
    }
  }

  button {
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 8px;
    padding: 8px;
  }

  button:hover {
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
