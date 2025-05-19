import Heading from "@/components/Heading";
import React, { useEffect } from "react";
import HeroImage from "../assets/Hero-image.png";
import Vector from "../assets/Vector.png";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Process from "./Process";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col gap-40 overflow-hidden">
      <div className="w-full my-10 h-auto flex justify-center items-center">
        <div className="w-[90%] h-auto flex justify-center max-md:flex-col items-center">
          <div
            data-aos="fade-right"
            className="left-content max-md:w-[90%] max-md:px-10 max-sm:px-0 w-[55%] max-xs:w-full flex flex-col gap-7 justify-center "
          >
            <div className="relative flex justify-center items-center">
              <h1 data-aos="zoom-in" className="text-[100px] text-border max-xs:text-[50px] max-xl:text-[80px] max-lg:text-[60px] max-lg:-top-10 max-2xs:text-[45px] font-['Work Sans'] font-bold absolute -top-18 left-0 select-none">
                John Smith
              </h1>

              <h2 className="text-7xl font-bold tracking-wide max-xs:text-4xl  max-xl:text-6xl  max-lg:text-[45px] max-2xs:text-3xl max-2xs:leading-9 max-lg:leading-15 max-sm:leading-12 max-xs:text-9 text-[#0F172A] z-10 leading-25 font-['Sunflower']">Welcome To John's Creative Space</h2>
            </div>
            <p className="text-xl max-lg:text-[16px] max-sm:text-sm max-2xs:text-xs font-normal pr-5">
              Crafting Seamless Digital Experiences. Designing intuitive
              interfaces that inspire, engage, and convert. Let’s build
              something amazing together
            </p>
            <div>
              <Button className="bg-cyan-500 has-[>svg]:px-5 py-3 text-lg rounded-full max-xs:text-xs">
                Explore My Work <FaArrowRightLong />{" "}
              </Button>
            </div>
          </div>

          <div className="right-image w-[40%] max-md:w-[80%] max-xs:w-full max-md:p-10 h-auto flex pl-5">
            <div
              data-aos="zoom-in"
              className="relative flex justify-center items-center"
            >
              <img
                src={Vector}
                alt="Vector"
                className="-z-10 absolute top-40 left-0 max-lg:top-28 max-xl:top-35"
              />
              <img src={HeroImage} alt="Hero Image" className="" />
              <div className="eclipes absolute bg-gradient-to-tl from-cyan-900 to- to-sky-300  w-[250px] h-[250px] blur-[130px] rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <About />
      <Skills />
      <Process />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
