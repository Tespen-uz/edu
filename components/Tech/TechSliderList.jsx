import React, { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TechCard from "./TechCard";
import TechSliderCard from "./TechSliderCard";

const TechInfo = [
  {
    id: 1,
    name: "Leo Stephan",
    job: "Academic",
    subject: "Math",
    img: "img",
  },
  {
    id: 2,
    name: "John Doe",
    job: "Businessman",
    subject: "English",
    img: "img",
  },
  {
    id: 3,
    name: "Samia Morgan",
    job: "Techer",
    subject: "Biology",
    img: "img",
  },
  {
    id: 4,
    name: "Jesica Bell",
    job: "Developer",
    subject: "Frontend",
    img: "img",
  },
  {
    id: 5,
    name: "Micael",
    job: "Backend Dev",
    subject: "Php Node.js",
    img: "img",
  },
  {
    id: 6,
    name: "Tom Kruz",
    job: "Actor",
    subject: "main",
    img: "img",
  },
];

const animation = { duration: 30000, easing: (t) => t };

function TechSliderList() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: false,
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(min-width: 375px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
      "(min-width: 425px)": {
        slides: {
          perView: 1.2,
          spacing: 20,
        },
      },
      "(min-width: 600px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
  });

  return (
    <div className="container mx-auto p-2 relative">
      <div ref={sliderRef} className="keen-slider py-10 z-10">
        {TechInfo.map((tech, i) => {
          return (
            <div key={i} className="keen-slider__slide number-slide p-1 ">
              <TechSliderCard
                name={tech.name}
                img={tech.img}
                job={tech.job}
                subject={tech.subject}
              />
            </div>
          );
        })}
      </div>
      {/* <div 
              className='absolute left-[5%] right-[5%] rounded-2xl bottom-[5%] top-[5%] bg-gray-900 z-0'
              
            >
            </div> */}
    </div>
  );
}

export default TechSliderList;
