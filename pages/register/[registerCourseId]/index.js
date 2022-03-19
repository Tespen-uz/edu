import React from "react";
import Register from "../../../layouts/login/Register";
import requests from "../../../utils/requests";

const RegisterPage = () => {
  return (
    <React.Fragment>
      <main>
        <Register />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;

export async function getStaticPaths() {
  const courses = await requests.get("/api/courses");
  const paths = courses.data.map((course) => ({
    params: {
      registerCourseId: course.id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
}
