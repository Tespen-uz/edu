import React from "react";
import NewEvents from "../../layouts/News";
import Image from "next/image";
import NewsImage from "../../public/news.png";
import { useTranslations } from "next-intl";


export default function NewsPage({ news }) {
  const t = useTranslations("news");

  return (
    <React.Fragment>
      <div className="relative pb-32 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto lg:flex">
          <div className=" flex flex-col items-center justify-center lg:px-16">
            <h2 className="text-center text-white text-4xl font-bold my-6">
              {t("title")}
            </h2>
            <p className="text-center text-white text-sm">
              {t("description")}
            </p>
          </div>
          <div className="relative">
            <Image src={NewsImage} alt="stanfordschool" />
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
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 ">
        {news.map((n) => (
          <NewEvents key={n.id} news={n} />
        ))}
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps({ locale }) {
  let data;
  try { 
    const res = await fetch(`https://cp.stanfordschool.uz/api/news`);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      news: data,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
