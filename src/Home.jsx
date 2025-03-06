import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { useGlobalContext } from "./Context";
import { Services } from "./Services";

export const Home = () => {
  // const data = {
  //   name: "Deepak Sinha",
  //   image: "./images/hero.svg",
  // };

  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  // return <HeroSection {...data}></HeroSection>;
  return (
    <>
      <HeroSection></HeroSection>
      <Services></Services>
    </>
  );
};
