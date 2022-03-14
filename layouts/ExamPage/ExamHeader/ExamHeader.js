import Image from "next/image";
import React from "react";
import ExamBanner from "../../../img/examBanner.png";

function ExamHeader() {
  return (
    <div className="overflow-hidden relative">
      <div className="container py-8 flex flex-col items-center md:flex-row ">
        <div className="w-full md:w-6/12 flex justify-center">
          <Image src={ExamBanner} width={500} height={500} />
        </div>
        <div className="w-full md:w-6/12 mt-6 md:mt-0">
          <h1 className="text-3xl text-center  lg:text-4xl text-emerald-300 font-bold">
            Check your knowledge
          </h1>
          <p className="text-base text-gray-600 mt-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            beatae temporibus iste eaque dicta! Repellendus ut distinctio hic
            eos commodi ex, id, perspiciatis atque ullam assumenda ad pariatur
            nesciunt numquam!
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default ExamHeader;
