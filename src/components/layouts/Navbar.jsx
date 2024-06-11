import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-5'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className='text-5xl'>Logo</h1>
                    </div>
                    <div>
                        <ul className='flex gap-x-8'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-cyan-400 px-10 py-4 text-lg font-500 text-white rounded transition-all duration-200 hover:bg-black'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar