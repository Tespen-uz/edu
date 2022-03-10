import React from "react";
import Image from "next/image";
import Link from "next/link";

function TechSliderCard({ name, img, id, subject }) {
  return (
    <React.Fragment>
      <Link href={`/teachers/${id}`}>
        <a className="block max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden relative">
            <Image
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
              layout="fill"
            />
          </div>
          <div className="mx-auto w-32 h-32  -mt-16 border-4 border-white rounded-full overflow-hidden relative">
            <Image
              className="object-cover object-center h-32"
              src={`https://cp.stanfordschool.uz/storage/${img}`}
              alt="stanfordschool teacher"
              layout="fill"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-gray-500">{subject || "English"}</p>
          </div>

          <div className="py-4 border-t mx-8 mt-2">
            <button className=" block ml-auto rounded-full underline hover:shadow-lg font-semibold hover:text-white hover:bg-green-400 hover:no-underline px-6 py-2">
              More Info
            </button>
          </div>
        </a>
      </Link>
    </React.Fragment>
  );
}

export default TechSliderCard;
