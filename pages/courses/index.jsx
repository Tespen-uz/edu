import React from "react";
import CourseBg from "../../img/courseBg.png";
import Image from "next/image";
import CourseList from "../../components/Courses/CourseList";
import requests from "../../utils/requests";

const CoursePage = (props) => {
  return (
    <React.Fragment>
      <div
        className="min-h-[90vh] relative  flex items-center py-12"
        style={{
          background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)`,
        }}
      >
        <div className="container mx-auto z-5 flex flex-col items-center md:flex-row">
          <div className="w-full z-2 md:w-6/12">
            <Image
              src={CourseBg}
              width={450}
              height={450}
              alt="about stanford school"
            />
          </div>
          <div className="w-full my-10 z-10  md:w-6/12 md:my-0">
            <h1 className="text-white text-center font-bold text-3xl md:text-4xl md:text-left">
              A collection of our courses from all disciplines.
            </h1>
            <p className="text-xl text-center  mt-4 text-gray-700 md:text-left">
              -- Read and be a student. Create opportunities for the future.
            </p>
            <p className="text-xl text-center  mt-2 text-gray-700 md:text-left">
              -- Study hard everywhere. Be a student this year
            </p>
          </div>
        </div>

        <div className="absolute left-0 right-0 z-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,320L80,309.3C160,299,320,277,480,277.3C640,277,800,299,960,293.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="text-center flex justify-center font-bold text-2xl md:text-4xl text-gray-700">
        <h1 className=" border-b-4 py-2 border-green-300 ">Our All courses</h1>
      </div>

      <CourseList courses={props.courses} />
    </React.Fragment>
  );
};

export default CoursePage;

export async function getServerSideProps({ locale }) {
  const res = await requests.get("/api/courses");
  return {
    props: {
      courses: res.data[locale],
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
