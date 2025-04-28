import React from 'react'
import {tools} from "../assets/assets"
import Image from 'next/image'

const About = () => {
    return (
        <section className='py-6 sm:py-8 md:py-10 lg:py-14 px-4 md:px-6'>
            <main className='flex flex-col items-center w-full'>
                <div className="flex flex-col items-center">
                    <h1 className='text-3xl md:text-4xl xl:text-5xl mb-2 font-header'>About <span className='text-primary'>Me</span></h1>
                    <p className='text-gray-700 w-2xl text-center font-semibold'>I&#39;m a passionate web developer focused on creating modern, responsive, and user-friendly websites. I love turning ideas into real, functional products with clean design and smooth interactions.</p>
                </div>
                <div className="flex gap-4 flex-col items-center mt-10 ">
                    <h3 className='text-2xl font-bold font-header'>Tools & Technologies I Use:</h3>
                    <main className='grid grid-cols-3 lg:grid-cols-5 gap-y-5  gap-2 sm:gap-4 lg:gap-6 items-center '>
                        {tools.map((tool,index) => (
                            <div key={index} className="flex items-center justify-center  gap-2 p-2 md:p-4 h-32 rounded-md flex-col ring-1 ring-accent hover:bg-accent duration-500 ">
                                <Image src={tool.image} height={40} width={40} alt='' />
                                <h3 className='font-bold text-center text-xl '>{tool.name}</h3>
                            </div>
                        ))}
                    </main>
                </div>
            </main>

        </section>
    )
}

export default About
