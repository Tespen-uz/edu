import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-gray-900  ">
      <div className="pt-12 lg:pt-48   max-w-2x p-2 relative   text-white py-5">
        <div className="absolute left-0 right-0 top-0"  >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,160C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
        </div>
        <div className="container mx-auto flex flex-col justify-center  md:flex-row   md:justify-between  text-sm text-gray-400">
          <div className="flex flex-col sm:w-1/2 lg:w-1/5 md:w-1/5 w-full ">
            <p className="text-xl font-bold text-white mb-3">StandFord</p>
            <p className="text-left">
              Chortoq shahar,
              <br />
              "Istiqlol xiyoboni" ko'chasi 12-uy
              <br />
              Mo'ljal:"Afsona" bolalar bogi yonida
              <br />
              <span className=" text-bold">Tell :</span>
              <a href="#" className="">
                +998990031148
              </a>
              <br />
              <span className=" text-bold">Email :</span>
              <a href="#" className="">
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
            © CopyRight <span className="font-bold text-white">StandFord</span>{" "}
            Barcha huqulari himoyalangan.
            <br />
            Created by{" "}
            <span className="text-green-500 font-bold">Jakhongir team</span>
            <br />
            2022
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
