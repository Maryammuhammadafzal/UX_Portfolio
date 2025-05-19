import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-auto flex max-xl:py-3 justify-center items-center">
      <div className="w-[85%] max-xl:w-full h-auto flex gap-4 justify-center flex-col max-md:space-y-5 items-center">
        <div className="heading mb-4">
          <Heading
            frontText="Get In Touch"
            backText="Contact Us"
            textSize="text-5xl"
          />
        </div>
        <div className="flex justify-center items-center w-full h-auto gap-3">
          <div className="card w-[60%] h-auto flex justify-end items-end">
            <div className="businessCard max-w-[658px] rounded-lg shadow-2xs border border-neutral-100 bg-neutral-100 flex justify-center gap-2 w-full h-auto">
              <div className="content w-1/5 flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Let’s Build Something Great Together!</h2>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
