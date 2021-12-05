import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-container">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hello, I'm <span>Ronak Mutha</span>
        </h1>
        <p>
          A Web Developer from Pune, India, passionate about learning the latest
          technologies in the web development domain. I enjoy implementing my
          learning by creating user-friendly products.
        </p>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/ronak-d-mutha"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Ronak-Mutha/" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/ronakmutha97" className="icon i-twitter">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  h1 {
    font-size: 2rem;
  }
  span {
    font-size: 4rem;
    color: var(--primary-color);
  }
  @media screen and (max-width: 502px) {
    span {
      font-size: 2.6rem;
      display: block;
    }

    p {
      text-align: left;
    }
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid #2867b2;
          color: #2867b2;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid #1da1f2;
          color: #1da1f2;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
