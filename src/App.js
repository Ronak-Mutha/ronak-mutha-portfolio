import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/HomePage";
import { Route, Routes, Navigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ResumePage = lazy(() => import("./Pages/ResumePage"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage"));
const BlogsPage = lazy(() => import("./Pages/BlogsPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };
  return (
    <div className="App">
      <Sidebar
        navToggle={navToggle}
        checked={checked}
        themeToggler={themeToggler}
      />
      <div className="ham-burger-menu">
        <IconButton
          aria-label="menu"
          onClick={() => {
            setNavToggle(!navToggle);
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? <MenuIcon /> : <CloseIcon />}
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<CircularProgress color="inherit" />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<CircularProgress color="inherit" />}>
                <ResumePage />
              </Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <Suspense fallback={<CircularProgress color="inherit" />}>
                <ProjectsPage />
              </Suspense>
            }
          />

          <Route
            path="/blogs"
            element={
              <Suspense fallback={<CircularProgress color="inherit" />}>
                <BlogsPage />
              </Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<CircularProgress color="inherit" />}>
                <ContactPage />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
