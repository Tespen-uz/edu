import Image from "next/image";
import ContactImage from "../../public/contactImage.png";
import Facebook from "../../public/facebook.png";
import Telegram from "../../public/telegram.png";
import Instagram from "../../public/instagram.png";
import ContactWave from "../../public/contactWave.svg";
import Phone from "../../public/phone.png";

export default function Contact() {
  return ( 
    <div className="w-full">
      <div style={{background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)` }} className="  pb-24 relative lg:flex">
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
      {/* <Image src={ContactWave} className="relative b-10" /> */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      </div>
      <p
        className="text-4xl text-black text-center font-bold"
      >
        Contact with the following
      </p>
      <div className=" sm:flex justify-around  py-5">
        <div className="sm:block mx-5 ">
          <p
            className=" text-2xl text-black font-bold text-white  text-center"
          >
            Call us directly at{" "}
          </p>
          <br />
          <div
          style={{background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)` }} 
            className=" py-7 shadow-lg flex items-center justify-center flex-col rounded   sm:px-10  "
          >
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
        <div className="sm:block px-5 ">
          <span
            className="text-black after:ml-0.5  block text-sm font-medium "
          >
            Name
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Name"
          />
          <span
            className="text-black after:ml-0.5  block text-sm font-medium "
          >
            Email
          </span>
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Your Email"
          />
          <span
            className="text-black after:ml-0.5  block text-sm font-medium "
          >
            Email
          </span>
          <textarea
            rows="4"
            cols="50"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Message.."
          ></textarea>
          <br />
          <button
           style={{background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)` }}
            class=" p-1 pl-5 pr-5 bg-green-500 to-blue-300 text-gray-100 text-lg rounded-lg "
          >
            Submit
          </button>
        </div>
      </div>
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
  );
}


 
// export  async function getStaticProps(){

//   const response = await fetch('thsp');
//   const data = await response.json()

  
//   return {
//     props: {
//       teachers: data.teachers
//     }
//   }
// }