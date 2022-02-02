import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="container mx-auto flex flex-wrap justify-around xl:justify-between py-12">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            name={course.name}
            img={course.picture}
            sum={"$" + "45"}
            tech={"Yulduzxon"}
            text={course.description}
            id={course.id}
          />
        );
      })}
    </div>
  );
}

export default CourseList;
