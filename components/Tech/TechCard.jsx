import React from "react";
import Image from "next/image";
import Link from "next/link";
import TelegramIcon from "../../assets/icons/TelegramIcon";

function TechCard({ img, name, subject, id }) {
  return (
    <Link href={`/teachers/${id}`}>
      <a className="block relative mt-4 w-full shadow-xl rounded-2xl overflow-hidden transition-all hover:rotate-2 hover:shadow-green-300">
        <div className="flex flex-col items-center justify-center bg-white p-6 shadow rounded-lg">
          <div className="inline-flex shadow-lg border-4 border-green-300 rounded-full overflow-hidden h-40 w-40 relative">
            <Image
              src={`https://cp.stanfordschool.uz/storage/${img}`}
              alt={`stanfordschool ${name}`}
              layout="fill"
              className=" object-cover"
            />
          </div>

          <h2 className="mt-4 font-bold text-2xl capitalize z-10 text-gray-600 ">
            {name}
          </h2>
          <h6 className="mt-2 text-base font-medium text-gray-700 z-10">
            {subject || "English"}
          </h6>
        </div>

        <div className=" absolute w-40 h-40 bg-green-300 -left-16 bottom-0 z-0 opacity-[0.5] rounded-xl rotate-45"></div>
      </a>
    </Link>
  );
}

export default TechCard;
