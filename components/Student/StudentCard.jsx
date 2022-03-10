import React from "react";
import Tech2 from "../../img/Tech2.jpg";

function StudentCard({ img, name, job, text, subject }) {
  return (
    <div>
      <div className="bg-white shadow-md shadow-gray-400 rounded-lg p-6 transition-all hover:shadow-2xl hover:scale-95">
        <div className="flex  items-center space-x-6 mb-4">
          <div
            className="w-[140px] h-[140px] rounded-full border-yellow-300 border-4 "
            style={{
              backgroundImage: `url(${Tech2.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <p className="text-xl text-gray-700 font-normal mb-1">{name}</p>
            <p className="text-base text-blue-600 font-normal">{job}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400 leading-loose font-normal text-base">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
