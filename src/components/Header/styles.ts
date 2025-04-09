import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-family: 'Roboto';
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  > div {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  padding: 10px;
  border-radius: 8px;
  font-size: 0.875rem;
  }

  a {
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 8px;
  border-radius: 8px;
  }

  a:hover {
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["yellow-light"]};
  }
`;
