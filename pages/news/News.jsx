import Link from "next/link";
import React from "react";

export default function NewsEvents({id}) {
  return (
    <Link href={`/news/${id}`}>
        <div className="w-full lg:mx-4 md:w-1/2 xl:w-4/12 shadow-lg rounded-lg cursor-pointer">
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
              alt="image"
              className="w-full"
            />
            <div className="flex mt-3">
              <div className="text-center rounded-lg h-1/2 m-3 p-3 bg-gradient-to-r from-cyan-500 to-blue-500">
                <p className="text-white">March</p>
                <p className="text-xl text-white font-bold ">17</p>
              </div>
              <div className="w-2/3">
                <p className="text-xl font-bold">Exam for Primary 1</p>
                <p className="text-sm text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
    </Link>
  );
}
