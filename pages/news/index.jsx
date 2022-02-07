import React from "react"
import NewEvents from "./News";
import Image from "next/image";
import NewsImage from "../../public/news.png";
import NewsIndex from "./[newsId]"

export default function news() {
  return (
    // <div>
    //   <NewsIndex />
    // </div>
     <React.Fragment>
    <div className="">
      <div className="relative pb-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto lg:flex">
          <div className=" flex items-center justify-center lg:px-16">
            <p className="text-center text-white text-4xl font-bold">
              Find out our news and events in our course
              <p className="text-center text-white text-sm">
                Governmental and non-governmental organizations use text
                messaging for communication between colleagues. In the 2010s,
                the sending of short informal messages became an accepted part
                of many cultures, as happened earlier with emailing.
              </p>
            </p>
          </div>
          <div className="">
            <Image src={NewsImage} />
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
      <br />
      <div className="container mx-auto lg:flex">
        <NewEvents />
        <NewEvents />
        <NewEvents />
      </div>
      <br />
      <div className="container mx-auto lg:flex">
        <NewEvents />
        <NewEvents />
        <NewEvents />
      </div>
    </div>
     </React.Fragment>
  );
}
