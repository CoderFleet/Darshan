import React from 'react'

function Navbar() {
    return (
        <div className="bg-gray-100" style={{ color: 'black' }}>
            <div className="navbar px-10 py-4 shadow-md">
                <div className="navbar-start flex items-center"> 
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" style={{ color: 'white' }}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <a className="ml-4">
                        <img
                            src="../public/darshanLogo2.png"
                            alt="Darshan Logo"
                            className="h-10 md:h-12 lg:h-16"
                        />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-6">
                        <li>
                            <a href="#" className="text-gray-800 transform hover:scale-110 transition duration-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 transform hover:scale-110 transition duration-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 transform hover:scale-110 transition duration-200">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 transform hover:scale-110 transition duration-200">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-800 transform hover:scale-110 transition duration-200">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-black text-white px-6 py-2 rounded-full hidden md:inline-block mr-4 hover:bg-gray-700 hover:shadow-lg transform hover:scale-105 transition duration-200">Join</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;