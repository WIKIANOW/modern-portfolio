import { useEffect, useRef } from "react";
import {
  Navbar,
  Hero,
  Ability,
  Stats,
  Education,
  Contacts,
  Footer,
} from "./components";
import Feedback from "./components/Feedback";
import Projects from "./components/Projects";

const App = () => {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    console.clear();

    const handleScroll = () => {
      if (scrollY === 0) {
        navbarContainerRef.current.classList.remove(
          "navbar-glass",
          "navbar-ease-out"
        );
      }
      if (scrollY > 0) {
        navbarContainerRef.current.classList.add(
          "navbar-glass",
          "navbar-ease-in"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-primary font-poppins text-white">
      <div ref={navbarContainerRef} className="fixed w-full top-0 z-50">
        <div className="lg:max-w-[1440px] m-auto w-full">
          <Navbar />
        </div>
      </div>
      <div className="max-w-[1440px] m-auto w-full z-[1]">
        <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
          <Hero />
          <Stats />
          <Ability />
          <Projects />
          <Education />
          <Feedback />
          <Contacts />
          <Footer />
          <div className="absolute w-[195px] h-[324px] -left-[97px] top-[170px] blur-[280px] bg-white  z-[0]" />
          <div className="absolute w-[82.5px] h-[162px] -left-[1000px] top-[170px] blur-[280px] bg-secondary  z-[0]" />
          <div className="absolute w-[436.52px] h-[544.07px] left-[1000px] -top-[29px] blur-[300px] rounded-[200px] rotate-[47.46deg] bg-gradient-to-r from-[#1a2980] to-[#26d0ce] z-0" />
          <div className="absolute w-[405px] h-[471px] left-[257.09px] top-[1825.18px] bg-white/[0.6] blur-[370px] rotate-[176.62deg] z-[0]" />
          <div className="absolute w-[436.52px] h-[544.07px] left-[1100px] top-[3200px] bg-gradient-to-r from-[#1a2980] to-[#26d0ce] blur-[300px] rounded-[200px] rotate-[47.46deg] z-0" />
        </div>
      </div>
    </div>
  );
};

export default App;
