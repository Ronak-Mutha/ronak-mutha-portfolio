import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 642px) {
    padding: 3rem;
  }
  @media screen and (max-width: 571px) {
    padding: 1.5rem 0.6rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
