import React from "react";

function Modal({ OpenModal }) {
  return (
    <div
      className={
        OpenModal
          ? "hidden"
          : "  fixed top-0 left-0 bottom-0 right-0 z-[200] bg-black flex items-center"
      }
    >
      <div className="container mx-auto px-2 md:px-0 flex items-center flex-col justify-center">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KdbDDVcw7qc?rel=0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <figcaption className="overlay"></figcaption>
        <div className="w-full flex justify-end md:mt-4">
          <button
            onClick={OpenModal}
            className="font-bold text-xl bg-gray-300 px-8 py-2 rounded-full transition-all hover:scale-95"
          >
            Canel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
