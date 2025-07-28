import { RiDeleteBin6Line } from 'react-icons/ri';
import { removeFromCart, updateQuantity } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const CartItem = ({ img, title, price, quantity, size, id }) => {
  const dispatch = useDispatch();
  const [inputQty, setInputQty] = useState(quantity);

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty >= 1) {
      setInputQty(newQty); // local update
      dispatch(updateQuantity({ id, size, quantity: newQty })); // redux update
    }
  };

  return (
    <div className='border-b-1 border-t-1 border-gray-300 p-3 flex items-center xl:pr-20 justify-between gap-2 '>
      <div className='flex gap-5 items-center'>
        <img className='w-20' src={img} alt='' />
        <div className='flex flex-col gap-5'>
          <h2 className='font-semibold'>{title}</h2>
          <div className='flex items-center gap-4'>
            <p className='font-semibold'>${price}</p>
            <button className='border-2 border-[#E5E7EB] py-1 px-[12px] bg-[#F3F4F6]'>
              {size}
            </button>
          </div>
        </div>
      </div>
      <div className='flex gap-2 sm:gap-8'>
        <input
          type='number'
          className='h-10 p-2 w-12 xl:w-20 border-1 '
          defaultValue={inputQty}
          onChange={handleQuantityChange}
          contentEditable
        />

        <button
          className='text-2xl cursor-pointer'
          onClick={() => dispatch(removeFromCart({ id, size }))}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
