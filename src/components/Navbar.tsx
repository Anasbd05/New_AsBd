import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-6 px-10 flex items-center border-b bg-white w-11/12 mx-auto  rounded-md border-foreground justify-between'>
            <h1 className='font-bold text-4xl font-header'>AS_BD</h1>
            <div className="flex gap-6 items-center">
                <Link className='hover:text-primary' href={"#"}>Home</Link>
                <Link className='hover:text-primary' href={"#about"}>About</Link>
                <Link className='hover:text-primary' href={"#services"}>Services</Link>
                <Link className='hover:text-primary' href={"#pricing"}>Pricing</Link>
            </div>
            <button className=' py-2 px-7 ring cursor-pointer ring-foreground hover:bg-primary duration-500 rounded-lg'>Contact Me</button>
        </nav>
    )
}

export default Navbar
