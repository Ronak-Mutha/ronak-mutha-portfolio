import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, list }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        {list && (
          <ul>
            {list.map((item) => {
              return <li key={item.id}>{item.summary} </li>;
            })}
          </ul>
        )}
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
      word-wrap: break-word;
    }
    grid-template-columns: 1fr 4fr;
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 100%;
    padding-left: 1rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 3rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -1.5rem;
      top: 1.1rem;
      height: 2px;
      width: 2rem;
      background-color: var(--border-color);
    }
    @media screen and (max-width: 1000px) {
      &::before {
        left: 0;
      }
      @media screen and (max-width: 421px) {
        padding-left: 2rem;
        &::before {
          width: 1rem;
        }
      }
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
    li:not(:last-child) {
      list-style-type: disc;
    }
  }
`;
export default ResumeItem;
