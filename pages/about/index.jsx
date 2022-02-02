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
      <div className="mb-8 container mx-auto h-96  lg:flex px-5  ">
        <div className="bg-[url('/blob.svg')] bg-cover ">
          <Image alt="normal" src={Busy} />x
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className=" bg-cover  sm:block lg:mx-10 "
        >
          <p className="  text-blue-700 drop-shadow-2xl  text-center font-bold text-2xl mb-4">
            Biz haqimizda
          </p>
          <p className="text-black text-center mx-6">
            <span className="text-blue-700 font-bold drop-shadow-2xl  ">
              StandFord
            </span>{" "}
            markazimiz 2019-yilda Chortoq shahrida o&apso;z faoliyatini
            boshlagan. Shundan beri har yili 1000 ga yaqin abituriyentlarimiz
            Oliygoh talabasi bo&apso;lib kelmoqda. Yillik natija esa 90% ni
            tashkil qiladi.
          </p>
        </div>
      </div>

      <div>
        <div
          style={{
            margiTop: "10px",
            background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)`,
          }}
          className=""
        >
          <div className="pt-24 relative h-a lg:flex px-5">
            <div className="absolute top-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,96L40,106.7C80,117,160,139,240,128C320,117,400,75,480,69.3C560,64,640,96,720,117.3C800,139,880,149,960,165.3C1040,181,1120,203,1200,192C1280,181,1360,139,1400,117.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                ></path>
              </svg>
            </div>
            <div className="container mx-auto lg:flex ">
              <div className=" sm:w-1/2 ">
                <Image alt="test" src={School} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className=" sm:block lg:mx-10 sm:w-1/2 sm:px-10  "
              >
                <p className=" text-white text-center drop-shadow-2xl mx-4">
                  <br />
                  <span className="text-white-500 text-xl font-bold">
                    StandFord
                  </span>
                  <br /> Markazimiz 2019-yilda Chortoq shahrida o&apso;z
                  faoliyatini boshlagan. Shundan beri har yili 1000 ga yaqin
                  abituriyentlarimiz Oliygoh talabasi bo&apso;lib kelmoqda.
                  Yillik natija esa 90% ni tashkil qiladi. StandFord markazimiz
                  2019-yilda Chortoq shahrida o&apso;z faoliyatini boshlagan.
                  Shundan beri har yili 1000 ga yaqin abituriyentlarimiz Oliygoh
                  talabasi bo&apso;lib kelmoqda. Yillik natija esa 90% ni
                  tashkil qiladi.
                  <br />
                  <br />
                  <button className=" border-2 border-white-500 rounded-lg font-bold text-white-500 px-4 py-1 transition duration-300 ease-in-out mr-6">
                    Natijalar
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* bg-gradient-to-r from-cyan-600 to-blue-500 */}
          <div className="pb-24 relative  h-a lg:flex px-5">
            <div className="container mx-auto  lg:flex ">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className=" container mx-auto  sm:block lg:mx-10 sm:w-1/2 sm:px-10  "
              >
                <p className=" text-white text-center drop-shadow-2xl mx-4">
                  <br />
                  <span className="text-white-500 font-bold text-xl">
                    StandFord
                  </span>
                  <br /> Markazimiz 2019-yilda Chortoq shahrida o&apso;z
                  faoliyatini boshlagan. Shundan beri har yili 1000 ga yaqin
                  abituriyentlarimiz Oliygoh talabasi bo&apso;lib kelmoqda.
                  Yillik natija esa 90% ni tashkil qiladi. StandFord markazimiz
                  2019-yilda Chortoq shahrida o&apso;z faoliyatini boshlagan.
                  Shundan beri har yili 1000 ga yaqin abituriyentlarimiz Oliygoh
                  talabasi bo&apso;lib kelmoqda. Yillik natija esa 90% ni
                  tashkil qiladi.
                  <br />
                  <br />
                  <button
                    className=" border-2 border-white-500 rounded-lg font-bold text-white-500 px-4 py-1 transition duration-300 ease-in-out  mr-6"
                    href="#"
                  >
                    Bog&apso;lanish
                  </button>
                </p>
              </div>
              <div className="sm:w-1/2 ">
                <Image alt="test" src={School2} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
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
