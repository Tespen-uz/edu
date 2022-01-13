import React from "react";
import Group5 from "../../public/Group 5.png";
import Image from "next/image";
// className = "w-full bg-[url('/Decore.png')] bg-no-repeat bg-right-top bg-auto ";

export default function () {
  return (
    <div className="lg:flex  ">
      <div className="sm:block lg:inline mx-10  ">
        <p className="my-5 text-xl  font-bold">
          Shahardagi eng zo'r o'quv markaz
        </p>
        <p className="my-5 text-2xl text-gray-800 font-bold">
          Biz bilan o'qib orzuyingizga yeting
        </p>
        <p className="my-5 text-sm ">
          Tailwind lets you conditionally apply utility classes in different
          states using variant modifiers. For example, use hover:py-8 to only
          apply the py-8 utility on hover.For a complete list of all available
          state modifiers, check out the Hover, Focus, & Other States
          documentation.
        </p>
        <button
          class="bg-yellow-500 rounded-lg font-bold text-white text-center px-4 py-1 transition duration-300 ease-in-out  mr-6"
          href="#"
        >
          Sign Up
        </button>
        <br />
        {/* <div className="sm:w-full lg:w-1/2  my-5 ">
          ibnrtnbrtnbuitrnubitiu
        </div> */}
      </div>
    </div>
  );
}
