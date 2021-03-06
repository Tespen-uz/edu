import React, {useState} from "react";
import Head from "next/head";
import Image from "next/image";
import {useTranslations} from "next-intl";
import H1 from "../img/h-1.png";
import InfoList from "../components/InfoBox/InfoList";
import TechSliderList from "../components/Tech/TechSliderList";
import CourseList from "../components/CourseBox/CourseList";
import Faq from "../components/Faq/Faq";
import Contact from "../layouts/Contact";
import Heading from "../layouts/ui/Heading";
import requests from "../utils/requests";
import Modal from "../components/Modal/Modal";
import TechBg from "../img/techBg.jpg";
import Link from "next/link";
import ImageGallery from "../components/ImageGallery/ImageGallery";

export default function Home(props) {
    const [open, setOpen] = useState(false);
    const t = useTranslations();

    const toggleModal = () => {
        setOpen((state) => !state);
    };

    return (
        <React.Fragment>
            <Head>
                <meta name="description" content="Built by TESPEN"/>
                <title>{t("home.title")}</title>
            </Head>

            <main className="relative overflow-hidden">
                <div>
                    <Modal toggleModal={toggleModal} open={open}/>
                </div>
                <div
                    className="relative py-12 md:py-8 xl:py-24 "
                    style={{
                        background: `linear-gradient(4deg, rgba(36,167,118,1) 0%, rgba(3,9,9,0.6474964985994398) 26%, rgba(0,0,0,0.5270483193277311) 74%),url(${TechBg.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <div
                        className="container mx-auto py-8 min-h-[70vh] flex flex-col items-center justify-center  px-2 md:px-0 z-0">
                        <div className="z-40 text-center flex flex-col items-center ">
                            <h1 className="text-2xl w-full md:w-8/12  md:text-4xl font-extrabold text-white z-50">
                                {t("home.subtitle")}
                            </h1>
                            <p className="text-gray-300 text-center mt-4 text-base md:text-xl md:w-8/12">
                                {t("home.subdescription")}
                            </p>
                            <div className="flex flex-col items-center  sm:flex-row mt-6 border-b-2 py-4 ">
                                <Link href="/exam">
                                    <a className=" capitalize text-xl font-bold text-white rounded-full block bg-gradient-to-tr from-sky-400 to-green-400 transition-all hover:from-green-400 hover:to-sky-400 hover:scale-95  px-10 py-2">
                                        Start now
                                    </a>
                                </Link>
                                <button
                                    onClick={toggleModal}
                                    className="capitalize sm:ml-4 mt-4 sm:mt-0 py-2 px-8 text-xl font-bold rounded-full bg-white text-gray-700 transition-all hover:scale-95"
                                >
                                    Demo Video
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" absolute z-0 left-0 right-0 bottom-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill="#24A776"
                                fillOpacity="1"
                                d="M0,288L60,282.7C120,277,240,267,360,256C480,245,600,235,720,240C840,245,960,267,1080,272C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="bg-[#24A776] relative pb-16">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="mb-5  lg:mb-0">
                                    <h2 className="mb-12 text-3xl md:text-4xl text-center md:text-left font-bold text-gray-100">
                                        {t("home.learn")}
                                    </h2>
                                    <div className="flex flex-wrap">
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className=" text-4xl"></div>
                                                <div>
                                                    <h4 className="text-xl mb-2 font-bold text-gray-200">
                                                        {t("home.learn1title")}
                                                    </h4>

                                                    <p className=" text-gray-300">
                                                        {t("home.learn1titledescription")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-gift"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl mb-2 font-bold text-gray-200">
                                                        {t("home.learn2title")}
                                                    </h4>

                                                    <p className=" text-gray-300">
                                                        {t("home.learn2titledescription")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl">
                                                    <i className="lni lni-laptop-phone"></i>
                                                </div>
                                                <div>
                                                    <h4 className="text-xl mb-2 font-bold text-gray-200">
                                                        {t("home.learn3title")}
                                                    </h4>

                                                    <p className=" text-gray-300">
                                                        {t("home.learn3titledescription")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-1/2 lg:w-1/2">
                                            <div className="m-3">
                                                <div className="icon text-4xl"></div>
                                                <div>
                                                    <h4 className="text-xl mb-2 font-bold text-gray-200">
                                                        {t("home.learn4title")}
                                                    </h4>

                                                    <p className=" text-gray-300">
                                                        {t("home.learn4titledescription")}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mx-3 relative lg:mr-0 lg:ml-3 flex justify-end">
                                    <Image src={H1} width={550} height={550} alt="stanford"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" absolute z-0 left-0 right-0 bottom-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path
                                fill="#fff"
                                fillOpacity="1"
                                d="M0,288L60,282.7C120,277,240,267,360,256C480,245,600,235,720,240C840,245,960,267,1080,272C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="-mt-6">
                    <InfoList stats={props.statistics}/>
                </div>
                <div className="py-8">
                    <Heading name="courses" title="courseTitle" excerpt="courseExcerpt"/>
                    <CourseList courses={props.courses}/>
                </div>

                <div className="pb-6">
                    <Heading
                        name="teachers"
                        title="teachersTitle"
                        excerpt="teachersExcerpt"
                    />
                    <div className="-mt-16">
                        <TechSliderList teachers={props.teachers}/>
                    </div>
                    <section className={'py-12 container mx-auto'}>
                        {
                            props.gallery.map((gallery) => {
                                return (
                                    <React.Fragment key={gallery.id}>
                                        <ImageGallery gallery={gallery['0']}/>
                                        <br className={'mt-2'} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </section>
                </div>
                <Faq/>
            </main>
            <Contact/>
        </React.Fragment>
    );
}

export async function getServerSideProps({locale}) {
    let data;

    const res = await Promise.allSettled([
        requests.get("/statistics"),
        requests.get("/courses"),
        requests.get("/teachers"),
        requests.get("/gallery"),
    ]);

    data = res.map((res) => res.value?.data);

    return {
        props: {
            statistics: data[0],
            courses: data[1][locale],
            teachers: data[2][locale],
            gallery: data[3],
            messages: (await import(`../messages/${locale}.json`)).default,
        },
    };
}
