import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Switch from "@mui/material/Switch";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function Navigation({ checked, themeToggler }) {
  return (
    <NavigationStyled>
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value="dark"
              inputProps={{ "aria-label": "Theme toggle switch" }}
              checked={checked}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-class" : "")}
            end
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>
          Copyright &copy; {new Date().getFullYear()}, <b>Ronak Mutha</b>
        </p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        z-index: 10;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 0.9rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
