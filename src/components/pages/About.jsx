import { lazy } from 'react';
import AboutImage from '../../assets/AboutImage.png';
const Carousel = lazy(() => import('../Carousel'));

const About = () => {
  return (
    <div className='pt-10 '>
      <h2 className='text-2xl  md:text-3xl font-semibold pb-10 xl:pb-15 flex items-center gap-1 justify-center'>
        <span className='text-gray-500'>ABOUT</span> US
        <span className='w-8 h-[1px] bg-black '></span>
      </h2>
      <div className='flex items-center gap-15 xl:pr-20 xl:flex-nowrap flex-wrap justify-center'>
        <img className='w-115' src={AboutImage} alt='' loading='lazy' />
        <div className='flex flex-col gap-5 text-justify h-auto'>
          <p>
            Velvex was born from a bold vision — to redefine modern fashion with
            timeless elegance and effortless comfort. What started as a spark of
            creativity has grown into a brand that stands for premium quality,
            curated style, and refined individuality.
          </p>
          <p>
            At Velvex, we believe style should be simple, confident, and
            expressive. Every thread we weave is a reflection of our commitment
            to craftsmanship and minimal luxury. Whether you're dressing for
            everyday moments or standout occasions, our collections are designed
            to elevate the experience of getting dressed.
          </p>
          <h3 className='font-bold'>Our Mission</h3>
          <p>
            Our mission at Velvex is simple: To bring style, confidence, and
            comfort into every wardrobe. We strive to create clothing that feels
            as good as it looks — blending contemporary aesthetics with quality
            that lasts. From fabric selection to final stitch, we obsess over
            the details so you don’t have to. We're not just creating clothes —
            we're creating a lifestyle that celebrates your individuality.
          </p>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default About;
