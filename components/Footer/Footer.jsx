import React from "react";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {

  return (<footer className= " bg-gray-100 pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative z-10">
   <div className="container mx-auto ">
      <div className="flex flex-wrap ">
         <div className="w-full sm:w-2/3 lg:w-3/12 px-4">
            <div className="w-full mb-10">
               <a
                  href="javascript:void(0)"
                  className="inline-block max-w-[160px] mb-6"
                  >
               <p className="text-gray-600 font-bold text-3xl">StandFord</p>
               </a>
               <p className="text-base text-body-color text-gray-600 mb-7">
                 Chortoq shahar <br/>"Istiqlol" ko'chasi 12-uy<br/>
                 Mo'njal:"Bog'cha" ro'parasida
               </p>
               <p className="flex items-center text-sm                         text-gray-600
 font-medium">
                  <span className="text-primary text-gray-600 mr-3">
                     <svg
                        width="19"
                        height="21"
                        viewBox="0 0 19 21"
                        className="fill-current"
                        >
                        <path
                           d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                           />
                        <path
                           d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                           />
                        <path
                           d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                           />
                     </svg>
                  </span>
                <a href="tel:+998609088789">  <span className="text-gray-600">+998609088798</span></a>
               </p>
            </div>
         </div>
         <div className="w-full sm:w-1/2 lg:w-3/12 px-4">
            <div className="w-full mb-10">
               <h4 className="text-gray-600 text-lg font-semibold mb-9">Usful Links</h4>
               <ul>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     Home Page
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                           About Us
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     Teachers
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     Courses
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="w-full sm:w-1/2 lg:w-3/12 px-4">
            <div className="w-full mb-10">
               <h4 className="
                        text-gray-600
               text-lg font-semibold mb-9">Our Services</h4>
               <ul>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     English 
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600
                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                           Mathematics
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600

                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     Chemistry
                     </a>
                  </li>
                  <li>
                     <a
                        href="javascript:void(0)"
                        className="
                        inline-block
                        text-gray-600

                        text-base text-body-color
                        hover:text-primary
                        leading-loose
                        mb-2
                        "
                        >
                     
Mother Tongue
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="w-full sm:w-1/2 lg:w-3/12 px-4">
            <div className="w-full mb-10">
               <h4 className="                        text-gray-600
 text-lg font-semibold mb-9">Follow Us On</h4>
               <div className="flex items-center mb-6">
                  
<Link href="">
   <a>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="45" height="45"
viewBox="0 0 48 48"
><path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path></svg>
   </a>
   </Link>
   &nbsp; &nbsp; &nbsp;
<Link href="">
   <a>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="45" height="45"
viewBox="0 0 48 48"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path></svg>
   </a>
</Link>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div>
      <span className="absolute left-0 bottom-0 z-[-1]">
         <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
               d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
               fill="url(#paint0_linear_1179_5)"
               />
            <defs>
               <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1="281"
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                  >
                  <stop stopColor="#3056D3" stop-opacity="0.08" />
                  <stop offset="1" stopColor="#C4C4C4" stop-opacity="0" />
               </linearGradient>
            </defs>
         </svg>
      </span>
      <span className="absolute top-10 right-10 z-[-1]">
         <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
               d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
               fill="url(#paint0_linear_1179_4)"
               />
            <defs>
               <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2="75"
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                  >
                  <stop stopColor="#13C296" stop-opacity="0.31" />
                  <stop offset="1" stopColor="#C4C4C4" stop-opacity="0" />
               </linearGradient>
            </defs>
         </svg>
      </span>
   </div>
   <div className=" px-5 flex flex-col text-center w-full ">
         <p className="text-sm text-gray-600 text-center">
           © CopyRight <span className="font-bold text-gray-600">StandFord</span>{" "}
           Barcha huqulari himoyalangan.
           <br />
           Created by{" "}
           <span className="text-gray-600 font-bold">Jakhongir team</span>
           <br />
           2022
         </p>
       </div>
</footer>

  );
};
export default Footer;
