import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const sayings = [
  {
    name: "John Doe",
    title: "CEO, Seneca Company",
    image: "https://source.unsplash.com/400x400/?person",
    saying: ` “Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.`,
  },
  {
    name: "John Doe",
    title: "CEO, XBooK Company",
    image: "https://source.unsplash.com/400x400/?person",
    saying: ` “Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.`,
  },
  {
    name: "John Doe",
    title: "CEO, Tespen Company",
    image: "https://source.unsplash.com/400x400/?person",
    saying: ` “Our members are so impressed. It's intuitive. It's clean.
                It's distraction free. If you're building a community.`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-20 md:pt-[120px]">
      <div className="container px-4">
        <Heading
          name="Testimonials"
          title="What our clients say about us"
          excerpt="There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
        />

        <div className="flex flex-wrap">
          {sayings.map((testimonial, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
              <div
                className="
                ud-single-testimonial
                p-8
                bg-white
                mb-12
                shadow-testimonial
                wow
                fadeInUp
              "
                data-wow-delay=".15s
              "
              >
                <div className="ud-testimonial-ratings flex items-center mb-3">
                  <span className="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span className="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span className="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span className="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                  <span className="text-[#fbb040] mr-1">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      className="fill-current"
                    >
                      <path d="M9.09815 0.360596L11.1054 6.06493H17.601L12.3459 9.5904L14.3532 15.2947L9.09815 11.7693L3.84309 15.2947L5.85035 9.5904L0.595291 6.06493H7.0909L9.09815 0.360596Z" />
                    </svg>
                  </span>
                </div>
                <div className="ud-testimonial-content mb-6">
                  <p className="text-base tracking-wide text-body-color">
                    {testimonial.saying}
                  </p>
                </div>
                <div className="ud-testimonial-info flex items-center">
                  <div
                    className="
                    ud-testimonial-image
                    w-[50px]
                    h-[50px]
                    rounded-full
                    overflow-hidden
                    mr-5
                    relative
                  "
                  >
                    <Image
                      src={testimonial.image}
                      alt="stanford school"
                      layout="fill"
                    />
                  </div>
                  <div className="ud-testimonial-meta">
                    <h4 className="text-sm font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#969696] text-xs">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
