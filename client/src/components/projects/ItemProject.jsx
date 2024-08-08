import React from "react";
import { LuExternalLink } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { redirectToLink } from "../../utils/helper";

const ProjectItem = ({ project }) => {
  return (
    <div className="group hover:scale-[1.025] transition duration-700 bg-neutral-100    w-full aspect-[1.15]  rounded-xl shadow-2xl">
      <div className=" max-h-1/2 relative">
         <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full bg-background-dark-950 bg-opacity-90 rounded-t-xl transition-all duration-300">
          <div className=" flex flex-row justify-center gap-6 sm:gap-12 items-center h-full">
          <button onClick={()=>redirectToLink(project.demo)} className=" flex flex-row-reverse items-center   gap-2 hover:gap-1 hover:pr-1 transition-all duration-300">
            <p className=" text-base sm:text-xl text-blue-bright font-medium  ">Live Demo</p>
             <LuExternalLink className=" text-neutral-200 pb-1" size={27} />
          </button>
         {!project.private && <button onClick={()=>redirectToLink(project.sourceCode)} className=" flex flex-row-reverse items-center gap-2 hover:gap-1 hover:pr-1 transition-all duration-300 ">
            <p className=" text-base sm:text-xl text-blue-bright font-medium  ">Source Code</p>
            <BsGithub  className=" text-neutral-200 pb-1" size={27} />
          </button>}
          </div>
         </div>
        <img src={project.image} alt={project.name} className="rounded-t-xl object-cover" />
      </div>
      <div className=" min-h-1/2 flex flex-col justify-center gap-2 px-2 sm:gap-4 sm:px-4 py-2">
        <h3 className=" text-neutral-400 group-hover:text-blue-bright transition duration-700 text-xl sm:text-2xl">{project.name}</h3>
        <p  className=" text-base sm:text-lg leading-8 text-neutral-500">{project.desc}</p>
        <div className=" flex flex-row gap-3">
          {project.stack.map((tool) => {
            return tool;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
