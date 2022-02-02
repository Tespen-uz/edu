import React from "react";
import TechCard from "./TechCard";
import Tech2 from "../../img/Tech2.jpg";

const TechInfo = [
  {
    id: 1,
    name: "Leo Stephan",
    job: "Academic",
    subject: "Math",
    img: "img",
  },
  {
    id: 2,
    name: "John Doe",
    job: "Businessman",
    subject: "English",
    img: "img",
  },
  {
    id: 3,
    name: "Samia Morgan",
    job: "Techer",
    subject: "Biology",
    img: "img",
  },
  {
    id: 4,
    name: "Jesica Bell",
    job: "Developer",
    subject: "Frontend",
    img: "img",
  },
  {
    id: 5,
    name: "Micael",
    job: "Backend Dev",
    subject: "Php Node.js",
    img: "img",
  },
  {
    id: 6,
    name: "Tom Kruz",
    job: "Actor",
    subject: "main",
    img: "img",
  },
];

function TechCartList() {
  return (
    <div className="container mx-auto flex flex-wrap justify-around md:justify-between py-8">
      {TechInfo.map((tech) => {
        return (
          <TechCard
            key={tech.id}
            img={tech.img}
            name={tech.name}
            job={tech.job}
            subject={tech.subject}
          />
        );
      })}
    </div>
  );
}

export default TechCartList;
