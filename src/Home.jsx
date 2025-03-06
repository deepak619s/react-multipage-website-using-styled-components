import { HeroSection } from "./components/HeroSection";

export const Home = () => {
  const data = {
    name: "Deepak Sinha",
    image: "./images/hero.svg",
  };
  return <HeroSection {...data}></HeroSection>;
};
