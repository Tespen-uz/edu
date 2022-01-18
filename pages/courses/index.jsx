import React from "react";
import CourseBg from '../../img/courseBg.png'
import Image from "next/image";
import CourseList from "../../components/Courses/CourseList";








const AboutPage = () => {
  return (
    <>
      <div className="min-h-[90vh] relative  flex items-center py-12" style={{background: 'linear-gradient(70deg, rgba(0,255,218,1) 29%, rgba(30,237,160,1) 63%)'}}>
        <div className="container mx-auto z-50 flex flex-col items-center md:flex-row">
          <div className="w-full z-50 md:w-6/12">
            <Image src={CourseBg} width={450} height={450} />
          </div>
          <div className="w-full my-10 z-50  md:w-6/12 md:my-0">
            <h1 className="text-white text-center font-bold text-3xl md:text-4xl md:text-left">A collection of our courses from all disciplines.</h1>
            <p className="text-xl text-center  mt-4 text-gray-700 md:text-left">-- Read and be a student. Create opportunities for the future.</p>
            <p className="text-xl text-center  mt-2 text-gray-700 md:text-left">-- Study hard everywhere. Be a student this year</p>
          </div>
        </div>

        <div className="absolute left-0 right-0 z-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fill-opacity="1" d="M0,160L34.3,144C68.6,128,137,96,206,122.7C274.3,149,343,235,411,272C480,309,549,299,617,277.3C685.7,256,754,224,823,208C891.4,192,960,192,1029,208C1097.1,224,1166,256,1234,250.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </div>
        
      </div>

      <CourseList />
      
    </>
  );
};

export default AboutPage;
