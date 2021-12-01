import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          toast.success("🦄 Mail successfully sent!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error(
            "🦄Oh no, something went wrong! You can directly mail me!",
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      );
    e.target.reset();
  };

  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">
                  Enter your name<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">
                  Enter your email<span style={{ color: "red" }}>*</span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="subject">
                  Enter your subject<span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-field">
                <label htmlFor="message">
                  Enter your Message<span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton type="submit" title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem title={"Phone"} icon={phone} contact1={"9657129663"} />
            <ContactItem
              title={"Email"}
              icon={email}
              contact1={"mutharonak97@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              contact1={"Pune, Maharshtra"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
      <ToastContainer />
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -15px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
