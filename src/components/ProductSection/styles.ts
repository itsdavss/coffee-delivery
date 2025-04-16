import styled from "styled-components";

export const Section = styled.section`
  max-width: 1120px;
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

      @media (max-width: 1024px) {
        margin-top: 30px;

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
      }
`;

export const CoffeeList = styled.ul`
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`
