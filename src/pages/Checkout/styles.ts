import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 2%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  
`;