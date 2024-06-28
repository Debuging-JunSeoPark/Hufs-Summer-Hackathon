import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex gap-5 justify-between self-stretch px-16 py-2.5 w-full text-2xl font-bold leading-6 text-right bg-white bg-opacity-0 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <Link to={'/'}>
        <img
          src="logo.png"
          className="justify-center text-black whitespace-nowrap max-md:px-5"
          alt="logo"
          style={{ width: '200px', height: '60px' }} // Adjust the height as needed
        />
      </Link>
      <div className="flex gap-5 justify-between">
        <Link to={'/login'}>
          <div className="justify-center px-4 py-3.5 border-cyan-300 border-solid border-[3px] rounded-[60px] text-neutral-900 max-md:px-5">
            Sign In
          </div>
        </Link>
        <div className="justify-center px-4 py-3.5 text-white bg-gradient-to-r from-cyan-600 to-blue-800 border-cyan-300 border-solid border-[3px] rounded-[60px] max-md:px-5">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Header;
