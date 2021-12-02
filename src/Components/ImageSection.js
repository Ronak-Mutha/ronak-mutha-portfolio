import React from "react";
import styled from "styled-components";
import resume from "../assets/img/resume.jpg";
import PrimaryLink from "../styles/PrimaryLink";
import Resume from '../assets/docs/Ronak-Mutha-Resume.pdf';

function ImageSection() {
  function getAge() {
    const dob = new Date(1997, 9, 3);
    const diff_ms = Date.now() - dob.getTime();
    return Math.abs(new Date(diff_ms).getUTCFullYear() - 1970);
  }

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Ronak Mutha</span>
        </h4>
        <p className="paragraph">
          Hello Everyone👋, I am Ronak Mutha. I am a Computer Science grad who
          completed his engineering in 2019. Previously, I've worked as an{" "}
          <strong>Assistant Software Engineer at TCS</strong> for{" "}
          <strong>1 year and 3 months</strong>.
        </p>
        <p className="paragraph">
          I've been playing around the web development for quite a while now.
          I'll also be joining <strong>Neogcamp (Fullstack Bootcamp)</strong> in
          January 2022 to improve my existing knowledge of{" "}
          <strong>React</strong> and learn backend technologies like{" "}
          <strong>Nodejs, Express, Mongoose, and MongoDB</strong>.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages </p>
            <p>Current Location</p>
            <p>Availability</p>
          </div>
          <div className="info">
            <p>: Ronak Mutha</p>
            <p>: {getAge()}</p>
            <p>: English, Hindi </p>
            <p>: Pune, Maharashtra</p>
            <p>: Can join immediately</p>
          </div>
        </div>
        <PrimaryLink
          href={Resume}
          download='Ronak-Mutha-Resume'
        >
          Download Resume{" "}
        </PrimaryLink>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
