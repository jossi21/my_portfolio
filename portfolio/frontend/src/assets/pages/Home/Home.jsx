import React, { useEffect, useState } from "react";
import {
  FaEnvelope, // Email
  FaTelegram, // Telegram
  FaGithub, // GitHub
  FaLinkedin, // LinkedIn
  FaPhone,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../../../utils/constants";
import myImage from "../../../assets/images/my_image/homeMain1.png";
import { Link } from "react-router-dom";

const Home = () => {
  // setup animated skill
  const roles = [
    "MERN Full-Stack Developer",
    "Computer Science Student",
    "Mechanical Engineering Student",
  ];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // setup useEffect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      // We're typing
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        // Finished typing - pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      //setup deleting functionality
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        // Finished deleting - reset and move to next role after pause
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);

          // Reset charIndex for next role
          setCharIndex(0);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className={`flex gap-8 justify-center items-center mt-12`}
    >
      <div className={``}>
        <h1
          className={`text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent my-4`}
        >
          Yosef Azeneg
        </h1>
        <h3 className={`text-3xl font-bold mt-10 mb-5`}>
          I'm{" "}
          <span className={`text-[var(--subtitle-button)]`}>
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h3>
        <p className={`font-semibold`}>
          Self-motivated MERN Full Stack Developer, learning and building web
          applications independently. Skilled in MongoDB, Express.js, React.js,
          and Node.js, with hands-on experience in creating dynamic front-end
          interfaces and scalable back-end solutions. Passionate about
          continuous learning and delivering practical, user-friendly
          applications.
        </p>
        <div className={`flex  gap-5 mt-4 mb-8`}>
          <Link
            to={PERSONAL_INFO.linkedin}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaLinkedin size={20} color="#06b6d4" />
          </Link>
          <Link
            to={PERSONAL_INFO.whatsapp}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaWhatsapp size={20} color="#06b6d4" />
          </Link>
          <Link
            to={PERSONAL_INFO.email}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaEnvelope size={20} color="#06b6d4" />
          </Link>
          <Link
            to={PERSONAL_INFO.telegram}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaTelegram size={20} color="#06b6d4" />
          </Link>

          <Link
            to={PERSONAL_INFO.phone}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaPhone size={20} color="#06b6d4" />
          </Link>
          <Link
            to={PERSONAL_INFO.github}
            className="rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FaGithub size={20} color="#06b6d4" />
          </Link>
        </div>
        <a
          // onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
          href="/Yosef_Azeneg_cv.pdf"
          download="Yosef_Azeneg_Resume.pdf"
          className={`group inline-flex items-center gap-2 hover:bg-blue-700 hover:scale-105 bg-[var(--subtitle-button)] text-white  px-6 py-2 font-bold cursor-pointer transition-all duration-300 rounded-3xl`}
        >
          <FaDownload className="group-hover:animate-bounce" /> Download CV
        </a>
      </div>
      <div className={``}>
        <img className={``} src={myImage} alt="" />
      </div>
    </section>
  );
};

export default Home;
