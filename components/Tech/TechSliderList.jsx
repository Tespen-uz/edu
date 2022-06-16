import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TechSliderCard from "./TechSliderCard";

const animation = { duration: 30000, easing: (t) => t };

function TechSliderList({ teachers }) {
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
      <div ref={sliderRef} className="keen-slider py-4 z-5">
        {teachers.map((teacher) => {
          return (
            <div
              key={teacher.id}
              className="keen-slider__slide number-slide p-1 "
            >
              <TechSliderCard
                name={teacher.name}
                img={teacher.image}
                job={teacher.job}
                subject={teacher.subject}
                id={teacher.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechSliderList;
