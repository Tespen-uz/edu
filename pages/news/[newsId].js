import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NewEvents from "./News";
import NewsIndex from "../../public/newsImage.png";
export default function NewsPage() {
  const router = useRouter();
  const { courseID } = router.query;
  return (
    <div className="">
      <div className="relative pb-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto lg:flex">
          <div className=" lg:w-1/2 flex items-center justify-center lg:px-16">
            <p className="my-3 text-2xl text-white lg:text-4xl font-bold">
              Exam for Primary 1
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image src={NewsIndex} />
          </div>

          <div className="absolute right-0 left-0 bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,208C1120,213,1280,267,1360,293.3L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <img
          // style={{ objectFit: "cover" }}
          src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
          alt="image"
          className="w-full object-cover rounded-lg object-left-bottom lg:h-96"
        />
      </div>
      <br />
      <div className="container mx-auto p-5 lg:flex">
        <div className="lg:w-2/4 px-5">
          <p className="text-2xl text-center my-3 font-bold">
            How and when is the exam
          </p>
          <p className=" text-xl text-left">
            Text messages are used for personal, family, business and social
            purposes. Governmental and non-governmental organizations use text
            messaging for communication between colleagues. In the 2010s, the
            sending of short informal messages became an accepted part of many
            cultures, as happened earlier with emailing.<br/><br/> This makes texting a
            quick and easy way to communicate with friends, family and
            colleagues, including in contexts where a call.<br/><br/> Impolite or
            inappropriate (e.g., calling very late at night or when one knows
            the other person is busy with family or work activities). Like
            e-mail and voicemail and unlike calls (in which the caller hopes to
            speak directly with the recipient),
          </p>
        </div>
        <div className=" my-5  lg:my-0 lg:w-2/4 flex justify-center items-center ">
          <div class="w-36 rounded-lg lg:w-52 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
            <div class="block rounded-t overflow-hidden  text-center ">
              <div class="lg:py-5 lg:text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-1">
                March
              </div>
              <div class="pt-1 lg:m-3 border-l border-r border-white bg-white">
                <span class="text-5xl lg:text-6xl font-bold leading-tight">17</span>
              </div>
              <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                <span class="text-sm lg:text-xl">Sunday</span>
              </div>
              <div class="pb-2 lg:m-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                <span class="text-xs leading-normal lg:text-xl">8:00 am to 5:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl text-center font-bold">Other News and Events</p>
      <div className="my-5 container mx-auto lg:flex">
        <NewEvents  />
        <NewEvents  />
        <NewEvents  />{" "}
      </div>
    </div>
  );
}
