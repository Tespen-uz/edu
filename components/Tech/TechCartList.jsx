import React from "react";
import TechCard from "./TechCard";

function TechCartList({ teachers }) {
  return (
    <div className="container mx-auto flex flex-wrap justify-around md:justify-between py-8">
      {teachers.map((teacher) => {
        return (
          <TechCard
            key={teacher.id}
            img={teacher.image}
            name={teacher.name}
            subject={"English"}
            id={teacher.id}
          />
        );
      })}
    </div>
  );
}

export default TechCartList;
