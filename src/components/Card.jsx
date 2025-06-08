const Card = ({ url, productName, price }) => {
  return (
    <div className=' p-1 flex flex-col gap-2'>
      <img src={url} alt='' className='w-auto rounded-sm' />
      <p className='text-sm'>{productName.slice(0, 25)}</p>
      <p className='font-semibold font-mono'>${price}</p>
    </div>
  );
};

export default Card;
