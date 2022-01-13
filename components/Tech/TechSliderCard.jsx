import React from 'react'
import Image from 'next/image'
import Tech2 from '../../img/Tech2.jpg'


function TechSliderCard({name, img, job, subject}) {
    return (
        <div>
            <div class="w-full bg-white rounded-lg shadow-md shadow-gray-500 p-6 flex flex-col justify-center items-center">
                <div class="mb-8 h-40 w-40 border-yellow-300 border-4 rounded-full" style={{backgroundImage: `url(${Tech2.src})`, backgroundSize: 'cover'}}>
                    
                </div>
                <div class="text-center">
                    <p class="text-xl text-blue-500 font-bold mb-2">{name}</p>
                    <p class="text-base text-gray-400 font-normal">{job}</p>
                </div>
            </div>
        </div>
    )
}

export default TechSliderCard
