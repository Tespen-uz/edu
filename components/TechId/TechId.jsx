import React from "react";
import Image from "next/image";

function TechId({ teacher }) {
  const certifications = JSON.parse(teacher?.sertificates);

  return (
    <div className=" relative overflow-hidden">
      <div className="container  flex flex-col items-center md:flex-row my-4">
        <div className="w-full h-80 z-10 md:w-6/12 overflow-hidden relative">
          <Image
            src={`https://cp.stanfordschool.uz/storage/${teacher.image}`}
            className=" object-cover rounded-2xl"
            alt="stanfordschool teacher"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="w-full z-10 md:w-6/12 flex flex-col  py-2 md:px-4">
          <div>
            <p className="font-bold text-base text-gray-700">
              <span className=" text-gray-500 ">Name:</span>
              &nbsp;{teacher.name}
            </p>
          </div>
          <div>
            <p className="font-bold text-base text-gray-700">
              <span className="text-base text-gray-500 ">Age:</span>&nbsp;
              <span>{teacher.age}</span>
            </p>
          </div>
          <p className="font-bold text-base text-gray-700">
            <span className="text-base text-gray-500 ">gender:</span>&nbsp;
            <span>{teacher.gender}</span>
          </p>
          <p className="text-base text-gray-700">
            <span className="text-base font-bold text-gray-500 ">
              Experience:
            </span>{" "}
            {teacher.experience} years
          </p>
          <div>
            <p className="text-base text-gray-700">
              <span className="text-base font-bold text-gray-500 ">
                Education:
              </span>{" "}
              {teacher.education}
            </p>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center md:flex-row py-12">
        <div className="w-full z-10 md:w-6/12 overflow-hidden object-cover">
          <p className="text-2xl font-bold py-4 text-gray-700 uppercase">
            Interests
          </p>
          <p className=" text-gray-600">{teacher.interests}</p>
        </div>
      </div>
      <p className="text-2xl font-bold py-4 text-gray-700 uppercase">
        Sertificates
      </p>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12">
          {certifications?.length > 0 &&
            certifications.map((sertificate, index) => (
              <div
                className="col-span-1 relative w-full h-[500px] lg:h-[600px] rounded-sm"
                key={sertificate}
              >
                <Image
                  src={`https://cp.stanfordschool.uz/storage/${sertificate}`}
                  className="rounded-sm"
                  alt="stanfordschool teacher"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            ))}
        </div>
      }

      <div className=" absolute   rotate-12  z-0 -top-[10%] -bottom-[10%] w-60 right-[10%]  opacity-[0.2]  bg-green-300"></div>
    </div>
  );
}

export default TechId;
