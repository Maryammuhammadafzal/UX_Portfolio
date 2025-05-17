import React from "react";
import AboutImage from "../assets/about-image.png";
import Heading from "@/components/Heading";
import Star from "../assets/Star.png"
const About = () => {
        let about_card_data = [
                {
                        about_me: "Expertise in user interface and user experience design"
                },
                {
                        about_me: "Committed to solving design challenges creatively"
                },
                {
                        about_me: "A portfolio of diverse and innovative design projects"
                },
                {
                        about_me: "Proficient in Figma , Adobe XD , Sketch and more"
                },
        ]
  return (
    <div className="w-full py-10 my-10 h-auto flex justify-center items-center">
      <div className="w-[90%] h-auto flex justify-center max-md:flex-col items-center">
        <div className="left-image w-[40%] h-auto flex">
          <img src={AboutImage} className="w-auto h-auto" alt="About Image" />
        </div>
        <div className="right-content w-[50%] border-l-8 flex flex-col items-start gap-4 border-sky-300 h-auto">
          <div className="content w-fit  flex flex-col gap-10">
           <div className="heading">
                 <Heading
              frontText="Why Choose Me"
              backText="About Us"
              textSize="text-5xl"
            />
           </div>
            <div className="cards flex flex-wrap w-auto h-auto justify-center items-center gap-10">
{
        about_card_data.map(({about_me})=> (
                <div className="about-card w-[270px] h-[111px] relative bg-neutral-100 flex justify-center items-center">
                        <img src={Star} alt="star" className="absolute -top-7 -right-7"/>
                        <p className="text-black text-[16px] font-semibold p-4 font-['Work Sans']">{about_me}</p>
                </div>
        ))
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
