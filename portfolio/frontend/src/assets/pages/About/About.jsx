import React from "react";
import aboutImage from "../../../assets/images/my_image/aboutMain1.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col min-[768px]:flex-row items-center justify-center w-[88%] mx-auto gap-8 ">
      <div className="hidden  min-[768px]:block">
        <img src={aboutImage} alt="About Me" />
      </div>
      <div>
        <h1 className={`text-5xl text-emerald-300 font-bold mb-3`}>About Me</h1>
        <h3 className="text-2xl font-bold text-[var(--subtitle-button)] mb-1">
          Full-Stack MERN Developer{" "}
        </h3>
        <p className={`font-semibold mb-4`}>
          I combine strong technical skills in the MERN stack with a
          dual-perspective from{" "}
          <span className={`text-[var(--subtitle-button)] font-bold`}>
            Computer Science
          </span>{" "}
          and{" "}
          <span className={`text-[var(--subtitle-button)] font-bold`}>
            Mechanical Engineering
          </span>
          . My focus is on building robust, user-centric applications that
          translate technology into practical solutions for real-world
          challenges.
        </p>
        <Link
          to="/about-details"
          smooth={true}
          duration={500}
          className={`group inline-block bg-[var(--subtitle-button)] text-white px-4 py-2 mt-3 rounded-3xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
          Read More
          <FaArrowRight
            className="inline-block ml-2  group-hover:animate-pulse
            "
          />
        </Link>
      </div>
    </section>
  );
};

export default About;
