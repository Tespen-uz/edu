import React from "react";

function Modal({ toggleModal, open }) {
  return (
    <div
      className={
        !open
          ? "hidden"
          : "flex fixed top-0 left-0 bottom-0 right-0 z-[9999] bg-black items-center min-h-screen"
      }
    >
      <div className="container mx-auto px-2 md:px-0 flex items-center flex-col justify-center h-full">
        <iframe
          width="100%"
          height="85%"
          src="https://www.youtube.com/embed/emBoDloCze8?start=7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <figcaption className="overlay"></figcaption>
        <div className="w-full flex justify-end md:mt-4">
          <button
            onClick={toggleModal}
            className="font-bold text-xl bg-gray-300 px-8 py-2 rounded-full transition-all hover:scale-95"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
