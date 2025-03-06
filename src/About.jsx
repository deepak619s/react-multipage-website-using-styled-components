import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { useGlobalContext } from "./Context";

export const About = () => {
  // const data = {
  //   name: "Deep",
  //   image: "./images/about1.svg",
  // };

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, []);

  // return <HeroSection {...data}></HeroSection>;
  return <HeroSection></HeroSection>;
};
