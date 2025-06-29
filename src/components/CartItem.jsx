import { RiDeleteBin6Line } from 'react-icons/ri';
import { removeFromCart } from '../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ img, title, price, quantity, size, id }) => {
  const dispatch = useDispatch();

  return (
    <div className='border-b-2 border-t-2 border-red-600 p-3 flex justify-between items-center pr-20'>
      <div className='flex gap-5 items-center'>
        <img className='w-20' src={img} alt='' />
        <div className='flex flex-col gap-2'>
          <h2 className='font-semibold'>{title}</h2>
          <div className='flex items-center gap-4'>
            <p>${price}</p>
            <button className='border-2 border-[#E5E7EB] py-1 px-[12px] bg-[#F3F4F6] '>
              {size}
            </button>
          </div>
        </div>
      </div>

      <input
        type='number'
        className='h-10 p-1 w-20 border-1 '
        value={quantity}
      />

      <button
        className='text-2xl cursor-pointer'
        onClick={() => dispatch(removeFromCart({ id, size }))}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default CartItem;
