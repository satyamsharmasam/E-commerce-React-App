const Carousel = () => {
  return (
    <section className='py-12 my-10 bg-gray-50 sm:py-16 '>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj capitalize'>
              Our happy customers say about us
            </h2>
          </div>
          <div className='mt-8 text-center md:mt-16 md:order-3'>
            <a
              href='#'
              title=''
              className='pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600'
            >
              Check all 2,157 reviews
            </a>
          </div>
          <div className='relative mt-10 md:mt-24 md:order-2'>
            <div className='absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6'>
              <div
                className='w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter'
                style={{
                  background:
                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                }}
              />
            </div>
            <div className='relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3'>
              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7'>
                  <div className='flex-1'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-[#FDB241]'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>
                    <blockquote className='flex-1 mt-8'>
                      <p className='text-lg leading-relaxed text-gray-900 font-pj'>
                        “I ordered a few items from Velvex and I’m beyond
                        impressed with the quality and fast delivery. Everything
                        was exactly as described. Definitely my go-to store
                        now!”
                      </p>
                    </blockquote>
                  </div>
                  <div className='flex items-center mt-8'>
                    <img
                      className='flex-shrink-0 object-cover rounded-full w-11 h-11'
                      src='https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png'
                      alt=''
                    />
                    <div className='ml-4'>
                      <p className='text-base font-bold text-gray-900 font-pj'>
                        — Emily Watson, New York, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7'>
                  <div className='flex-1'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-[#FDB241]'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>
                    <blockquote className='flex-1 mt-8'>
                      <p className='text-lg leading-relaxed text-gray-900 font-pj'>
                        “Bought clothes and accessories for my vacation. They
                        arrived on time and looked exactly like the photos. Will
                        shop again for sure!”
                      </p>
                    </blockquote>
                  </div>
                  <div className='flex items-center mt-8'>
                    <img
                      className='flex-shrink-0 object-cover rounded-full w-11 h-11'
                      src='https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png'
                      alt=''
                    />
                    <div className='ml-4'>
                      <p className='text-base font-bold text-gray-900 font-pj'>
                        — Ethan Brown, Sydney, Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col overflow-hidden shadow-xl'>
                <div className='flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7'>
                  <div className='flex-1'>
                    <div className='flex items-center'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className='w-5 h-5 text-[#FDB241]'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                        </svg>
                      ))}
                    </div>
                    <blockquote className='mt-8'>
                      <p className='text-lg leading-relaxed text-gray-900 font-pj'>
                        “Honestly, I was surprised at how good the quality was
                        for an online order. Everything fit perfectly, and I got
                        exactly what I ordered.”
                      </p>
                    </blockquote>
                  </div>
                  <div className='flex items-center mt-8'>
                    <img
                      className='w-11 h-11 rounded-full object-cover'
                      src='https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png'
                      alt='Isabella Rossi'
                    />
                    <div className='ml-4'>
                      <p className='text-base font-bold text-gray-900 font-pj'>
                        — Isabella Rossi, Rome, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Carousel;
