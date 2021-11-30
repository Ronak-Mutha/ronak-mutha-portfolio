import React from "react";
import styled from "styled-components";
import {MainLayout} from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
          <Title title={'About Me'} span={'About Me'}/>
          <ImageSection/>
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
