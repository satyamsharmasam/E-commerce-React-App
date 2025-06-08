import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
const NavLinks = () => {
  return (
    <>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink
        to='/collection'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        collection
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        About
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'active' : '')}
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
          <NavLinks />
        </div>
        <div className='sm:hidden text-2xl w-3'>
          <button onClick={toggleNavbar}>
            {isOpen ? <RxCross1 /> : <RiMenu3Line />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className='sm:hidden flex-col items-center basis-full
         bg-black text-white h-40 py-4 text-sm uppercase flex justify-between motion-preset-slide-left-lg motion-ease-spring-bouncier z-50 absolute top-20 left-0 w-full'
        >
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
