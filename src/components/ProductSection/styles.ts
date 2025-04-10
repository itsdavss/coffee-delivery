import styled from "styled-components";

export const Section = styled.section`
    max-width: 1500px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
      font-family: "Baloo 2", sans-serif;
      width: 100%;
      h2 {
        text-align: left;
        font-size: 2rem;
        color: ${(props) => props.theme["base-title"]};
      }
`;

export const CoffeeList = styled.ul`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
`
