import {services} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <section id='about' className='py-6 sm:py-8 md:py-10 lg:py-14 px-4 w-10/12 mx-auto md:px-6'>
            <h1 className='text-3xl text-center md:text-4xl xl:text-5xl font-header'>Services</h1>
            <main className='mt-5 flex flex-col gap-5'>
                {services.map((service,index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 insetShad rounded-md p-5">
                        <Image className='w-14 h-14 ' alt='' src={service.icon} />
                        <div className="flex flex-col gap-1">
                            <h2 className='text-xl font-bold'>{service.title}</h2>
                            <p className='text-justify text-gray-700'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </main>

        </section>
    )
}

export default Services
