import React from "react";
import TechCard from "./TechCard";

function TechCartList({ teachers }) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6">
      {teachers.map((teacher) => (
        <TechCard
          key={teacher.id}
          img={teacher.image}
          name={teacher.name}
          subject={teacher.subject}
          id={teacher.id}
        />
      ))}
    </div>
  );
}

export default TechCartList;
