import React, { useState } from "react";

function InfoList() {
  return (
    <div className=" py-8">
      <div className="p-4 w-full container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12  sm:col-span-6 md:col-span-3 transition-all hover:scale-105">
            <div className="flex flex-row bg-white shadow-2xl rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <svg
                  width="24"
                  fill="blue"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M4.861 9.713c-.131-.146-.242-.299-.33-.459v-3.181l7.107 3.804 7.852-3.298v2.675c-.074.15-.169.294-.284.431.342.948.392 2.073.399 2.623 1.229-.437 2.398.593 2.398 2.492 0 3.208-2.462 4.017-2.561 4.053-2.414 4.776-6.276 5.147-7.404 5.147-1.128 0-4.99-.372-7.403-5.147-.1-.036-2.563-.845-2.563-4.061 0-2.003 1.289-2.917 2.4-2.48.007-.551.056-1.659.389-2.599zm13.52.669c-1.62 1.032-4.431 1.524-6.371 1.524-2.107 0-4.736-.501-6.319-1.508-.156.621-.241 1.298-.241 2.033 0 .528-.425.918-.897.918-.121 0-.244-.026-.365-.08-.06-.029-.152-.051-.256-.051-.112 0-.236.026-.344.099-.898.595-.804 3.838 1.393 4.598.219.076.403.238.509.451 2.16 4.299 5.557 4.634 6.548 4.634.99 0 4.389-.335 6.547-4.634.108-.213.291-.375.51-.451 2.197-.76 2.291-4.003 1.393-4.598-.365-.245-.632.032-.964.032-.472 0-.898-.388-.898-.918 0-.741-.085-1.424-.245-2.049zm4.619-.373h-2.99l1.012-2.002-.015-3.142-9.316 3.907-9.691-5.12 10.451-3.651 9.552 4.446v3.56l.997 2.002z" />
                </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Student</div>
                <div className="font-bold text-lg">1259</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 transition-all hover:scale-105">
            <div className="flex flex-row bg-white shadow-2xl rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                <svg
                  fill="#24A776"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.488 20l3.415 4h-2.628l-3.42-4h2.633zm-5.488 4h2v-4h-2v4zm7-18h-2v8h2v-8zm-13.918 18h2.628l3.42-4h-2.633l-3.415 4zm4.918-11h-2v1h2v-1zm3-2h-2v3h2v-3zm3-2h-2v5h2v-5zm8-6h-1v15h-20v-15h-1v-3h22v3zm-3 0h-16v13h16v-13z" />
                </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Course</div>
                <div className="font-bold text-lg">30</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 transition-all hover:scale-105">
            <div className="flex flex-row bg-white shadow-2xl rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                <svg
                  fill="#2c698d"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z" />
                </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Teacher</div>
                <div className="font-bold text-lg">20</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 transition-all hover:scale-105">
            <div className="flex flex-row bg-white shadow-2xl rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Results</div>
                <div className="font-bold text-lg"> 80 %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoList;
