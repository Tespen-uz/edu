import Image from "next/image";
import ContactImage from "../../public/contactImage.png";
import Contact from "../../layouts/Contact";

export default function ContactPage() {
  return (
    <div className="w-full ">
      <div
        style={{
          background: `linear-gradient(143deg, rgba(0,245,255,0.6755077030812324) 0%, rgba(36,167,118,0.4766281512605042) 51%, rgba(32,166,92,0.5802696078431373) 100%)`,
        }}
        className="pb-28 relative lg:flex pt-8 "
      >
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
          <Image src={ContactImage} alt="contact standfordschool" />
        </div>
        {/* <Image src={ContactWave} className="relative b-10" /> */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <Contact />
      <div className=" ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d611.9043259773867!2d71.8170968!3d41.0770329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb53cf8bc519fd%3A0xb85ee4997f6bcdc!2sStanford%20Learning%20centre!5e1!3m2!1suz!2s!4v1642441094770!5m2!1suz!2s"
          width="100%"
          height="400"
          allowFullScreen={true}
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
