import React from "react";
import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-12 gap-6">
      {courses.map((course) => {
        return (
          <CourseCard
            key={course.id}
            name={course.name}
            img={course.picture}
            // sum={"$" + "45"}
            tech={course.teacher}
            text={course.description}
            id={course.id}
          />
        );
      })}
    </div>
  );
}

export default CourseList;
