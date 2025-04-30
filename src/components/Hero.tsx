import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='py-5 w-11/12 flex items-center justify-center lg:h-[700px] mt-4 mx-auto'>
            <main className='flex flex-col lg:flex-row w-full justify-between h-full items-center'>
                <div className="flex flex-col gap-4 z-40 w-full mt-30 lg:mt-0 lg:w-2/5">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-header'><span className='text-xl text-gray-600'>Hello ,</span> <br />  I&#39;m <span className='bg-clip-text text-transparent bg-gradient-to-br from-black to-accent'>Anas boumediani</span>,</h1>
                    <p className='text-gray-800 font-semibold mb-4 text-lg'>
                        18 years old. I&rsquo;m a fullstack developer, self-taught and passionate about building complete web applications.                    </p>
                    <button className='bg-primary hover:bg-accent duration-500 py-3 text-white font-bold hover:text-black w-36 cursor-pointer rounded-lg'>Hire me</button>
                </div>

                <div className=" w-full lg:w-3/5 relative ">
                    <Image src={"/hero.png"} alt='' className='w-full absolute h-[500px] object-cover -bottom-25 lg:-top-65  ' width={700} height={800} />
                </div>

            </main>


        </section>
    )
}

export default Hero
