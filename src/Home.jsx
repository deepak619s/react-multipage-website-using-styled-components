import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { useGlobalContext } from "./Context";

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
  return <HeroSection></HeroSection>;
};
