import React, { useEffect } from "react";
import { projects } from "../../../data/projects";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section className="w-[89%] relative text-center mx-auto">
      <h1 className="text-5xl text-emerald-300 font-bold mb-10">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project) => (
          <div key={project.id} className="cursor-pointer block">
            <a href={project.demoUrl} target="block" rel="noopener noreferrer">
              <div
                className="h-100 w-full rounded-xl bg-cover bg-center aspect-video relative overflow-hidden hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute  bottom-0 left-0 right-0 w-full h-40 bg-gradient-to-t from-black/100 via-black/95 to-transparent  p-2 font-bold">
                  <h2 className="text-3xl text-[var(--subtitle-button)]">
                    {project.title}
                  </h2>
                  <p>{project.description}</p>
                  <a
                    href={project.githubUrl}
                    className="absolute bottom-0 rounded-full p-1  flex items-center justify-center border border-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
                  >
                    <FaGithub size={20} color="#06b6d4" />
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
