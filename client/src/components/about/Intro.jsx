import React from "react";

const Intro = () => {
  const introParts = [
    "Hello! Thanks for stopping by my personal website.",
    "I'm Akhrib Abderahmane, a third-year computer science student at ESI ex-INI Algiers. I'm a passionate web developer with experience working on various side projects and contributing to initiatives with scientific clubs. My expertise lies in JavaScript and its frameworks, including React, Express, and NestJS",
    "As an AI enthusiast, I'm currently delving into machine learning, constantly expanding my knowledge and skills in this exciting field. Throughout my academic journey, I've worked on numerous projects with teams, honing my ability to collaborate effectively and deliver high-quality solutions.",
    "I'm committed to lifelong learning and continuously improving my skills. My goal is to leverage my knowledge and passion to create innovative and impactful web applications.",
    "I'm excited about the possibility of working together and making a difference through technology!",
  ];
  return (
    <div className=" px-4 md:px-8 space-y-8 text-xl font-onest leading-10">
      {introParts.map((part) => {
        return <p>{part}</p>;
      })}
    </div>
  );
};

export default Intro;
