import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
      <div className='flex-col xl:flex-row flex xl:items-center  justify-between  text-gray-700  border-b-gray-200 border-b-2 pt-10 gap-10 text-sm pb-4'>
        <div className='xl:w-sm w-auto text-justify flex flex-col flex-wrap items-start gap-4'>
          <img className='w-30' src={logo} alt='' />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className='flex-col xl:flex-row flex items-start justify-around xl:w-10/18 gap-10 '>
          <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold text-black '>Pages</h1>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active-footer' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to='/collection'
              className={({ isActive }) => (isActive ? 'active-footer' : '')}
            >
              collection
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active-footer' : '')}
            >
              About
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active-footer' : '')}
            >
              contact
            </NavLink>
          </div>
          <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-semibold text-black'>GET IN TOUCH</h1>
            <p>+1-000-000-0000</p>
            <p>greatstackdev@gmail.com</p>
            <a href='https://www.instagram.com/satyamsharmasam/'> Instagram</a>
          </div>
        </div>
      </div>
      <div className='text-center p-4 text-sm'>
        Copyright 2025@ greatstack.dev - All Right Reserved.
      </div>
    </>
  );
};

export default Footer;
