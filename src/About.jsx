import { HeroSection } from "./components/HeroSection";

export const About = () => {
  const data = {
    name: "Deep",
    image: "./images/about1.svg",
  };

  return <HeroSection {...data}></HeroSection>;
};
