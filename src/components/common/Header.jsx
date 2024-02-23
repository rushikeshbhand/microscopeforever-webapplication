import React from 'react';

import { Link } from "react-router-dom";

function Header(props) {
  const toggleNavbar = () => {
    const collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };

  return (
    <div className="header-2 drop-shadow-lg">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="#" className="font-bold text-xl text-lime-600">{props.title}</Link>
            <button onClick={toggleNavbar} className="px-3 py-1 text-gray-900 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <Link to="/home" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-lime-600">{props.home}</Link>
            <Link to="/notes" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{props.notes}</Link>
            <Link to="/blogs" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{props.blogs}</Link>
            <Link to="/courses" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{props.courses}</Link>
            <Link to="/jobs" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{props.jobs}</Link>
            <Link to="/about" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">{props.about}</Link>
            <Link to="/login" className="p-2 lg:px-4 md:mx-2 text-lime-600 text-center border border-transparent rounded transition-colors duration-300">Login</Link>
            <Link to="/signup" className="p-2 lg:px-4 md:mx-2 text-lime-600 text-center border border-solid border-lime-600 rounded hover:bg-lime-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
