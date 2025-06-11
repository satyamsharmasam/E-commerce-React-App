import { useState, useMemo } from 'react';
import { useGetProductQuery } from '../../../redux/apiSlice';
import Card from '../Card';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';

const Collection = () => {
  const { data } = useGetProductQuery();
  const products = data?.products?.slice(4, 52).reverse() || [];
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Add or remove category from the filter
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Add or remove subcategory from the filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Filter and sort products based on selected values by useMemo()
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by selected categories
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Filter by selected subcategories
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sort product logic
    switch (sortType) {
      case 'low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, category, subCategory, sortType]);

  return (
    <div className='mt-15 flex justify-between gap-10 lg:flex-nowrap flex-wrap lg:flex-row flex-col'>
      {/* Left Sidebar */}
      <div className='min-w-60 '>
        <p
          className='my-2 text-xl flex cursor-pointer'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <span className='h-3 sm:hidden text-2xl'>
            {showFilter ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
          </span>
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 rounded-sm sm:block ${
            showFilter
              ? 'motion-preset-slide-down-lg motion-ease-spring-bouncier'
              : 'hidden'
          }`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className='flex gap-2'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Sub-category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 rounded-sm  sm:block ${
            showFilter
              ? 'motion-preset-slide-down-lg motion-ease-spring-bouncier'
              : 'hidden'
          }`}
        >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((sub) => (
              <label key={sub} className='flex gap-2'>
                <input
                  className='w-3'
                  type='checkbox'
                  value={sub}
                  onChange={toggleSubCategory}
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className='w-full'>
        <div className='flex justify-between items-center gap-2'>
          <p className='text-xl font-semibold md:text-2xl'>
            <span className='text-gray-500'>ALL </span> COLLECTIONS
          </p>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border border-gray-300 rounded-sm px-2 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition duration-200'
          >
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 py-4'>
          {filteredProducts.map((item, key) => (
            <Card
              key={key}
              url={item.image}
              productName={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
