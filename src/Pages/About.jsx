import React, { useEffect, useRef, useState } from "react";
import AboutImage from "../assets/about-image.png";
import Heading from "@/components/Heading";
import Star from "../assets/Star.png";
const About = () => {
  // // const sectionRef = useRef(null);
  // // const [locked, setLocked] = useState(true);

  // // useEffect(() => {
  // //   const section = sectionRef.current;
  // //   console.log(section);

  // //   const lockedBodyScroll = () => {
  // //     if (locked) {
  // //       document.body.style.overflow = "hidden";
  // //     } else {
  // //       document.body.style.overflow = "";
  // //     }
  // //   };
  // //     const {scrollTop , scrollHeight , clientHeight} = section;


  // //   const handleScroll = () => {
  // //     if (!section) return;


  // //     if(scrollTop + scrollHeight >= clientHeight - 5) {
  // //       setLocked(false)
  // //     }
      
  // //   };

  // //   lockedBodyScroll();
  // //   section.addEventListener("scroll" , handleScroll);

  // //   return () => {
  // //       section.removeEventListener("scroll" , handleScroll);
  // //       document.body.style.overflow = "";
  // //   }

  // // }, [locked]);

  let about_card_data = [
    {
      about_me: "Expertise in user interface and user experience design",
    },
    {
      about_me: "Committed to solving design challenges creatively",
    },
    {
      about_me: "A portfolio of diverse and innovative design projects",
    },
    {
      about_me: "Proficient in Figma , Adobe XD , Sketch and more",
    },
  ];
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[95%] max-xl:w-full h-auto flex gap-3 justify-center max-md:flex-col max-md:space-y-5 items-center">
        <div className="left-image w-[35%] max-md:w-[85%] max-md:p-3 h-auto max-md:justify-center flex">
          <img
            src={AboutImage}
            className="w-auto h-auto object-cover"
            alt="About Image"
          />
        </div>
        <div className="right-content max-xl:w-[60%] w-[50%] max-md:w-[95%] border-l-8 flex flex-col items-start gap-4 border-sky-300 h-auto">
          <div className="content w-fit  flex flex-col gap-10">
            <div className="heading mb-4">
              <Heading
                frontText="Why Choose Me"
                backText="About Us"
                textSize="text-5xl"
              />
            </div>
            <div
              // ref={sectionRef}
              className="cards  max-lg:drop-shadow-2xl flex flex-wrap w-auto h-auto justify-center items-center gap-10 max-lg:h-[300px] max-lg:overflow-auto hide-scrollbar"
            >
              {about_card_data.map(({ about_me }, index) => (
                <div
                  key={index}
                  className="about-card w-[270px] h-[111px] max-lg:w-[80%] max-lg:h-[120px] relative bg-neutral-100 flex justify-center items-center"
                >
                  <img
                    src={Star}
                    alt="star"
                    className="absolute -top-7 -right-7"
                  />
                  <p className="text-black text-[16px] max-sm:text-sm font-semibold p-4 font-['Work Sans']">
                    {about_me}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
