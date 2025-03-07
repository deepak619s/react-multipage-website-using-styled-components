import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import styled from "styled-components";

export const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo">
        Deepak
      </NavLink>

      <Navbar></Navbar>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 6.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
    font-size: 30px;
    text-decoration: none;
    color: Blue;
  }
`;
