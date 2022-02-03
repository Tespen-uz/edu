import React from "react";
import Image from "next/image";
import Link from "next/link";

function CourseCard({ name, img,  tech,  id }) {
  return (
    <Link href={`/courses/${id}`}>
      <a className="flex flex-col justify-between relative w-full sm:w-8/12 md:w-[49%] lg:w-[40%] xl:w-[30%]  overflow-hidden rounded-2xl my-4 shadow-xl shadow-green-300 transition-all ">
        <div className="h-[260px] z-10 overflow-hidden rounded-t-2xl rounded-br-full rounded-bl-full border-4 border-t-2 border-green-300 object-cover">
          <Image
            src={`https://cp.stanfordschool.uz/storage/${img}`}
            alt={name}
            width={1000}
            height={1000}
            objectFit="cover"
            objectPosition={`center`}
           
          />
        </div>
        <div className="flex justify-between items-center p-4">
          <h1 className="z-10 text-gray-700 text-2xl font-bold">{name}</h1>
          <h1 className=" z-10  text-xl text-green-400">{tech}</h1>
        </div>
        <div className=" p-4 z-10  ">
          <button className=" z-10 text-xl font-bold block w-full py-2 mt-4 bg-green-300 text-white rounded-full transition-all hover:scale-95">
            Learn More
          </button>
        </div>

        <div className=" absolute bottom-0 -left-10 rotate-45 w-[200px] h-[280px] bg-green-300 rounded-t-full  -z-10 opacity-[0.5]"></div>
      </a>
    </Link>
  );
}

export default CourseCard;
