import React from "react";
import TechCartList from "../../components/Tech/TechCartList";
import TechBg from "../../img/techBg.jpg";
import requests from "../../utils/requests";
import { useTranslations } from "next-intl";


const AboutPage = (props) => {
  const t = useTranslations("teacher");

  return (
    <>
      <div
        className="flex py-6 items-center justify-center  min-h-[90vh] relative"
        style={{
          background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%), url(${TechBg.src})`,
          backgroundSize: "cover",
          backgroundRpeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center ">
          <h1 className="text-4xl capitalize font-bold text-white md:text-6xl">
            {t("title")}
          </h1>
          <p className=" w-10/12 mx-auto md:w-8/12 text-2xl mt-4 text-white">
            {t("description")}
          </p>
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
      </div>
      <TechCartList teachers={props.teachers} />
    </>
  );
};

export default AboutPage;

export async function getServerSideProps({locale}) {
<<<<<<< HEAD
  const res = await requests.get("/api/teachers");
=======
  let res;
  try {
    res = await requests.get("/teachers");
  } catch (error) {
    console.log(error);
  }
>>>>>>> 6adaa62db4b4109349c56cc82fc4640393534cc0
  return {
    props: {
      teachers: res.data[locale],
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
