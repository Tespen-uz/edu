import React from 'react'
import Image from 'next/image'
import Tech2 from '../../img/Tech2.jpg'


function TechCard({img, name, job, subject}) {
    console.log(img);
    return (
        <div class="w-full bg-white rounded-lg shadow-xl shadow-gray-200 mt-2 overflow-hidden flex flex-col justify-center items-center">
            <div>
                <Image 
                   class="object-center object-cover h-auto w-full" 
                   src={Tech2} 
                   alt="photo"
                />
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-2xl text-gray-700 font-bold mb-2">{name}</p>
                <p class="text-md text-gray-400 font-normal">{job}</p>
            </div>
        </div>
    )
}

export default TechCard
