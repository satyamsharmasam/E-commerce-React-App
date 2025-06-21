import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import CartLogo from './CartLogo';
import Nav from './Nav';
import ScrollProgress from './magicui/scroll-progress';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 flex-wrap border-b-gray-200 border-b-2 sticky top-0 bg-white z-50 '>
      <NavLink to={'/'} className={'border-none'}>
        <img className='w-30 cursor-pointer ' src={logo} alt='' />
      </NavLink>
      <div className='flex items-center flex-row-reverse  sm:flex-row sm:gap-0 gap-1'>
        <Nav />
        <CartLogo />
      </div>
      <ScrollProgress className='top-[82px] sm:top-[63px] z-0 h-[2px]' />
    </header>
  );
};

export default Header;
