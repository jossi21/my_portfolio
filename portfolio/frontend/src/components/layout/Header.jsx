import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  // make header responsive using react and tailwindcss
  const [isMobile, setIsMobile] = useState(false);

  // set the function
  const toggleMobileMenu = () => {
    setIsMobile((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav
      className={`bg-header fixed top-0 left-0 w-full  z-50  ${classes.navbar}`}
    >
      <div
        className={`max-w-[1200px] mx-auto p-4 flex items-center justify-between `}
      >
        <div
          className={`text-2xl  bg-header
          text-center font-bold z-20 cursor-pointer ${classes.logo}`}
        >
          <Link to="home" smooth duration={700}>
            JOSSI
          </Link>
        </div>
        {!isMobile && (
          <div
            onClick={toggleMobileMenu}
            className={`cursor-pointer md:hidden ${classes.bars_icon}`}
          >
            <FaBars size={20} />
          </div>
        )}
        {isMobile && (
          <div
            className={`cursor-pointer md:hidden z-20 ${classes.close_icon}`}
            onClick={toggleMobileMenu}
          >
            <FaTimes size={20} />
          </div>
        )}
        {/* Mobile Navigation */}
        {isMobile ? (
          <div
            className={`bg-header overflow-hidden flex flex-col fixed z-10 top-0 left-0 w-screen min-h-screen justify-center items-center gap-6 duration-900 ease-in-out font-bolder ${classes.mobile_menu}`}
          >
            <Link to="home" smooth duration={700} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="about" smooth duration={700} onClick={closeMobileMenu}>
              About
            </Link>
            <Link to="projects" smooth duration={700} onClick={closeMobileMenu}>
              Projects
            </Link>

            <Link to="skills" smooth duration={700} onClick={closeMobileMenu}>
              Skills
            </Link>

            <Link to="contact" smooth duration={700} onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
        ) : (
          <div
            className={`bg-header overflow-hidden flex flex-col fixed z-10 top-[-150%] left-0 w-screen min-h-screen justify-center items-center gap-6 duration-900 ease-in ${classes.mobile_menu}`}
          ></div>
        )}
        <div
          className={`items-center font-bold gap-8 hidden md:flex ${classes.nav_links}`}
        >
          <Link to="home" smooth="true" duration={700}>
            Home
          </Link>

          <Link to="about" smooth="true" duration={700}>
            About
          </Link>
          <Link to="projects" smooth="true" duration={700}>
            Projects
          </Link>
          <Link to="skills" smooth="true" duration={700}>
            Skills
          </Link>

          <Link to="contact" smooth="true" duration={700}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
