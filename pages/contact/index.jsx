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
        className="relative pb-8"
      >
        <div className="container mx-auto flex flex-col items-center md:flex-row pt-4 pb-8 ">
          <div className="w-full md:w-6/12">
            <p className="text-3xl lg:text-4xl text-gray-700 text-center font-bold">
              Contact with us
            </p>
            <br />
            <p className="text-gray-500 z-10 sm:text-xl text-center sm:text-left ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s. We provide you the web applications
              according to your work
            </p>
          </div>
          <div className="w-full z-10 md:w-6/12 bg-[url('/blobContact.svg')]  ">
            <Image src={ContactImage} alt="contact standfordschool" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4fe"
              fillOpacity="1"
              d="M0,224L60,218.7C120,213,240,203,360,218.7C480,235,600,277,720,266.7C840,256,960,192,1080,181.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
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

// export async function getStaticProps() {
//   const response = await fetch("thsp");
//   const data = await response.json();

//   return {
//     props: {
//       teachers: data.teachers,
//     },
//   };
// }
