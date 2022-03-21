import Image from "next/image";
import React from "react";
import ExamBanner from "../../../img/examBanner.png";
import { useTranslations } from "next-intl";


function ExamHeader() {
  const t = useTranslations("tests");

  return (
    <div className="overflow-hidden relative">
      <div className="container py-8 flex flex-col items-center md:flex-row ">
        <div className="w-full md:w-6/12 flex justify-center">
          <Image src={ExamBanner} width={500} height={500} />
        </div>
        <div className="w-full md:w-6/12 mt-6 md:mt-0">
          <h1 className="text-3xl text-center  lg:text-4xl text-emerald-300 font-bold">
            {t("title")}
          </h1>
          <p className="text-base text-gray-600 mt-6 text-center">
            {t("description")}
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ExamHeader;
