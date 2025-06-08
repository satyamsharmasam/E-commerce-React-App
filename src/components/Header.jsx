import logo from '../assets/logo.png';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='flex items-center justify-between p-1 flex-wrap border-b-gray-200 border-b-2 sticky top-0 bg-white z-50'>
      <img className='w-18 cursor-pointer' src={logo} alt='' />
      <Nav />
    </header>
  );
};

export default Header;
