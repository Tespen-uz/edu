import React from "react";
import Image from "next/image";
import Link from "next/link";

function CourseCard({ name, img, description, id }) {
  return (
    <Link href={`/courses/${id}`}>
      <a className="w-full  bg-white rounded-lg shadow-lg mx-auto ">
        <div className="w-full h-48 relative">
          <Image
            src={`https://cp.stanfordschool.uz/storage/${img}`}
            alt={name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="p-4 relative">
          <div className="h-14 w-14 rounded-full bg-white absolute right-4 -top-7 flex flex-wrap justify-center items-center shadow-sm">
            <span className="font-medium w-full text-center text-xl text-gray-700">
              23
            </span>
            <span className="block w-full text-center -mt-4 text-sm text-gray-500">
              Mar
            </span>
          </div>
          <div className="whitespace-nowrap text-right">
            <span className="group">
              <p className="text-blue-400 group-hover:text-blue-500 transition-all duration-300 text-left">
                {name}
              </p>
              <h4 className="mt-2 text-gray-900 group-hover:text-gray-700 transition-all duration-300 text-left font-medium text-lg overflow-ellipsis overflow-hidden mb-4">
                {description.substring(0, 32)}...
              </h4>
            </span>

            <span className="px-3 py-2 rounded-lg  hover:shadow-lg text-xs underline  hover:bg-green-400 hover:no-underline hover:text-white transition-all duration-500 text-primary ml-auto">
              LEARN MORE
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CourseCard;
