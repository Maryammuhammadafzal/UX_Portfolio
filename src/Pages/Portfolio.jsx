import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PortfolioImage1 from "../assets/portfolio-image1.png";
import PortfolioImage2 from "../assets/portfolio-image2.png";
import PortfolioImage3 from "../assets/portfolio-image3.png";

import Aos from "aos";
import "aos/dist/aos.css"

const Portfolio = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });
  const portfolio_data = [
    {
      project_image: PortfolioImage1,
      project_title: "Project Name",
      project_description:
        " Explore a selection of my design projects that highlight creativity, strategy, and user-focused solutions.",
      project_category: "Web Design",
      project_tools: "Figma , Adobe XD",
    },
    {
      project_image: PortfolioImage2,
      project_title: "Project Name",
      project_description:
        " Explore a selection of my design projects that highlight creativity, strategy, and user-focused solutions.",
      project_category: "Web Design",
      project_tools: "Figma , Adobe XD",
    },
    {
      project_image: PortfolioImage3,
      project_title: "Project Name",
      project_description:
        " Explore a selection of my design projects that highlight creativity, strategy, and user-focused solutions.",
      project_category: "Web Design",
      project_tools: "Figma , Adobe XD",
    },
  ];
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[90%] max-lg:w-[95%] h-auto flex gap-3 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading mb-4">
          <Heading
            frontText="My Work"
            backText="Portfolio"
            textSize="text-5xl"
          />
        </div>
        <div className="portfolio w-full grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-10 justify-center items-center">
          {portfolio_data.map(
            (
              {
                project_image,
                project_title,
                project_description,
                project_tools,
                project_category,
              },
              index
            ) => (
              <Card
                key={index}
                className={`portfolioCard bg-[#f2ecec] shadow-lg max-lg:max-w-[440px] max-md:mx-auto text-black rounded-lg pt-0 ${
                  index === 2 && "max-xl:hidden"
                }`}
              >
                <CardHeader className="px-0">
                  <img
                    data-aos="zoom-in"
                    src={project_image}
                    alt={project_title}
                    className="w-full h-[250px] object-fill rounded-lg hover:animate-zoom"
                  />
                </CardHeader>
                <CardContent className="max-sm:px-2">
                  <div className="flex flex-col gap-4 ">
                    <h2 className="font-bold text-2xl">{project_title}</h2>
                    <div className="flex justify-between items-center">
                      <p className="text-sm max-sm:text-xs">
                        <span className="font-semibold">Category: </span>
                        {project_category}
                      </p>
                      <p className="text-sm max-sm:text-xs">
                        <span className="font-semibold">Tools Used: </span>
                        {project_tools}
                      </p>
                    </div>
                    <p className="text-[16px] max-sm:text-sm">
                      <span className="font-semibold">Overview: </span>{" "}
                      {project_description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="max-sm:px-2">
                  <Button className="bg-cyan-500 mt-2 flex gap-2 has-[>svg]:px-5 py-3 text-lg rounded-full max-xs:text-xs">
                    View Project <FaArrowRightLong />
                  </Button>
                </CardFooter>
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

export default Portfolio;
