import React from "react";
import TechId from "../../../components/TechId/TechId";

const TeacherPage = ({ teacher }) => {
  return (
    <div className="w-full container">
      <TechId teacher={teacher} />
    </div>
  );
};

export default TeacherPage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://cp.stanfordschool.uz/api/teacher/${context.query.teacherID}`
  );
  const data = await res.json();
  return {
    props: {
      teacher: data[0],
    },
  };
}
