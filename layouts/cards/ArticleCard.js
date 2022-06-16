import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <a className="block w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="mb-10 group wow fadeInUp" data-wow-delay=".1s">
          <div className="rounded overflow-hidden mb-8 ">
            <span className="block">
              <div className="w-100 h-60 transition group-hover:scale-125 group-hover:rotate-6 relative">
                <Image
                  src={`https://cp.stanfordschool.uz/storage/${course.picture}`}
                  alt="Standford school course"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </div>
            </span>
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
              <span
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
                {course.name}
              </span>
            </h3>
            <p className="text-base text-body-color">
              {course.description.substring(0, 100)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleCard;
