import React from 'react'
import Image from 'next/image'
import Book1 from '../../img/book1.jpg'

function CourseCard({name, img, sum, tech, text }) {
    return (
      <div className=" relative w-full sm:w-8/12 md:w-[49%] lg:w-[40%] xl:w-[30%]  overflow-hidden rounded-2xl my-4 shadow-xl shadow-green-300 transition-all ">
        <div className="h-[260px] z-10 overflow-hidden rounded-t-2xl rounded-br-full rounded-bl-full border-4 border-t-2 border-green-300 object-cover">
          <Image
            src={Book1}
            title={name}
            width={1000}
            height={1000}
            className=" z-10 object-cover "
          />
        </div>
        <div className=" p-4 z-10">
          <div className="flex justify-between items-center">
            <h1 className="z-10 text-gray-700 text-2xl font-bold">{name}</h1>
            <h1 className=" z-10  text-xl text-green-400">{tech}</h1>
          </div>
          <div className="z-10">
            <p className="  text-gray-500 mt-4 text-center z-10">{text}</p>
          </div>

          <button className=" z-10 text-xl font-bold block w-full py-2 mt-4 bg-green-300 text-white rounded-full transition-all hover:scale-95">
            Register
          </button>
        </div>

        <div className=" absolute bottom-0 -left-10 rotate-45 w-[200px] h-[280px] bg-green-300 rounded-t-full  -z-10 opacity-[0.5]"></div>
      </div>
    );
}

export default CourseCard
