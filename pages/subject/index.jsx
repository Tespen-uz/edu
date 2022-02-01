import Image from "next/image";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function subject() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-300">
      <div className=" container mx-auto">
        <div className="bg-[url('/coursebackimage.jpg')] px-5  "></div>

        <div className="py-10 bg-gradient-to-r from-cyan-400 to-blue-300 lg:flex">
          <div className="sm:w-1/2 sm:block container mx-auto  px-5  text-white">
            <p className="text-2xl font-bold ">English</p>
            <br />
            <p className="text-sm">
              Biz ingliz tilini o'rganish haqidagi fikringizni yaxshi tomonga
              o'zgartiramiz! Bizda faqat yuqori malakali, o'qituvchilar
              ishlashadi, ularning sharofati bilan minglab talabalarimiz IELTS
              kurslarini tugatib imtihonda 7dan yuqori ball olishgan. Bizning
              tashkil topgan kunimizdan beri biz ko'plab mukofotlarga sazovor
              bo'ldik va ingliz tilini o'qitish bo'yicha yetakchilardan biriga
              aylandik. Biz erishgan yutuqlarimizda to'xtab qolmaymiz! Biz har
              hafta yakshanba kuni tadbirlar o'tkazamiz. Shuningdek
              talabalarimizni ko'ngilochar tadbirlar va konkurslar bilan
              muntazam ravishda xursand qilib turamiz.
            </p>
          </div>
          <div className="sm:w-1/2 sm:block px-5 sm:pr-10">
            <p className="font-medium py-2 px-2 mt-5  text-white bg-gray-400 flex justify-between">
              <span>Teacher </span>
              <span>Falonchiyev Pistonchi</span>
            </p>
            <p className="font-medium py-2 px-2 mt-5  text-white bg-gray-400 flex justify-between">
              <span>To'lov </span>
              <span>200 000 so'm</span>
            </p>
            <p className="font-medium py-2 px-2 mt-5 text-white bg-gray-400 flex justify-between">
              <span>Joylar </span>
              <span>10 kishilik</span>
            </p>
            <p className="font-medium py-2 px-2 mt-5  text-white bg-gray-400 flex justify-between">
              <span>Dars davomiyligi </span>
              <span>2 Soat</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-4xl text-center font-bold text-white">Questions about course time</p>
       <div className="  w-full lg:flex justify-between  px-4 pt-16">
      <div className= " w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <br/>
      <br/>
      <div className="w-full max-w-md  p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    <br/>
    <br/>
    </div>
  );
}
