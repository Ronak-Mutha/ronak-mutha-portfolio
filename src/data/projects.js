import Portfolio from "../assets/img/projects/portfolio.webp";
import Neogcamp from "../assets/img/projects/neogcamp-portfolio.webp";
import TextUtils from "../assets/img/projects/text-utils.webp";
import Contact from "../assets/img/projects/contact-app.webp";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: Portfolio,
    github: "https://github.com/Ronak-Mutha/ronak-mutha-portfolio",
    website: "https://ronak-mutha.netlify.app",
    title: "Personal Portfolio",
    text: "Personal Portfolio for showcasing personal projects and blogs.",
    alt: "React Project",
  },
  {
    id: 2,
    category: "JavaScript",
    image: Neogcamp,
    github: "https://github.com/Ronak-Mutha/ronak-mutha",
    website: "https://ronak-mutha-portfolio.netlify.app/",
    title: "Neogcamp Portfolio",
    text: "Portfolio website for showcasing projects and blogs created for Neogcamp(Full Stack Bootcamp) level zero.",
    alt: "Neogcamp Portfolio",
  },
  {
    id: 3,
    category: "React",
    image: TextUtils,
    github: "https://github.com/Ronak-Mutha/text-utils",
    website: "https://text-utilss.netlify.app/",
    title: "Text Utils",
    text: "Text-Utils is a word counter and a character counting utility that can be used to manipulate your text in the way you want.",
    alt: "Neogcamp Portfolio",
  },
  {
    id: 4,
    category: "React",
    image: Contact,
    github: "https://github.com/Ronak-Mutha/contact-app",
    website: "https://contact-app-ronak.herokuapp.com/",
    title: "Contact Manager",
    text: "Contact Manager helps you to manage you contacts. You can create, read, modify, and delete contacts. You can also search for a contact.",
    alt: "Contact Manager",
  },
];

export default portfolios;
