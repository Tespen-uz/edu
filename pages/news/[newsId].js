import React from "react";
import Image from "next/image";
import NewsIndex from "../../public/newsImage.png";

export default function NewsPage({ news }) {
  return (
    <div className="">
      <div className="relative pb-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto lg:flex">
          <div className=" lg:w-1/2 flex items-center justify-center lg:px-16">
            <p className="my-3 text-2xl text-white lg:text-4xl font-bold">
              {news.title}
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image src={NewsIndex} alt="stanfordschool" />
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
      <div className="container mx-auto w-full rounded-lg object-left-bottom lg:h-96 relative">
        <Image
          src={`https://cp.stanfordschool.uz/storage/${news.image}`}
          alt="image"
          objectFit="cover"
          objectPosition="50% 50%"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <br />
      <div className="container mx-auto p-5 lg:flex">
        <div className="lg:w-3/4 px-5">
          <p className="text-2xl text-center my-3 font-bold">{news.title}</p>
          <div dangerouslySetInnerHTML={{ __html: news.body }} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = [];
  try {
    const res = await fetch(
      `https://cp.stanfordschool.uz/api/news/${context.query.newsID}`
    );
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      news: data[0],
      messages: (await import(`../../messages/${context.locale}.json`)).default,
    },
  };
}
