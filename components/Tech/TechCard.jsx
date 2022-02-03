import React from "react";
import Image from "next/image";
import Link from "next/link";
import TelegramIcon from "../../assets/icons/TelegramIcon";

function TechCard({ img, name, subject, id }) {
  return (
    <Link href={`/teachers/${id}`}>
      <a className="block relative mt-4 w-full sm:w-[48%] md:w-[30%] shadow-xl rounded-2xl overflow-hidden transition-all hover:rotate-2 hover:shadow-green-300">
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border-4 border-green-300 rounded-full overflow-hidden h-40 w-40 relative">
            <Image
              src={`https://cp.stanfordschool.uz/storage/${img}`}
              alt={`stanfordschool ${name}`}
              layout="fill"
            />
          </div>

          <h2 className="mt-4 font-bold text-2xl capitalize z-10 text-gray-600 ">
            {name}
          </h2>
          <h6 className="mt-2 text-base font-medium text-gray-700 z-10">
            {subject}
          </h6>

          <p className="text-sm z-10 text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ratione quis obcaecati porro
          </p>

          <ul className="flex flex-row mt-4 space-x-2 z-10">
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#a9a9a9"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#a9a9a9"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
                </svg>
              </span>
            </li>
            <li>
              <span>
                <TelegramIcon classes="w-[30px] h-[30px]" fill="#a9a9a9" />
              </span>
            </li>
          </ul>
        </div>

        <div className=" absolute w-40 h-40 bg-green-300 -left-16 bottom-0 z-0 opacity-[0.5] rounded-xl rotate-45"></div>
      </a>
    </Link>
  );
}

export default TechCard;
