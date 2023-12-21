import {useState } from "react";
import { logo, telefono, llamada } from "../../assets";

import { navLinks } from "../../constants";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="container center md:mx-20 z-50">
      <nav className="flex items-center justify-between flex-wrap py-6 md:px-20 px-8 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-24">
          <a href={'/'} className="cursor-pointer">

            <img src={logo.src} className="md:w-100 md:h-32 md:w-32 h-16 w-16 mr-2" alt="Logo" />
          </a>
        </div>
        <div className="block lg:hidden">
        <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
            <svg
            className={`fill-lightBlue h-4 w-4 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
            className={`fill-lightBlue h-4 w-4 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path fill='#248cc1' d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
        </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
            <div>
                <div className="text-white font-extrabold flex justify-end text-2xl mb-2">
                    <h2>¡AGENDA TU CITA!  (662) 400 0007</h2>
                </div>
                <div className="text-sm lg:flex-grow navegacion">
                    {navLinks.map((item, index) => (
                    <a
                        href={item.id}
                        key={index}
                        className={`active block mt-4 font-extrabold text-xl lg:inline-block 
                        lg:mt-0 text-white mx-1`}
                    >
                        {item.title}
                    </a>
                    ))}
                </div>

            </div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;