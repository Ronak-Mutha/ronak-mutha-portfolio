import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "../Components/ResumeItem";
import experiences from "../data/experiences";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="resume-content">
              <ResumeItem
                year={experience.year}
                title={experience.title}
                subTitle={experience.subtitle}
                list={experience.summaryList}
              />
            </div>
          );
        })}
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2015 - 2019"}
            title={"Bachelor of Engineering (Computer Science)"}
            subTitle={"PES Modern College of Engineering,Pune"}
          />
          <ResumeItem
            year={"2013 - 2015"}
            title={"Higher Secondary Certificate"}
            subTitle={"Maharashtra State Board, Pune "}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
