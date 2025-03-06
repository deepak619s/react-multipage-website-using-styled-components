import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

export const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Sevices</h2>
      <div className="container grid grid-three-column">
        {services.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <div key={id} className="card">
              <h1>{id}</h1>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{body}</p>
                <NavLink to="/services">
                  <Button>Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
