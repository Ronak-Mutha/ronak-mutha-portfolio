import React from "react";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";

function AboutPage() {
  return (
    <MainLayout>
      <section>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
      </section>
    </MainLayout>
  );
}

export default AboutPage;
