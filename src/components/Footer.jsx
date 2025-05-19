import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
        let nav_data = [
    {
      nav_link: "/",
      nav_name: "Home",
    },
    {
      nav_link: "/",
      nav_name: "About",
    },
    {
      nav_link: "/",
      nav_name: "Services",
    },
    {
      nav_link: "/",
      nav_name: "Portfolio",
    },
    {
      nav_link: "/",
      nav_name: "Contact Us",
    },
  ];
  return (
    <div className="w-full h-auto flex justify-center items-center py-10">
      <div className="w-[90%] h-auto p-3 flex flex-col justify-center items-center">
        {/* Footer */}
        <div className="content flex  max-md:flex-col justify-between items-start gap-10">
          {/* Section 1 */}
          <div className="w-[30%] flex flex-col gap-3">
            <div className="logo w-auto h-auto">
              <img
                src={Logo}
                className="w-[160px] h-[45px] max-md:w-[110px] max-md:h-[30px]"
                alt="logo UX pert"
              />
            </div>
            <p className="text-[16px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              recusandae corporis rerum maxime provident excepturi autem
              officiis sed! Tempora dignissimos cupiditate blanditiis modi ab
              suscipit, eaque perferendis totam tempore molestias!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-cyan-500 text-xl font-bold">Quick Links</h4>
            <nav className="w-auto h-auto flex justify-center items-center">
              <ul className="w-auto h-auto flex flex-col justify-center gap-3">
                {nav_data.map(({ nav_link, nav_name }) => (
                  <li className="w-fit p-1">
                    <a
                      href="/"
                      className="text-lg max-lg:text-[16px] cursor-pointer focus:font-semibold hover:font-semibold font-medium"
                    >
                      {nav_name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="contact w-[30%] gap-3 flex flex-col">
                <h4 className="text-cyan-500 text-xl font-bold">Contact Information</h4>
                <ul className="flex flex-col gap-3">
                        <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                        <li>jessica.hanson@example.com</li>
                        <li>(308) 555-0121</li>
                </ul>
          </div>
        </div>
        {/* Copy Right */}
        <div className="copyright flex max-md:flex-col justify-between p-3 items-center w-full">
          <p className="text-[16px]">
            © 2021 all copyright reserved. All Rights Reserved.
          </p>
          <ul className="flex gap-6 justify-center items-center">
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
