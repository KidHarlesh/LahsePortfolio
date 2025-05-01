import React, { useContext } from "react";
import Logo from "../assets/lasheToolsBg.png";
import { NavContext } from "./NavContext";

const Footer = ({ onClick }) => {
  const navLinks = useContext(NavContext);
  return (
    <section className="bg-gradient-to-r from-[#000428] to-[#020330] ">
      <div className="containers py-10">
        <div className="flex justify-center pb-5">
          <img src={Logo} alt="logo" className="w-[44px] max-h-[92px]" />
        </div>
        <nav className="pb-8">
          <ul className="flex justify-center gap-8 text-xl  text-[#DDDDDD] font-semibold">
            {navLinks.slice(1).map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={onClick}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[#DDDDDD] font-medium lg:font-semibold  text-center">
          <span className="text-[#636363B3]">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
          </span>
          LasheTech.
        </p>
      </div>
    </section>
  );
};

export default Footer;
