import React, { useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { BsGithub } from "react-icons/bs";
import { redirectToLink } from "../../utils/helper";

const ProjectItem = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group hover:scale-[1.025] transition duration-700 bg-neutral-100 w-full h-[500px] rounded-xl shadow-2xl flex flex-col">
      <div className="h-[240px] relative overflow-hidden">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 w-full h-full bg-neutral-200 animate-pulse rounded-t-xl z-0"></div>
        )}
        <div className="absolute opacity-0 group-hover:opacity-100 w-full h-full bg-background-dark-950 bg-opacity-90 rounded-t-xl transition-all duration-300 z-20">
          <div className="flex flex-row justify-center gap-6 sm:gap-12 items-center h-full">
            <button onClick={()=>redirectToLink(project.demo)} className="flex flex-row-reverse items-center gap-2 hover:gap-1 hover:pr-1 transition-all duration-300">
              <p className="text-base sm:text-xl text-blue-bright font-medium">Live Demo</p>
              <LuExternalLink className="text-neutral-200 pb-1" size={27} />
            </button>
            {!project.private && <button onClick={()=>redirectToLink(project.sourceCode)} className="flex flex-row-reverse items-center gap-2 hover:gap-1 hover:pr-1 transition-all duration-300">
              <p className="text-base sm:text-xl text-blue-bright font-medium">Source Code</p>
              <BsGithub className="text-neutral-200 pb-1" size={27} />
            </button>}
          </div>
        </div>
        <img 
          src={project.image} 
          alt={project.name} 
          className="rounded-t-xl w-full h-full object-cover z-10 relative"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="text-neutral-400 group-hover:text-blue-bright transition duration-700 text-xl sm:text-2xl">{project.name}</h3>
          <p className="text-base sm:text-lg leading-7 text-neutral-500 line-clamp-3 mt-2">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {project.stack.map((tool, index) => (
            <span key={index} className="transition-transform hover:scale-110">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

