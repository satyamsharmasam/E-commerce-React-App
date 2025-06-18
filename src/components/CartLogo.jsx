import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
const CartLogo = () => {
  return (
    <NavLink to={'/cart'} className='border-none'>
      <div className='text-[28px] sm:text-2xl cursor-pointer sm:p-0 pb-2 relative'>
        <HiOutlineShoppingBag />
        <h1 className='absolute text-[7px] top-[14px] right-[-2px] font-bold bg-black text-white w-3.5 text-center sm:py-[2.5px] py-[2px] rounded-full'>
          0
        </h1>
      </div>
    </NavLink>
  );
};

export default CartLogo;
