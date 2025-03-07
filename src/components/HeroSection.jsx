import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

import { useGlobalContext } from "../Context";

export const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me.</p>
          <h1 className="hero-para">{name}</h1>
          <p className="hero-para">
            I'm {name}. A full stack developer, gamer. A full stack developer,
            gamer. A full stack developer, gamer
          </p>

          <NavLink to="/contact">
            <Button className="btn hireme-btn">Hire Me</Button>
          </NavLink>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero-img" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    text-align: justify;
    margin-left: 50px;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
