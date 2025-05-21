import Heading from "@/components/Heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResearchIcon from "../assets/research-icon.png"
import IdeaIcon from "../assets/idea-icon.png"
import WireframeIcon from "../assets/Web Design.png"
import PrototypeIcon from "../assets/Prototype.png"
import React from "react";

const Process = () => {
  let design_process_data = [
    {
            process_icon: ResearchIcon,
      process_name: "Research",
      process_description: "Understanding client goals and user needs",
    },
    {
            process_icon: IdeaIcon,
      process_name: "Ideation",
      process_description: "Brainstorming and sketching concepts",
    },
    {
            process_icon: WireframeIcon,
      process_name: "Wireframming",
      process_description: "Creating low-fidelity wireframes for structure",
    },
    {
            process_icon: PrototypeIcon,
      process_name: "Prototyping",
      process_description: "Developing interactive prototypes",
    },
  ];
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[90%] h-auto flex gap-3 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading mb-4">
          <Heading
            frontText="Design Process"
            backText="Process"
            textSize="text-5xl"
          />
        </div>
        <div className="skills w-full grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-10 justify-center items-center">
          {design_process_data.map(
            ({ process_icon, process_name, process_description }, index) => (
              <Card key={index} className="processCard bg-[#f2ecec] shadow-lg max-md:max-w-[330px] max-md:mx-auto text-black">
                <CardContent className="h-[200px] flex justify-center items-center flex-col gap-3 text-center">
                  <img src={process_icon} alt={process_name} className="w-10 h-10" />
                  <h2 className="font-bold text-2xl">{process_name}</h2>
                  <p className="text-lg">{process_description}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
