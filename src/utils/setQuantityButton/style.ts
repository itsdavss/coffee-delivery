import styled from "styled-components";

export const ButtonContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme["base-button"]};
  width: 72px;
  height: 38px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["purple"]};
    font-size: 1.2rem;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    } 

  }
`;
