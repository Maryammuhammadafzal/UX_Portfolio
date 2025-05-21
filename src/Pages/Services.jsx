import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Aos from "aos";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "aos/dist/aos.css"
const Services = () => {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      once: true,
    })
  })
  const services_data = [
    {
      service_title: "UI/UX Design",
      service_description:
        "Designing intuitive user interfaces and delightful user experiences that align with your brand identity and engage your audience.",
    },
    {
      service_title: "Prototyping & Wireframing",
      service_description:
        "Developing interactive prototypes and wireframes to visualize the product's structure and flow before development.",
    },
    {
      service_title: "Web Design",
      service_description:
        "Crafting responsive, visually appealing websites that provide seamless navigation and a memorable user journey.",
    },
    {
      service_title: "User Research & Testing",
      service_description:
        "Conducting in-depth user research, usability testing, and feedback analysis to create data-driven design solutions.",
    },
    {
      service_title: "Mobile App Design",
      service_description:
        "Creating user-centric mobile app designs that prioritize usability and enhance user retention.",
    },
    {
      service_title: "Design Consultation",
      service_description:
        "Offering expert design advice to elevate your digital presence and improve user satisfaction.",
    },
  ];
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[90%] h-auto flex gap-3 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading mb-4">
          <Heading
            frontText="What I Offer"
            backText="Services"
            textSize="text-5xl"
          />
        </div>
        <div className="skills w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 justify-center items-center">
          {services_data.map(
            ({ service_title, service_description }, index) => (
              <Card data-aos="fade-up" className={`serviceCard flex flex-row bg-[#f2ecec] shadow-lg max-md:mx-auto text-black max-lg:mt-0 ${index === 1 && "mt-50"} ${index !== 1 && "-mt-50"} ${index === 4 && "mt-10"} `}>
                <hr className="w-8 h-[200px] bg-cyan-400 rounded-tr-xl rounded-br-xl" />
                <CardContent className="h-[200px] max-sm:px-0 flex justify-center flex-col gap-3 text-start">
                  <h2 className="font-bold text-2xl max-sm:text-lg max-md:text-xl">{service_title}</h2>
                  <p className="text-[16px] max-sm:text-sm">{service_description}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
        <div>
          <Button className="bg-cyan-500 mt-10 flex gap-2 has-[>svg]:px-5 py-3 text-lg rounded-full max-xs:text-xs">
            Let's Discuss Your Project <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
