// src/assets/pages/About/DetailAbout.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import aboutImage from "../../../assets/images/my_image/aboutMain1.png";

const DetailAbout = () => {
  return (
    <div className="min-h-screen px-20 pt-20 pb-10">
      <h1 className="text-5xl text-emerald-300 font-bold ">About Me</h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center  min-[768px]:flex-row md:gap-8 lg:gap-8">
          <div className="max-[768px]:w-[70%]">
            <img
              src={aboutImage}
              alt="Yosef Azeneg"
              className="rounded-lg w-full"
            />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-[var(--subtitle-button)]">
              Full-Stack MERN Developer
            </h2>

            <div className="space-y-5 ">
              <p className="text-1xl text-white/70 font-semibold">
                I'm a passionate Full-Stack Developer specializing in the MERN
                stack (
                <span className="text-emerald-300 font-bold">
                  MongoDB, Express.js, React.js, Node.js
                </span>
                ). My journey combines{" "}
                <span className="text-emerald-300 font-bold">
                  Computer Science
                </span>{" "}
                with{" "}
                <span className="text-emerald-300 font-bold">
                  Mechanical Engineering
                </span>{" "}
                at Addis Ababa University , giving me a unique perspective on
                problem-solving.
              </p>

              <p className="text-1xl text-white/70 font-semibold">
                This dual background allows me to approach software development
                with both technical precision and creative engineering thinking.
                I focus on building applications that are not only functional
                but also scalable, maintainable, and user-friendly.
              </p>

              <p className="text-1xl text-white/70 font-semibold">
                My experience includes creating complete web applications from
                frontend interfaces to backend APIs and database design. I enjoy
                tackling complex challenges and transforming them into elegant
                solutions.
              </p>

              <Link to="/" className="w-full">
                <div className="bg-[var(--subtitle-button)] flex items-center gap-1 py-2 rounded-[10px] cursor-pointer">
                  <FaHome className="ml-4 cursor-pointer" /> Home
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAbout;
