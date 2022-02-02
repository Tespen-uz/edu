import React from "react";
import CourseCard from "./CourseCard";

const Fan = [
  {
    id: "1",
    name: "English",
    img: "ajdhasd",
    sum: "600 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem ",
  },
  {
    id: "2",
    name: "Deutch",
    img: "ajdhasd",
    sum: "350 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem ",
  },
  {
    id: "3",
    name: "Chmistry",
    img: "ajdhasd",
    sum: "200 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem .",
  },
  {
    id: "4",
    name: "Phisics",
    img: "ajdhasd",
    sum: "300 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem ",
  },
  {
    id: "5",
    name: "Rus-tili",
    img: "ajdhasd",
    sum: "450 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem ",
  },
  {
    id: "6",
    name: "Math",
    img: "ajdhasd",
    sum: "250 000",
    tech: "Falonchi Pistonchi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem itaque accusantium eaque autem ",
  },
];

function CourseList() {
  return (
    <div className="container mx-auto flex flex-wrap justify-around xl:justify-between py-12">
      {Fan.map((item) => {
        return (
          <CourseCard
            key={item.id}
            name={item.name}
            img={item.img}
            sum={item.sum}
            tech={item.tech}
            text={item.text}
          />
        );
      })}
    </div>
  );
}

export default CourseList;
