import { useDispatch, useSelector } from 'react-redux';
import { triggerAlert } from '../../../redux/slice/alertSlice';
import { MdErrorOutline } from 'react-icons/md';

// input class and inputs aob
const inputClass = 'border border-gray-300 rounded py-1.5 px-3.5 w-full';
const inputs = [
  { name: 'firstName', placeholder: 'First name' },
  { name: 'lastName', placeholder: 'Last name' },
  { name: 'email', type: 'email', placeholder: 'Email address' },
  { name: 'street', placeholder: 'Street' },
  { name: 'City', placeholder: 'City' },
  { name: 'state', placeholder: 'State' },
  { name: 'zipcode', type: 'number', placeholder: 'Zipcode' },
  { name: 'country', placeholder: 'Country' },
  { name: 'phone', type: 'number', placeholder: 'Phone' },
];

// payment Option component

const PaymentOption = ({ img, text, active }) => {
  const dispatch = useDispatch();

  function demoMood() {
    if (text == 'Razorpay' || text == 'Stripe') {
      dispatch(
        triggerAlert({
          message: `${text} is disabled in demo , use COD`,
          type: 'error',
          icon: <MdErrorOutline className='text-xl' />,
        })
      );
    }
  }

  return (
    <div
      className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
      onClick={demoMood}
    >
      <p
        className={`min-w-3.5 h-3.5 border rounded-full ${
          active ? 'bg-green-400' : ''
        }`}
      />
      {img ? (
        <img className='h-5 mx-4' src={img} alt='' loading='lazy' />
      ) : (
        <p className='text-gray-500 text-sm font-medium mx-4'>{text}</p>
      )}
    </div>
  );
};
const PlaceOrder = () => {
  const { total, subtotal } = useSelector((state) => state.cart);

  return (
    <div>
      <form className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <div className='inline-flex gap-2 items-center mb-3'>
              <p className='text-gray-500'>
                DELIVERY
                <span className='text-gray-700 font-medium'> INFORMATION</span>
              </p>
              <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' />
            </div>
          </div>
          <div className='flex gap-3'>
            {inputs.slice(0, 2).map((i) => (
              <input
                key={i.name}
                name={i.name}
                placeholder={i.placeholder}
                className={inputClass}
                required
              />
            ))}
          </div>
          {inputs.slice(2, 4).map((i) => (
            <input
              key={i.name}
              name={i.name}
              placeholder={i.placeholder}
              className={inputClass}
              type={i.type || 'text'}
              required
            />
          ))}
          <div className='flex gap-3'>
            {inputs.slice(4, 6).map((i) => (
              <input
                key={i.name}
                name={i.name}
                placeholder={i.placeholder}
                className={inputClass}
                type={i.type || 'text'}
                required
              />
            ))}
          </div>
          <div className='flex gap-3'>
            {inputs.slice(6, 8).map((i) => (
              <input
                key={i.name}
                name={i.name}
                placeholder={i.placeholder}
                className={inputClass}
                type={i.type || 'text'}
                required
              />
            ))}
          </div>
          <input
            name='phone'
            placeholder='Phone'
            className={inputClass}
            type='number'
            required
          />
        </div>
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <div className='w-full'>
              <div className='text-2xl'>
                <div className='inline-flex gap-2 items-center mb-3'>
                  <p className='text-gray-500'>
                    CART
                    <span className='text-gray-700 font-medium'> TOTALS</span>
                  </p>
                  <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' />
                </div>
              </div>
              <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>$ {subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <p>Shipping Fee</p>
                  <p>$ 10.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <b>Total</b>
                  <b>$ {total.toFixed(2)}</b>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <div className='inline-flex gap-2 items-center mb-3'>
              <p className='text-gray-500'>
                PAYMENT
                <span className='text-gray-700 font-medium'> METHOD</span>
              </p>
              <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700' />
            </div>
            <div className='flex gap-3 flex-col lg:flex-row'>
              <PaymentOption
                img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png'
                text={'Stripe'}
              />
              <PaymentOption
                img='https://foreverbuy.in/assets/razorpay_logo-DrY6yMWi.png'
                text={'Razorpay'}
              />
              <PaymentOption text=' CASH ON DELIVERY' active />
            </div>
            <div className='w-full text-end mt-8'>
              <button
                type='submit'
                className='bg-black text-white px-16 py-3 text-sm'
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
