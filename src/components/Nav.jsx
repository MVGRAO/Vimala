import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 ">
      <div className="flex items-center justify-between    py-4 md:px-10 px-7">
        <span className="font-bold text-2xl cursor-pointer bg-white flex items-center font-[Poppins] text-gray-800">
          <span className="text-4xl text-slate-600 mr-1 pt-2 pl-4 font-DancingScript bg-transparent">
            Artist
          </span>
        </span>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden text-3xl text-gray-800" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}

        <ul
          className={`flex items-center md:static absolute  w-full font-Playwrite left-0 md:w-auto md:py-0 py-4 transition-all duration-500 ease-in-out  max-md:flex-col max-md:items-center max-md:bg-white max-md:rounded-xl ${
            isOpen ? 'top-14' : 'top-[-490px]'
          } md:flex-row`}
        >
           <li className="md:ml-8 text-xl md:my-0 my-7 text-center border-b-4 border-transparent hover:border-gray-400 inline-block w-fit">
            <Link to="/" className="text-gray-800 hover:text-gray-300 duration-500">
              Home
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-center border-b-4 border-transparent hover:border-gray-400 inline-block w-fit">
            <Link to="/About" className="text-gray-800 hover:text-gray-400 duration-500">
              About
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-center border-b-4 border-transparent hover:border-gray-400 inline-block w-fit">
            <Link to="/Arts" className="text-gray-800 hover:text-gray-400 duration-500">
              Arts
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-center border-b-4 border-transparent hover:border-gray-400 inline-block w-fit">
            <Link to="/Contact" className="text-gray-800 hover:text-gray-400 duration-500">
              Contact
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 text-center border-b-4 border-transparent hover:border-gray-400 inline-block w-fit">
            <Link to="/Favorite" className="text-gray-800 hover:text-gray-400 duration-500">
              Favorite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
