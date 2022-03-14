import React from "react";
import Link from "next/link";

function ExamCardIteam({ item }) {
  return (
    <>
      <div className=" border-2 border-emerald-200 rounded-md w-full sm:w-10/12 md:w-[48%] lg:w-[32%] p-2 my-4 ">
        <div>
          <p className=" text-emerald-300 text-xl font-bold">{item.subject}</p>
        </div>
        <div className=" py-2">
          <p className="text-bold text-xl font-bold font-serif text-gray-700">
            {item.name}
          </p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-500">{item.creator}</p>
        </div>
        <Link href={`/exam/${item.id}`}>
          <a className="text-lg text-center font-bold p-2  text-white block mt-4 bg-emerald-300 rounded-md transition-all hover:scale-[0.97]">
            {" "}
            Start Now
          </a>
        </Link>
      </div>
    </>
  );
}

export default ExamCardIteam;
