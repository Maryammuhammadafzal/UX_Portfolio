import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Intro = () => {
  return (
    <div className="w-full my-6 pt-10 h-auto flex justify-center items-center">
      <div className="w-[55%] max-lg:w-[70%] max-md:w-[85%] h-auto flex justify-center max-md:flex-col items-center">
        <div
          data-aos="fade-up"
          className="left-content w-full flex flex-col gap-7 justify-center items-center"
        >

          <Heading
            frontText="Introduction"
            backText="Introduction"
            textSize="text-6xl"
          />
          <p className="text-lg max-md:text-[16px] max-sm:text-sm max-2xs:text-xs text-center font-normal">
            I’m [Your Name], a passionate UI/UX Designer dedicated to creating
            user-centric designs that not only look stunning but also function
            flawlessly. With a keen eye for detail and a user-first approach, I
            transform ideas into impactful digital experiences.
          </p>
          <div>
            <Button className="bg-cyan-500 flex gap-2 has-[>svg]:px-5 py-3 text-lg rounded-full max-xs:text-xs">
              More About Me <FaArrowRightLong />{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
