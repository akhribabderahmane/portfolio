import { FaBriefcase } from 'react-icons/fa';

const CareerItem = ({ career }) => {
  return (
    <div className="flex flex-row gap-4 items-center border-2 border-neutral-300 dark:border-neutral-500 p-2 sm:p-6 rounded-xl">
      <div className="flex items-center justify-center bg-blue-50 dark:bg-neutral-700 p-4 rounded-lg">
        {career.logo ? (
          <img
            className="w-12 sm:w-20"
            src={career.logo}
            alt={career.company}
          />
        ) : (
          <FaBriefcase className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 dark:text-blue-400" />
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-base sm:text-xl font-medium">{career.position}</h3>
        <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-300 font-medium">
          {career.company}
        </p>
        <div className="text-xs sm:text-base text-neutral-500 relative flex sm:block flex-col gap-1">
          {career.current ? (
            <span className="pr-2 text-neutral-600">{career.startDate} - present</span>
          ) : (
            <span className="pr-2 text-neutral-600">
              {career.startDate} - {career.endDate}
            </span>
          )}
          <span className="font-bold text-neutral-300 absolute -top-1 hidden sm:inline-block">.</span>
          <span className="pl-0 sm:pl-2">{career.location}</span>
        </div>
        <ul className="list-disc pl-5 pt-2 text-sm sm:text-base text-neutral-500">
          {career.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Career = () => {
  const careerExperiences = [
    {
      position: "Web Developer",
      company: "AIS - All Intelligent Solutions",
      logo: "./images/ais-logo.png", 
      startDate: "October 2024",
      endDate: "",
      current: true,
      location: "Bouira, Algiers",
      responsibilities: [
        "Developing modern web applications using React, Next.js, and TypeScript",
        "Creating responsive user interfaces with Tailwind CSS",
        "Collaborating with design and backend teams to implement full-stack features",
        "Maintaining and improving existing web applications"
      ]
    }
    // You can add more career experiences here as needed
  ];

  return (
    <div className="px-4 py-2 space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-700 dark:text-neutral-200">Work Experience</h2>
      {careerExperiences.map((career, index) => (
        <CareerItem key={index} career={career} />
      ))}
    </div>
  );
};

export default Career;
