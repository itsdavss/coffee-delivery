import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-family: 'Roboto', sans-serif;
  max-width: 1120px;
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
  position: relative;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  .cart-icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
}


  a:hover {
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["yellow-light"]};
  }
`;
