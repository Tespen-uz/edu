import React from "react";
import Image from "next/image";
import Cert from "../../img/cert.jpg";

function CertCard() {
  return (
    <>
      <div className="w-full sm:w-8/12 md:w-5/12 lg:w-[31%] mt-14 relative p-2 ">
        <Image
          src={Cert}
          className=" object-cover z-50 rounded-2xl  transition-all hover:scale-95 "
        />

        <div className=" absolute left-0 right-0 top-0 bottom-0 rounded-xl rotate-[8deg] bg-green-200 z-0"></div>
        <div className=" absolute left-0 right-0 top-0 bottom-0 rounded-xl -rotate-[8deg] bg-green-200 z-0"></div>
      </div>
    </>
  );
}

export default CertCard;
