import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='my-5'>
            <nav className="bg-violet-500 py-5">
                <div className="flex flex-wrap items-center justify-around py-4">
                    <Link to='/' className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="text-2xl font-semibold text-white ">Tutionee</span>
                    </Link>
                    <div className="flex md:order-2">
                        <Link to='/leaflet'>
                            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-lg px-4 py-2 text-center mr-3 md:mr-0">Post Your Leaflet</button>
                        </Link>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to='/about'>About</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to='/login'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center w-1/2 mx-auto mt-5 px-4 bg-white rounded-full py-1">
                    <input type='text' className='border-0 text-lg focus:outline-none' placeholder='Find your best teacher' />

                    <div className="bg-yellow-400 p-4 rounded-full">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;