import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-gray-900  ">
      <div className="container mx-auto  max-w-2x   text-white py-5">
        <div className=" flex flex-col justify-center  md:flex-row   md:justify-between  text-sm text-gray-400">
          <div className="flex flex-col sm:w-1/2 lg:w-1/5 md:w-1/5 w-full ">
            <p className="text-xl font-bold text-white mb-3">StandFord</p>
            <p className="text-left">
              Chortoq shahar,
              <br />
              "Istiqlol xiyoboni" ko'chasi 12-uy
              <br />
              Mo'lja:"Afsona" bolalar bogi yonida
              <br />
              <span className=" text-bold">Tell :</span>
              <a href="#" className="">
                +998990031148
              </a>
              <br />
              <span className=" text-bold">Email :</span>
              <a href="#" className="">
                {" "}
                braveme@gmai.com
              </a>
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:w-1/2 lg:w-1/5 md:w-1/5 w-full ">
            <p className="text-xl font-bold text-white ">Foydali Linklar</p>
            <p className="py-1 ">
              <a href="#">Bosh Sahifa</a>
            </p>
            <p className="py-1 ">
              <a href="#">Biz Haqimizda</a>
            </p>
            <p className="py-1 ">
              <a href="#">Hamma Kurslar</a>
            </p>
            <p className="py-1 ">
              <a href="#">Imtihon Natijalari</a>
            </p>
            <p className="py-1 ">
              <a href="#">Yangiliklar</a>
            </p>
          </div>
          <br />
          <div className="flex flex-col sm:w-1/2 lg:w-1/5 md:w-1/5 w-full ">
            <p className="text-xl font-bold text-white ">Bizning xizmatlar</p>
            {/* text-left flex justify-center item-center */}
            <p className="py-1 ">
              <a href="#">Dasturlash Kursi</a>
            </p>
            <p className="py-1">
              <a href="#">Ingliz Tili</a>
            </p>
            <p className="py-1 ">
              <a href="#">Kimyo</a>
            </p>
            <p className="py-1 ">
              <a href="#">Fizika</a>
            </p>
            <p className="py-1">
              <a href="#">Matematika</a>
            </p>
            <p className="py-1 ">
              <a href="#">Biologiya</a>
            </p>
          </div>
          <br />

          <div className="flex flex-col sm:w-1/2 lg:w-1/5 md:w-1/5 w-full ">
            <p className="text-xl mb-2 font-bold text-white">
              Yangiliklarga a'zo bo'ling
            </p>
            <p className="text-left">
              StandFord o'quv markazi to'g'risidagi yangiliklar va imtiyozlardan
              xabardor bo'ling
            </p>
          </div>
          <br />
        </div>
        <br />
        <hr />
        <br />
        <div className="flex flex-col text-center w-full ">
          <p className="text-sm text-center">
            CopyRight <span className="font-bold text-white">StandFord</span>{" "}
            Barcha huqulari himoyalangan.
            <br />
            Created by{" "}
            <span className="text-yellow-500 font-bold">Jakhongir team</span>
            <br />
            2022
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
