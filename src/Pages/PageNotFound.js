import React from "react";
import styled from "styled-components";
import WrongPlace from "./../assets/img/wrong-place.gif";

function PageNotFound() {
  return (
    <PageNotFoundStyled>
      <img src={WrongPlace} alt="Wrong Place" />
    </PageNotFoundStyled>
  );
}

const PageNotFoundStyled = styled.div`
  img {
    width: 100%;
    height: 99vh;
  }
  @media screen and (max-width: 502px) {
    img {
      height: 95vh;
    }
  }
`;

export default PageNotFound;
