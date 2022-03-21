import React from "react";
import { useTranslations } from "next-intl";

const Heading = ({ name, title, excerpt }) => {
  const t = useTranslations("headings");
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4">
        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
          <span className="font-semibold text-lg text-primary mb-2 block">
            {t(name)}
          </span>
          <h2
            className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
          >
            {t(title)}
          </h2>
          <p
            className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
          >
            {t(excerpt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
