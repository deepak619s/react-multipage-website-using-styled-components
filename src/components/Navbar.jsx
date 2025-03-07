import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useState } from "react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/services"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* nav icon */}
        <div className="mobile-navbar-btn">
          {!openMenu ? (
            <CgMenu
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
          ) : (
            <CgCloseR
              className="close-outline mobile-nav-icon"
              onClick={() => setOpenMenu(false)}
            />
          )}
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        text-decoration: none;

        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 1001;
    }

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
      cursor: pointer;
      z-index: 1001;
    }

    .close-outline {
      display: none;
    }

    .active .mobile-nav-icon {
      display: none;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;
      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-in-out;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;
