import Image from "next/image";
import ContactImage from "../../public/contactImage.png";
import Facebook from "../../public/facebook.png";
import Telegram from "../../public/telegram.png";
import Instagram from "../../public/instagram.png";
import Phone from "../../public/phone.png";
import Wave7 from "../../public/wave7.svg";

export default function Contact() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-200  lg:flex">
        <div className="sm:px-10  sm:block px-4 lg:flex justify-center items-center flex-col">
          <p className="sm:text-5xl   text-center text-white font-bold text-4xl">
            Contact with us
          </p>
          <br />
          <p className="sm:text-lg sm:px-10 text-center text-white sm:mx-10 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. We provide you the web applications according
            to your work
          </p>
        </div>
        <div className="lg:pr-12 sm:block bg-[url('/blobContact.svg')] ">
          <Image src={ContactImage} />
        </div>
        
      </div>
       <div className=" sm:flex justify-around  py-5  bg-gradient-to-r from-cyan-400 to-blue-200 ">
        <div className="sm:block mx-5 ">
          <p className="text-2xl font-bold text-white  text-center">
            Call us directly at{" "}
          </p>
          <br />
          <div className="bg-gradient-to-r from-cyan-400 to-blue-200 py-7 shadow-lg flex items-center justify-center flex-col rounded   sm:px-10  ">
            <Image src={Phone} />
            <p className="text-xl font-bold cursor-pointer text-white ">
              +998 69 890 09 87{" "}
            </p>
          </div>
          <div className="sm:block text-center">
          <br />
              <Image className="cursor-pointer" src={Telegram} />
              &nbsp;&nbsp;
              <Image className="cursor-pointer" src={Instagram} />
              &nbsp;&nbsp;
              <Image className="cursor-pointer" src={Facebook} />
              &nbsp;&nbsp;
             
          </div> 
        </div>
        <div className="sm:block px-5">
          <span className="text-white after:ml-0.5  block text-sm font-medium ">
            Name
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Name"
          />
          <span className="text-white after:ml-0.5  block text-sm font-medium ">
            Email
          </span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Email"
          />
          <span className="text-white after:ml-0.5  block text-sm font-medium ">
            Email
          </span>
          <textarea
            rows="4"
            cols="50"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Message.."
          ></textarea><br/>
          <button class=" p-1 pl-5 pr-5 bg-gradient-to-r from-cyan-500 to-blue-300 text-gray-100 text-lg rounded-lg ">
            Submit
          </button>
        </div>
      </div>
      <div className="  ">
        <p className="text-3xl text-blue-400 font-bold text-center">
          Location
        </p>
        <br />
        <div className=" ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d611.9043259773867!2d71.8170968!3d41.0770329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb53cf8bc519fd%3A0xb85ee4997f6bcdc!2sStanford%20Learning%20centre!5e1!3m2!1suz!2s!4v1642441094770!5m2!1suz!2s"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
     
    </div>
  );
}

 
