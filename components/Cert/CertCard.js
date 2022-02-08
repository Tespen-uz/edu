import React from "react";
import Image from "next/image";

function CertCard({ certificate }) {
  return (
    <>
      <div className="w-full h-[500px] lg:h-[600px] mt-14 relative border-2 border-gray-400 overflow-hidden rounded transition-all hover:scale-105 ">
        <Image
          src={`https://cp.stanfordschool.uz/storage/${certificate.image}`}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="certificate stanfordschool"
          layout="fill"
        />
      </div>
    </>
  );
}

export default CertCard;
