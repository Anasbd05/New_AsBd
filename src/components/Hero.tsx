import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='py-8 w-11/12 h-[700px] mt-8 mx-auto'>
            <main className='flex gap-4 justify-between h-full items-center'>
                <div className="flex flex-col gap-4 w-2/5">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-header'>Hey! I&#39;m <span className='bg-clip-text text-transparent bg-gradient-to-br from-black to-accent'>Anas boumediani</span>,</h1>
                    <p className='text-gray-800 font-semibold mb-4 text-lg'>
                        18 years old. I&rsquo;m a fullstack developer, self-taught and passionate about building complete web applications.                    </p>
                    <button className='bg-primary hover:bg-accent duration-500 py-3 text-white font-bold hover:text-black w-36 cursor-pointer rounded-lg'>Hire me</button>
                </div>

                <div className="w-3/5 relative ">
                    <Image src={"/hero.png"} alt='' className='w-full absolute -top-55  ' width={500} height={600} />
                </div>

            </main>


        </section>
    )
}

export default Hero
