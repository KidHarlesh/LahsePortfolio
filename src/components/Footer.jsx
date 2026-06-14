import React, { useContext } from "react";
import Logo from "../assets/LasheImageHeroRemovebgA.webp";
import { NavContext } from "./NavContext";

const Footer = ({ onClick }) => {
  const navLinks = useContext(NavContext);

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800">
      <div className="container py-12">
        <div className="flex justify-center pb-8">
          <img src={Logo} alt="Lashe logo" className="w-12 h-12 rounded-full object-cover object-top border-2 border-slate-200 dark:border-zinc-800 grayscale dark:grayscale-0 opacity-80 dark:opacity-100" />
        </div>
        <nav className="pb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-base text-slate-600 dark:text-slate-200 font-semibold">
            {navLinks.slice(1).map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={onClick}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-slate-100 dark:border-zinc-800 pt-6">
           <p className="text-slate-500 dark:text-slate-200 text-center text-sm font-medium">
             &copy; {new Date().getFullYear()} LasheTech. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
