import React from "react";
import CourseCard from "./CourseCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 50000, easing: (t) => t };

function CourseList({ courses }) {
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
          perView: 1.5,
          spacing: 20,
        },
      },
      "(min-width: 600px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 1200px)": {
        slides: {
          perView: 4,
          spacing: 20,
        },
      },
    },
  });

  return (
    <div className="container  p-2 mx-auto flex flex-wrap justify-around">
      <div ref={sliderRef} className="keen-slider py-10 z-10">
        {courses.map((item) => {
          return (
            <div
              key={item.id}
              className="keen-slider__slide number-slide my-2 mx-2 md:mx-0 "
            >
              <CourseCard
                name={item.name}
                description={item.description}
                img={item.picture}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseList;
