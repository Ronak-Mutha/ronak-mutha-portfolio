import React from "react";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import AboutSection from "../Components/AboutSection";

function AboutPage() {
  return (
    <MainLayout>
      <section>
        <Title title={"About Me"} span={"About Me"} />
        <AboutSection />
      </section>
    </MainLayout>
  );
}

export default AboutPage;
