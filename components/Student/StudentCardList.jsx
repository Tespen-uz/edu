import React from "react";
import StudentCard from "./StudentCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const StudentInfo = [
  {
    id: 1,
    name: "Leo Stephan",
    job: "Academic",
    subject: "Math",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
  {
    id: 2,
    name: "John Doe",
    job: "Businessman",
    subject: "English",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
  {
    id: 3,
    name: "Samia Morgan",
    job: "Techer",
    subject: "Biology",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
  {
    id: 4,
    name: "Jesica Bell",
    job: "Developer",
    subject: "Frontend",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
  {
    id: 5,
    name: "Micael",
    job: "Backend Dev",
    subject: "Php Node.js",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
  {
    id: 6,
    name: "Tom Kruz",
    job: "Actor",
    subject: "main",
    img: "img",
    text: "Stenford MCHJ talabasi bir qator naminatsiyalarda g'olib deb topilgan talaba. Davlat olimpiyadasi qatnashchisi, 3-martta davlat miqyosida 1 o'rinni eganlagan talaba.",
  },
];

const animation = { duration: 50000, easing: (t) => t };

function StudentCardList() {
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
          perView: 1.5,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
    },
  });
  return (
    <div className="container  mx-auto ">
      <div ref={sliderRef} className="keen-slider py-10 z-10">
        {StudentInfo.map((item) => {
          return (
            <div
              className="keen-slider__slide number-slide p-1  "
              key={item.id}
            >
              <StudentCard
                name={item.name}
                img={item.img}
                job={item.job}
                subject={item.subject}
                text={item.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentCardList;
