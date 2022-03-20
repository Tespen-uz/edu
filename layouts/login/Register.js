import React from "react";
import { useRouter } from "next/router";
import { PhoneIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import userContext from "../../containers/userContext";

const Register = () => {
  const router = useRouter();
  const { user, setUser } = React.useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUser({
      ...user,
      ...data,
      name: data.fullname,
      phone: data.tel,
    });
    router.push(`/courses/assessment/${router.query.registerCourseId}`);
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Standford School
          </h1>
          <p className="text-white mt-1">
            The most reliable resource to start building your future
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form
          className="bg-white w-9/12 m-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">
            Regsiter
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            It won&apos;t take much time
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <Input
              type="text"
              placeholder="Full Name"
              register={{
                ...register("fullname", {
                  required: {
                    value: true,
                    message: "Full Name is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Full name must be at least 6 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Full name must be at most 30 characters",
                  },
                }),
              }}
            />
          </div>
          {errors.fullname && (
            <div className="text-red-500 text-xs italic">
              {errors.fullname.message}
            </div>
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-lg mt-4">
            <PhoneIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Phone number"
              register={{
                ...register("tel", {
                  required: {
                    value: true,
                    message: "Phone number is required",
                  },
                  minLength: {
                    value: 9,
                    message: "Phone number must be at least 9 characters",
                  },
                  maxLength: {
                    value: 18,
                    message: "Phone number must be at most 18 characters",
                  },
                }),
              }}
            />
          </div>
          {errors.tel && (
            <div className="text-red-500 text-xs italic ">
              {errors.tel.message}
            </div>
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-lg mt-4">
            <UserCircleIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="Age"
              register={{
                ...register("age", {
                  required: {
                    value: true,
                    message: "Age is required",
                  },
                  minLength: {
                    value: 1,
                    message: "Age must be at least 1 characters",
                  },
                  maxLength: {
                    value: 2,
                    message: "Age must be at most 2 characters",
                  },
                }),
              }}
            />
          </div>
          {errors.age && (
            <div className="text-red-500 text-xs italic ">
              {errors.age.message}
            </div>
          )}
          <button
            disabled={Object.keys(errors).length}
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-lg text-white font-semibold mb-2 disabled:bg-gray-200 disabled:cursor-not-allowed cursor-pointer"
            onSubmit={handleSubmit(onSubmit)}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
