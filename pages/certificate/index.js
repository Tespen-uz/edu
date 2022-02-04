import React from "react";
import Image from "next/image";
import Diploma from "../../img/diploma.png";
import Cert from "../../img/cert.jpg";
import CertCardList from "../../components/Cert/CertCardList";

function index() {
  return (
    <>
      <div className=" relative bg-gradient-to-t from-green-300 to-sky-200 pt-6 pb-12">
        <div className="container flex flex-col md:flex-row items-center ">
          <div className="w-full md:w-6/12 ">
            <Image src={Diploma} className=" object-cover z-10" />
          </div>
          <div className="w-full z-10 md:w-6/12">
            <p className="text-2xl lg:text-4xl text-white font-bold text-center lg:text-left">
              Our students who have been awarded a certificate
            </p>
            <p className=" text-gray-500 sm:text-xl mt-4  text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
              minima? Ab dolor doloremque molestias fugit veniam nam modi ipsam
              dicta velit doloribus deserunt, magni possimus nostrum iste
              consectetur aut officia.
            </p>
           
          </div>
        </div>
        <div className=" absolute z-0 left-0 right-0 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,256L80,266.7C160,277,320,299,480,288C640,277,800,235,960,234.7C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div>
        <CertCardList />
      </div>
    </>
  );
}

export default index;
