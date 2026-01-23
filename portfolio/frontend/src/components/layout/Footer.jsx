import React from "react";
import {
  FaEnvelope,
  FaTelegram,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { PERSONAL_INFO } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="bg-header h-full bottom-0 left-0 right-0 pb-3">
      <div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-[70%] mx-auto gap-12  text-white/60 p-4 `}
        >
          <div className=" ">
            <h4 className="text-2xl font-bold mb-3 pb-1 text-white/60 border-b-[2px] ">
              Contact
            </h4>
            <Link
              to={PERSONAL_INFO.email}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaEnvelope size={20} color="#06b6d4" />
              Email
            </Link>
            <Link
              to={PERSONAL_INFO.phone}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaPhone size={20} color="#06b6d4" />
              +251925553491
            </Link>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3 pb-1 text-white/60 border-b-[2px] ">
              Social Media
            </h4>
            <Link
              to={PERSONAL_INFO.linkedin}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaLinkedin size={20} color="#06b6d4" />
              LinkedIn
            </Link>
            <Link
              to={PERSONAL_INFO.whatsapp}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaWhatsapp size={20} color="#06b6d4" />
              Whatsapp
            </Link>
            <Link
              to={PERSONAL_INFO.telegram}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaTelegram size={20} color="#06b6d4" />
              Telegram
            </Link>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-3 pb-1 text-white/60 border-b-[2px] ">
              Others
            </h4>
            <div className="flex items-center gap-2 cursor-pointer">
              <Link to={PERSONAL_INFO.github}>
                <FaGithub size={20} color="#06b6d4" />
              </Link>
              <h1>Git </h1>
            </div>
          </div>
        </div>
        <div className="pt-6 flex items-center justify-between mx-6">
          <div className="flex font-bold items-center text-white/70 gap-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Yosef Azeneg</span>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
