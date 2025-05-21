import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import Heading from "@/components/Heading";
import Aos from "aos";
import "aos/dist/aos.css"

const Skills = () => {

  useEffect(()=> {
    Aos.init({
      duration:1000,
    })
  })
  const skills_data = [
    {
      skill_name: "UI/UX Design",
      skill_exp: 85,
    },
    {
      skill_name: "Web Design",
      skill_exp: 70,
    },
    {
      skill_name: "Branding",
      skill_exp: 90,
    },
    {
      skill_name: "Illustration",
      skill_exp: 50,
    },
  ];

 const [progresses, setProgresses] = useState(
  skills_data.map(() => 0)
);


  useEffect(() => {
  const timer = setTimeout(() => {
    const newProgresses = skills_data.map(({ skill_exp }) => skill_exp);
    setProgresses(newProgresses);
  }, 500);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[90%] max-lg:w-[98%] h-auto flex gap-3 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading mb-4">
          <Heading
            frontText="My Expertise"
            backText="Skills"
            textSize="text-5xl"
          />
        </div>
        <div className="skills w-full flex flex-col gap-10 justify-center items-center">
          {skills_data.map(({ skill_name, skill_exp }, index) => (
            <div
              key={index}
              className="w-full flex justify-between gap-6 max-lg:gap-3 items-center h-auto"
            >
              <h2 className="w-[280px] max-md:w-[260px] py-2 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-[16px] max-xs:text-sm font-bold px-4 bg-gradient-to-r from-cyan-400 to-50%  to-[#E5E5E5]">
                {skill_name}
              </h2>
              <Progress value={progresses[index]}  />
              <p className="font-bold text-2xl max-lg:text-xl max-md:text-lg max-sm:text-[16px] max-xs:text-sm">
                {skill_exp}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
