import React from "react";
import Image from "next/image";

const PopularCard = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-full px-4">
      <div
        className="
                    w-full
                    flex
                    items-center
                    pb-5
                    mb-5
                    border-b border-[#F2F3F8]
                    wow
                    fadeInUp
                    "
        data-wow-delay=".1s"
      >
        <div
          className="
                    w-full
                    max-w-[80px]
                    h-20
                    rounded-full
                    overflow-hidden
                    mr-5
                    relative
                    "
        >
          <Image
            src={`https://source.unsplash.com/800x600/?teacher`}
            alt="Standford school course"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className="w-full">
          <h4>
            <a
              className="text-lg
                        lg:text-base
                        xl:text-lg
                        leading-snug
                        font-medium
                        text-dark
                        hover:text-primary
                        mb-1
                        inline-block
                        "
            >
              Create engaging online courses your student…
            </a>
          </h4>
          <p className="text-sm text-body-color">Glomiya Lucy</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
