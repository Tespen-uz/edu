import React from "react";
import Image from "next/image";
import Tech2 from "../../img/Tech2.jpg";
import TelegramIcon from "../../assets/icons/TelegramIcon";

function TechId() {
  return (
    <div className=" relative overflow-hidden">
      <div className="container  flex flex-col items-center md:flex-row my-4">
        <div className="w-full z-10 md:w-6/12 overflow-hidden object-cover">
          <Image src={Tech2} className=" object-cover rounded-2xl" />
        </div>
        <div className="w-full z-10 md:w-6/12 flex flex-col  py-2 md:px-4">
          <div>
            <p className="font-bold text-2xl text-gray-700">
              <span className="text-base text-gray-500 ">Name:</span> Full Name
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl text-gray-700">
              <span className="text-base text-gray-500 ">Age:</span> 20
            </p>
          </div>
          <div>
            <p className="font-bold text-2xl text-gray-700">
              <span className="text-base text-gray-500 ">Job:</span> Teacher
            </p>
          </div>
          <div>
            <p className=" my-4 text-base text-gray-700">
              <span className="text-base font-bold text-gray-500 ">Info:</span>{" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, iusto ipsam ducimus dolor dolores natus in molestias ex
              a, asperiores quod eius. Molestiae debitis consequatur hic, vero
              magnam neque alias?
            </p>
          </div>
          <div>
            <p className=" mt-2 text-xl text-gray-700">
              <span className="text-base font-bold text-gray-500 ">Tel:</span>{" "}
              +998 93 000 12 34
            </p>
          </div>
          <div className="flex ">
            <ul className="flex flex-row mt-4 space-x-2 z-10">
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#a9a9a9"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#a9a9a9"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <TelegramIcon classes="w-[30px] h-[30px]" fill="#a9a9a9" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center md:flex-row py-12">
        <div className="w-full z-10 md:w-6/12 overflow-hidden object-cover">
          <p className="text-2xl font-bold py-4 text-gray-700 uppercase">
            Serseficat
          </p>
          <p className=" text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex porro
            atque, earum fugiat consequatur adipisci molestiae libero? Corporis
            labore harum adipisci, dignissimos eos et tempore aperiam amet animi
            minima iure?
          </p>
        </div>
        <div className="w-full mt-6 md:mt-0 z-10 md:w-6/12 flex justify-end overflow-hidden object-cover">
          <Image
            src={Tech2}
            width={500}
            height={350}
            className=" object-cover z-10  rounded-2xl"
          />
        </div>
      </div>

      <div className=" absolute   rotate-12  z-0 -top-[10%] -bottom-[10%] w-60 right-[10%]  opacity-[0.2]  bg-green-300"></div>
    </div>
  );
}

export default TechId;
