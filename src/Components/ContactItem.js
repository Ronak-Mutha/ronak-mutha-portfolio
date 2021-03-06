import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, contact, link }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        {!link && <p>{contact}</p>}
        {link && (
          <a className="contact-link" href={link}>
            {contact}
          </a>
        )}
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  @media screen and (max-width: 502px) {
    width: 100%;
    font-size: 1rem;
    padding: 1rem 1rem;
    .left-content {
      padding: 0.5rem;
      margin-right: 0.5rem;

      svg {
        font-size: 0.5rem;
      }
    }
    .contact-link {
      word-break: break-all;
    }
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.1rem 0;
    }
    .contact-link {
      text-decoration: underline;
    }
  }
`;

export default ContactItem;
