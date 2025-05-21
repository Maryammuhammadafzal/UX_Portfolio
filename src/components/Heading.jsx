import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Heading = ({backText , frontText , textSize , left}) => {
         useEffect(() => {
            Aos.init({
              duration: 2000,
              once: true,
            });
          }, []);
        let headingClass = `${textSize} font-bold tracking-wide max-md:text-[48px] max-sm:text-[36px]  max-2xs:text-[32px]  text-[#0F172A] z-10  font-["Work Sans"]`
  return (
    <div className="relative mt-5 flex justify-center items-center">
      <h1 data-aos="zoom-in" className={`text-[90px] text-center text-border max-sm:text-6xl max-sm:-top-9 max-xs:-top-8 max-xl:text-[80px] max-2xs:text-[50px] font-['Work Sans'] font-bold absolute max-lg:-top-16 max-md:-top-14 -top-18 ${left} select-none`}>
        {backText}
      </h1>

      <h2 className={headingClass}>
        {frontText}
      </h2>
    </div>
  );
};

export default Heading;
