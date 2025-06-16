import { Link } from 'react-router-dom';

const Card = ({ url, productName, price, product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className=' p-1 flex flex-col gap-2'>
        <img src={url} alt='' className='w-auto rounded-sm' />
        <p className='text-sm'>{productName}</p>
        <p className='font-semibold font-mono text-sm'>${price}</p>
      </div>
    </Link>
  );
};

export default Card;
