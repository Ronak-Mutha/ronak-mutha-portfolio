import React from "react";
import styled from "styled-components";

function SkillCard({ name, logo, alt }) {
  return (
    <SkillCardStyled>
      <div className="container">
        <img src={logo} alt={alt} />
        <h4>{name}</h4>
      </div>
    </SkillCardStyled>
  );
}

const SkillCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    display: grid;
    place-items: center;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        border-radius: 10px;
      }
    }
  }
`;

export default SkillCard;
