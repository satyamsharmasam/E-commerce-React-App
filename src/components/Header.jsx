import logo from '../assets/logo.png';
import CartLogo from './CartLogo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 flex-wrap border-b-gray-200 border-b-2 sticky top-0 bg-white z-50 '>
      <img className='w-30 cursor-pointer' src={logo} alt='' />
      <div className='flex items-center flex-row-reverse  sm:flex-row'>
        <Nav />
        <CartLogo />
      </div>
    </header>
  );
};

export default Header;
