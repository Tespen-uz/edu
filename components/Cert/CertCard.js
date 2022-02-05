import React from "react";
import Image from "next/image";
import Cert from "../../img/cert.jpg";

function CertCard() {
  return (
    <>
      <div className="w-full sm:w-8/12 md:w-5/12 lg:w-[31%] mt-14 relative  border-8 border-gray-400 overflow-hidden rounded transition-all hover:scale-105 ">
        <Image
          src={Cert}
          className=" object-cover  "
        />
      </div>
    </>
  );
}

export default CertCard;
