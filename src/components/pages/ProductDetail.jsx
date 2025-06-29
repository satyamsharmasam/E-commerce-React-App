import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../redux/slice/apiSlice';
import { addToCart } from '../../../redux/slice/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const { id } = useParams(); // id from URL
  const { data, isLoading } = useGetProductQuery();

  if (isLoading) return <p>Loading...</p>;

  // Find single product by id
  const product = data?.products?.find((item) => item._id === id);

  if (!product) return <p>Product not found</p>;

  function handleAddToCart() {
    if (!selectedSize) {
      alert('select the size first');
      return;
    }

    dispatch(
      addToCart({
        id: product._id,
        price: product.price,
        image: product.image,
        title: product.title,
        size: selectedSize,
      })
    );

    alert('product is selected');

    selectedSize(null);
  }

  return (
    <div className='flex my-10 gap-10 font-outfit xl:flex-nowrap flex-wrap items-center  '>
      <img className='w-160' src={product.image[0]} alt={product.name} />
      <div>
        <div className='border-b-1 border-gray-300  flex flex-col gap-5 pb-5 mb-5'>
          <h1 className='font-semibold text-2xl'>{product.name}</h1>
          <div className='flex items-center'>
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className='w-5 h-5 text-[#ff9900]'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
            <svg
              className='w-5 h-5 text-[#fdb24176]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
            &nbsp;&nbsp;&nbsp;(122)
          </div>
          <p className='font-semibold text-3xl '>${product.price}</p>
          <p className='text-[#797F88] text-[16px]'>{product.description}</p>
          <p>Select Size</p>
          <div className='flex items-center gap-2'>
            {product.sizes.map((size, key) => (
              <button
                className='border-2 border-[#E5E7EB] py-2 px-4 bg-[#F3F4F6] font-semibold cursor-pointer focus:text-[#F3F4F6] focus:bg-black'
                key={key}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            className='px-7 py-3 bg-black text-white w-fit cursor-pointer'
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
        <div className='text-[#7c838e] text-sm '>
          100% Original product. Cash on delivery is available on this product.
          Easy return and exchange policy within 7 days.
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
