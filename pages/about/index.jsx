import React from "react";
import Faq from "../../layouts/Faq/Faq";
import StudentCardList from "../../components/Student/StudentCardList";
import Busy from "../../public/busy.png";
import School from "../../public/school.png";
import School2 from "../../public/cyborg.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full ">
      <div className="mb-8 container mx-auto h-96  lg:flex px-5  ">
        <div className="bg-[url('/blob.svg')] bg-cover ">
          <Image className="" src={Busy} />
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
            markazimiz 2019-yilda Chortoq shahrida o'z faoliyatini boshlagan.
            Shundan beri har yili 1000 ga yaqin abituriyentlarimiz Oliygoh
            talabasi bo'lib kelmoqda. Yillik natija esa 90% ni tashkil qiladi.
          </p>
        </div>
      </div>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,0L80,37.3C160,75,320,149,480,170.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div style={{ background: "#0099ff" }}>
        <div className="container mx-auto ">
          <div style={{ background: "#0099ff" }} className=" h-a lg:flex px-5">
            <div className=" sm:w-1/2 ">
              <Image className="" src={School} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="sm:block lg:mx-10 sm:w-1/2 sm:px-10  "
            >
              <p className=" text-white text-center drop-shadow-2xl mx-4">
                <br />
                <span className="text-white-500 text-xl font-bold">
                  StandFord
                </span>
                <br /> Markazimiz 2019-yilda Chortoq shahrida o'z faoliyatini
                boshlagan. Shundan beri har yili 1000 ga yaqin
                abituriyentlarimiz Oliygoh talabasi bo'lib kelmoqda. Yillik
                natija esa 90% ni tashkil qiladi. StandFord markazimiz
                2019-yilda Chortoq shahrida o'z faoliyatini boshlagan. Shundan
                beri har yili 1000 ga yaqin abituriyentlarimiz Oliygoh talabasi
                bo'lib kelmoqda. Yillik natija esa 90% ni tashkil qiladi.
                <br />
                <br />
                <button
                  className=" border-2 border-white-500 rounded-lg font-bold text-white-500 px-4 py-1 transition duration-300 ease-in-out mr-6"
                  href="#"
                >
                  Natijalar
                </button>
              </p>
            </div>
          </div>
          {/* bg-gradient-to-r from-cyan-600 to-blue-500 */}
          <div style={{ background: "#0099ff" }} className="h-a lg:flex px-5">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="sm:block lg:mx-10 sm:w-1/2 sm:px-10  "
            >
              <p className=" text-white text-center drop-shadow-2xl mx-4">
                <br />
                <span className="text-white-500 font-bold text-xl">
                  StandFord
                </span>
                <br /> Markazimiz 2019-yilda Chortoq shahrida o'z faoliyatini
                boshlagan. Shundan beri har yili 1000 ga yaqin
                abituriyentlarimiz Oliygoh talabasi bo'lib kelmoqda. Yillik
                natija esa 90% ni tashkil qiladi. StandFord markazimiz
                2019-yilda Chortoq shahrida o'z faoliyatini boshlagan. Shundan
                beri har yili 1000 ga yaqin abituriyentlarimiz Oliygoh talabasi
                bo'lib kelmoqda. Yillik natija esa 90% ni tashkil qiladi.
                <br />
                <br />
                <button
                  className=" border-2 border-white-500 rounded-lg font-bold text-white-500 px-4 py-1 transition duration-300 ease-in-out  mr-6"
                  href="#"
                >
                  Bog'lanish
                </button>
              </p>
            </div>
            <div className=" sm:w-1/2 ">
              <Image className="" src={School2} />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,0L80,37.3C160,75,320,149,480,170.7C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default AboutPage;
