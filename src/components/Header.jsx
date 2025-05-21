import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router";
const Header = () => {
  useEffect(() => {
Aos.init({
duration: 1000,
once: true,
});
}, []);

  let nav_data = [
    {
      nav_link: "/",
      nav_name: "Home",
    },
    {
      nav_link: "/about",
      nav_name: "About",
    },
    {
      nav_link: "/services",
      nav_name: "Services",
    },
    {
      nav_link: "/portfolio",
      nav_name: "Portfolio",
    },
    {
      nav_link: "/contact",
      nav_name: "Contact Us",
    },
  ];
  return (
    <div className="w-[75%] max-xl:w-[90%] max-lg:w-[95%] max-lg:justify-center h-auto flex justify-start items-center py-6">
      <div data-aos="fade-down" className="w-full ml-35 h-[70px] max-xl:ml-20 max-lg:ml-10 flex justify-between items-center">
        <div className="logo w-auto h-auto">
          <img src={Logo} className="w-[160px] h-[45px] max-md:w-[110px] max-md:h-[30px]" alt="logo UX pert" />
        </div>

        {window.innerWidth >= 768 ? (
          <nav className="w-auto h-auto flex justify-center items-center">
            <ul className="w-auto h-auto flex justify-center items-center gap-10 max-lg:gap-5">
              {nav_data.map(({ nav_link, nav_name }) => (
                <li key={nav_name} className="w-fit">
                  <Link to={nav_link} className="text-2xl max-lg:text-xl w-auto h-auto p-1 cursor-pointer focus:font-semibold hover:font-semibold font-medium">
                    {nav_name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <IoIosMenu size={40} />
        )}
      </div>
    </div>
  );
};

export default Header;
