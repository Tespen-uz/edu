import React from "react";
import Heading from "../../layouts/ui/Heading";
import DisclosureC from "../Disclosure/Disclosure";

const Faq = ({ faqs }) => {
  return (
    <section
      className="
        bg-[#f3f4ff]
        pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[90px]
        relative
        z-20
        overflow-hidden
      "
    >
      <div className="container">
        <Heading
          name="FAQ"
          title="Any Questions? Answered"
          excerpt={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
        />

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 grid lg:grid-cols-2 gap-4 lg:gap-10 md:gap-8 sm:gap-6 ">
            {faqs.map((faq, i) => (
              <DisclosureC
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Faq;

Faq.defaultProps = {
  faqs: [
    {
      question: "What is your refund policy?",
      answer: ` If you&apos;re unhappy with your purchase for any reason, email
                us within 90 days and we&apos;ll refund you in full, no
                questions asked. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, quisquam. lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptate, quisquam.`,
    },
    {
      question: "Do you offer technical support?",
      answer: "No, we do not offer technical support.",
    },
    {
      question: "What is your refund policy?",
      answer: ` If you&apos;re unhappy with your purchase for any reason, email
                us within 90 days and we&apos;ll refund you in full, no
                questions asked. lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, quisquam. lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptate, quisquam.`,
    },
    {
      question: "Do you offer technical support?",
      answer: "No, we do not offer technical support.",
    },
  ],
};
