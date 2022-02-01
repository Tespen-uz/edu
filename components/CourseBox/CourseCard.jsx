import React from "react";
import Image from "next/image";
import E1 from "../../img/e1.jpg";
import Link from "next/link";

function CourseCard({ name, img, title, narh }) {
  return (
    <Link href={`/courses/${name}`}>
      <a className="w-full bg-white rounded-lg shadow-lg mx-auto">
        <div className="w-full">
          <Image src={E1} alt={name} layout="responsive" />
        </div>
        <div className="p-4 relative">
          <div className="h-14 w-14 rounded-full bg-white absolute right-4 -top-7 flex flex-wrap justify-center items-center">
            <span className="font-medium w-full text-center text-xl text-gray-700">
              {Math.floor(Math.random() * 30)}
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
                {title.substring(0, 32)}...
              </h4>
            </span>
            <span className="px-3 py-2 mr-2 rounded-lg  hover:shadow-lg text-xs underline  transition-all duration-500 hover:text-green-600 ml-auto">
              LEARN MORE
            </span>

            <span className="px-3 py-2 rounded-lg shadow hover:shadow-lg text-xs bg-green-400 hover:bg-green-600 transition-all duration-500 text-white ml-auto">
              REGISTER
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CourseCard;
