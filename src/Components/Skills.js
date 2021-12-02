import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title={"Skills"} span={"Skills"} />
        <InnerLayout>
          <div className="skills">
            {skills.map((skill) => {
              return (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  logo={skill.logo}
                  alt={skill.alt}
                />
              );
            })}
          </div>
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
