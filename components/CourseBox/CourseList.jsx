import React from "react";
import CourseCard from "./CourseCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Kurs = [
  {
    id: 1,
    name: "English",
    narh: "380 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
  {
    id: 2,
    name: "Arab Tili",
    narh: "280 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
  {
    id: 3,
    name: "Rus-Tili",
    narh: "160 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
  {
    id: 4,
    name: "Nemis-tili",
    narh: "150 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
  {
    id: 5,
    name: "Fizika",
    narh: "200 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
  {
    id: 6,
    name: "Matematika",
    narh: "250 000",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestias ipsam saepe, natus perspiciatis blanditiis totam doloremque quasi. Facilis beatae velit ipsa sint architecto",
    img: "img",
  },
];

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
    <div className="container p-2 mx-auto flex flex-wrap justify-around">
      <div ref={sliderRef} className="keen-slider py-10 z-10">
        {courses.map((item) => {
          return (
            <div
              key={item.id}
              className="keen-slider__slide number-slide p-1  shadow-md hover:shadow-lg"
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
