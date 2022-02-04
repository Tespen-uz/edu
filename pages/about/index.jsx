import React from "react";
import Busy from "../../public/busy.png";
import School from "../../public/school.png";
import School2 from "../../public/cyborg.png";
import Image from "next/image";
import InfoList from "../../components/InfoBox/InfoList";
import Faq from "./../../components/Faq/Faq";
import Testimonials from "../../layouts/ui/Testimonials";
import requests from "../../utils/requests";

const AboutPage = ({ statistics }) => {
  return (
    <div className="w-full overflow-x-hidden">

      <div className="mb-20 lg:mb-0 container mx-auto h-96  lg:flex px-5">
 
      <div className=" container mx-auto py-12 flex flex-col items-center md:flex-row">

        <div className="bg-[url('/blob.svg')] bg-cover ">
          <Image alt="normal" src={Busy} />
        </div>
        <div className=" z-10 mt-10 md:mt-0 ">
          <p className="  text-gray-700  text-2xl md:text-4xl  text-center font-bold  mb-4">
            About us
          </p>
          <p className="text-gray-600 text-center sm:text-xl  mx-6">
            <span className="text-blue-700 font-bold   drop-shadow-2xl  ">
              StanfordSchool
            </span>{" "}
            Our center will start its activities in 2019 in Chartak started
            Since then, we have about 300 applicants each year He is a
            university student. The annual result is 90% forms.
          </p>
        </div>
      </div>

      <div>
        <div
          style={{
            marginTop: "10px",
            background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)`,
          }}
        >
          <div className="py-12 relative flex flex-col items-center md:flex-row">
            <div className="absolute top-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,90.7C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
              </svg>
            </div>
            <div className="absolute left-0 bottom-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,320L80,309.3C160,299,320,277,480,277.3C640,277,800,299,960,293.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-center py-12 ">
              <div className=" w-full md:w-6/12">
                <Image alt="test" src={School} />
              </div>
              <div className=" flex flex-col text-center items-center justify-center w-full md:w-6/12 mt-8 md:mt-0  ">
                <h1 className="text-2xl z-10 md:text-3xl text-gray-700 font-bold  ">
                  StanfordSchool
                </h1>
                <p className="sm:text-xl z-10 text-gray-600 mt-4">
                  Our center will open in 2019 in Chartak started his career.
                  Since then, about 1,000 each year Our entrants are students of
                  the University. The annual result is 90%. Our StandFord Center
                  In 2019, he started his career in Chartak. Since then, about
                  1,000 of our applicants graduate each year has been a student.
                  The annual result is 90% forms
                </p>
              </div>
            </div>
          </div>
          {/* bg-gradient-to-r from-cyan-600 to-blue-500 */}
          <div className=" bg-white">
            <div className="container mx-auto  flex flex-col items-center md:flex-row">
              <div className=" z-10 flex flex-col text-center items-center justify-center w-full md:w-6/12 mt-8 md:mt-0  ">
                <h1 className="text-2xl md:text-3xl text-gray-700 font-bold  ">
                  StanfordSchool
                </h1>
                <p className="sm:text-xl text-gray-600 mt-4 z-10">
                  Our center will open in 2019 in Chartak started his career.
                  Since then, about 1,000 each year Our entrants are students of
                  the University. The annual result is 90%. Our StandFord Center
                  In 2019, he started his career in Chartak. Since then, about
                  1,000 of our applicants graduate each year has been a student.
                  The annual result is 90% forms
                </p>
              </div>
              <div className="w-full md:w-6/12">
                <Image alt="test" src={School2} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <InfoList stats={statistics} />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default AboutPage;

export async function getServerSideProps(context) {
  const res = await requests.get("/api/statistics");
  return {
    props: {
      statistics: res.data,
    },
  };
}
