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
  let data = [];
  try {
    const res = await fetch(
      `https://cp.stanfordschool.uz/api/teacher/${context.query.teacherID}`
      );
       data = await res.json();
    } catch (error) {
      console.log(error);
    }
    
  return {
    props: {
      teacher: data[context.locale][0],
      messages: (await import(`../../../messages/${context.locale}.json`)).default,
    },
  };
}
