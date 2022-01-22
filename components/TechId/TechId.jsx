import React from "react";
import Image from "next/image";
import Tech2 from "../../img/Tech2.jpg";

function TechId() {
  return (
    <div classNameName="container p-2 mx-auto py-24 relative">
      <div className="w-full border-4  rounded-xl flex flex-col justify-center items-center relative">
        <div
          className="mb-8 h-56 w-56 -mt-24  border-4 rounded-full"
          style={{
            backgroundImage: `url(${Tech2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="text-center">
          <p className="text-2xl capitalize  font-bold mb-2">
            <span classNameName="text-gray-400 text-xl font-medium">Name:</span>{" "}
            Falonchi Pistonchi
          </p>
          <p className="text-lg text-gray-400 font-normal">
            Job: <span classNameName="text-gray-800">Maxsus</span>
          </p>
          <p className="text-lg text-gray-400 font-normal">
            Age: <span classNameName="text-gray-800">Maxsus</span>
          </p>
          <p className="text-lg text-gray-400 font-normal">
            Unversity: <span classNameName="text-gray-800">Maxsus</span>
          </p>
        </div>
        <div classNameName="w-full flex py-4 justify-center ">
          <a href="" classNameName="mx-2 transition-all hover:scale-125">
            <svg
              fill="#0099ff"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </a>
          <a href="" classNameName="mx-2 transition-all hover:scale-125">
            <svg
              fill="#fd1d5e"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="" classNameName="mx-2 transition-all hover:scale-125">
            <svg
              fill="crimson"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>
          <a href="" classNameName="mx-2 transition-all hover:scale-125">
            <svg
              fill="#0000FF"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </a>
        </div>
        <div classNameName="text-center p-4 text-lg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium molestias, natus accusamus autem est voluptate
            consequatur doloremque dignissimos voluptatem nisi architecto
            sapiente soluta atque nemo nam laboriosam eius sint. Voluptate?
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechId;
