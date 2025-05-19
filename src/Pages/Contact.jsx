import React from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import Heading from "@/components/Heading";
import CardImage from "../assets/bussiness-card-image.png";
const Contact = () => {
  return (
    <div className="w-full mb-5 h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[85%] max-xl:w-full h-auto flex gap-4 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading w-full mb-4">
          <Heading
            frontText="Get In Touch"
            backText="Contact Us"
            textSize="text-5xl"
          />
        </div>
        <div className="flex justify-center items-center w-full h-auto gap-3">
          <div className="card w-[60%] h-auto flex justify-end items-end ">
            <div className="businessCard p-3 max-w-[658px] rounded-lg shadow-2xs relative overflow-visible border border-neutral-100 bg-neutral-100 flex justify-between gap-2 w-full h-[250px]">
              <div className="content w-[55%] flex flex-col gap-2 p-3">
                <h2 className="text-2xl font-bold">
                  Let’s Build Something Great Together!
                </h2>
                <p className="text-sm">
                  Ready to bring your ideas to life? Whether you have a project
                  in mind or just want to chat about design, I’m here to help.
                </p>
                <div className="socialLink w-full gap-3 mt-5 px-2 flex text-cyan-400">
                  <IoLogoFacebook size={25} />
                  <IoLogoTwitter size={25} />
                  <IoLogoLinkedin size={25} />
                </div>
              </div>
              <div className="cardImage w-auto h-auto">
                <img src={CardImage} alt="bussiness card image" className=" absolute -right-5 bottom-0 w-[320px] h-[469px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
