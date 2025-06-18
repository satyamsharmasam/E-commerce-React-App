import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
const NavLinks = ({ onClick }) => {
  return (
    <>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={onClick}
      >
        Home
      </NavLink>
      <NavLink
        to='/collection'
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={onClick}
      >
        collection
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={onClick}
      >
        About
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={onClick}
      >
        contact
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex flex-[1] items-center justify-end overflow-hidden gap-4 p-2 relative '>
        <div className='hidden sm:flex gap-5 text-[15px] text-gray-700 items-center justify-end font-outfit uppercase mr-5'>
          <NavLinks onClick={toggleNavbar} />
        </div>
        <div className='sm:hidden text-[28px] w-[26px]'>
          <button onClick={toggleNavbar}>
            {isOpen ? <RxCross1 /> : <RiMenu3Line />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className='sm:hidden flex-col items-center basis-full
         bg-black text-white h-52  py-6 text-sm uppercase flex justify-between motion-preset-slide-left-lg motion-ease-spring-bouncier z-50 absolute top-18 left-0 w-full'
        >
          <NavLinks onClick={toggleNavbar} />
        </div>
      )}
    </>
  );
};

export default Nav;
