import React from "react";
import Image from "next/image";

const ArticleCard = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
        <div className="rounded overflow-hidden mb-8 ">
          <a href="blog-details.html" className="block">
            <div className="w-100 h-60 transition group-hover:scale-125 group-hover:rotate-6 relative">
              <Image
                src={`https://source.unsplash.com/800x600/?student`}
                alt="Standford school course"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </div>
          </a>
        </div>
        <div>
          <span
            className="
                    bg-primary
                    rounded
                    inline-block
                    text-center
                    py-1
                    px-4
                    text-xs
                    leading-loose
                    font-semibold
                    text-white
                    mb-5
                  "
          >
            Dec 22, 2023
          </span>
          <h3>
            <a
              href="blog-details.html"
              className="
                      font-semibold
                      text-xl
                      sm:text-2xl
                      lg:text-xl
                      xl:text-2xl
                      mb-4
                      inline-block
                      text-dark
                      hover:text-primary
                    "
            >
              Meet AutoManage, the best AI management tools
            </a>
          </h3>
          <p className="text-base text-body-color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
