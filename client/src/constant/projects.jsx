import {
  SiC,
  SiCsharp,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiMongodb
} from "react-icons/si";
const iconSize=30;
const projects=[
    {
        name:"Personal portfolio",
        desc:"Built with React to showcase skills and projects in a dynamic, personalized format.",
        image:"./images/projects/portfolio-pic.png",
        stack:[
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
            <SiNestjs size={iconSize}  className="text-red-600" /> 
        ],
        sourceCode:"/",
        demo:"/",
        private:false
    },
    {
        name:"weather app",
        desc:"Built with React, this app provides real-time weather updates and accurate forecasts.",
        image:"./images/projects/weather-app-pic.png",
        stack:[
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
            <SiCss3 size={iconSize}  className="text-blue-600" />
        ],
        sourceCode:"https://github.com/akhribabderahmane/weather-app",
        demo:"https://akhribabderahmane.github.io/weather-app/",
        private:false
    },
    {
        name:"Country API",
        desc:"A React application to search and display detailed information about any country.",
        image:"./images/projects/country-api-pic.png",
        stack:[
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
            <SiCss3 size={iconSize}  className="text-blue-600" />
        ],
        sourceCode:"https://github.com/akhribabderahmane/country-api",
        demo:"https://akhribabderahmane.github.io/country-api/",
        private:false
    },
    {
        name:"Admin dashboard",
        desc:"Built with React, Material UI, and Nova for efficient admin task management",
        image:"./images/projects/admin-dashboard-pic.png",
        stack:[
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
            <SiMui size={iconSize}  className="text-blue-500" />
        ],
        sourceCode:"https://github.com/akhribabderahmane/admin-dashboard",
        demo:"https://akhribabderahmane.github.io/admin-dashboard/",
        private:false
    },
    {
        name:"Esi cup fantazy",
        desc:"React, Framer Motion, and Django-based app for managing fantasy football teams.",
        image:"./images/projects/fantazy-pic.png",
        stack:[
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
        ],
        sourceCode:"https://github.com/Sport-and-Entertainment-Club/esi-cup-fantasy",
        demo:"https://ecf.sec-esi.club/overview/news",
        private:true
    },
    {
        name:"ArchiMind",
        desc:"A C# desktop app for easy and engaging computer architecture learning.",
        image:"./images/projects/ArchiMind-pic.png",
        stack:[
            <SiCsharp size={iconSize}  className="text-purple-600" />
        ],
        sourceCode:"https://github.com/aminetech26/SimulationMachinePedagogique",
        demo:"https://archimind.netlify.app/",
        private:false
    },
    {
        name:"Open source website",
        desc:"A registration platform for an event, powered by React and React Hook Forms for seamless user interaction.",
        image:"./images/projects/openSource-pic.png",
        stack:[
            <SiNextdotjs size={iconSize}  className="text-black" /> ,
            <SiReact size={iconSize} className="text-blue-500" />,
            <SiJavascript size={iconSize}  className="text-yellow-500" /> ,
            <SiTailwindcss size={iconSize}  className="text-teal-500" />,
        ],
        sourceCode:"https://github.com/ScientificClubofESI/open-source-event-website",
        demo:"https://open-source-day-2023.cse.club/",
        private:true
    },
    
]


export default projects;