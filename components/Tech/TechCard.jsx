import React from 'react'
import Image from 'next/image'
import Tech3 from '../../img/Tech2.jpg'


function TechCard({img, name, job, subject}) {
    console.log(img);
    return (
           <div class="   w-full md:w-5/12 xl:w-[30%] flex flex-col items-center cursor-pointer bg-gray-200 rounded overflow-hidden p-8 mt-8 shadow-md shadow-gray-500 transition-all hover:scale-95">
                <div class="w-[160px] h-[160px]  rounded-[50%] border-4 border-yellow-300   overflow-hidden bg-red-400" 
                  style={{backgroundImage: `url(${Tech3.src})`, backgroundSize: 'cover'}}
                >
                    
                </div>
                <div class="text-center">
                    <h3 class="text-3xl text-blue-500 font-bold mt-2 mb-2">{name}</h3>
                    {/* <p class="text-lg text-gray-500 font-normal">{subject}</p> */}
                    <p class="text-lg text-gray-500 font-normal">{job}</p>
                </div>
            </div>
    )
}

export default TechCard
