import React from 'react'
import Image from 'next/image'
import Tech2 from '../../img/Tech2.jpg'


function TechId() {
    return (
        <div className='container mx-auto py-24 relative'>
            
            <div class="w-full border-4  rounded flex flex-col justify-center items-center relative">
                <div class="mb-8 h-56 w-56 -mt-24  border-4 rounded-full" 
                   style={{backgroundImage: `url(${Tech2.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                >
                    
                </div>
                <div class="text-center">
                    <p class="text-3xl capitalize  font-bold mb-2">name</p>
                    <p class="text-lg text-gray-400 font-normal">job</p>
                </div>
                <div className='text-center p-4 text-lg'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium molestias, natus accusamus autem est voluptate consequatur doloremque dignissimos voluptatem nisi architecto sapiente soluta atque nemo nam laboriosam eius sint. Voluptate?</p>
                </div>
            </div>
            
        </div>
    )
}

export default TechId
