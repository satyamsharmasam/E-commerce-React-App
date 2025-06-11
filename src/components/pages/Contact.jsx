import contact from '../../assets/contact.jpg';
const Contact = () => {
  return (
    <div className='pt-10 '>
      <h2 className='text-2xl  md:text-3xl font-semibold text-center pb-10 xl:pb-15 flex items-center gap-1 justify-center'>
        <span className='text-gray-500'>CONTACT</span> US
        <span className='w-8 h-[1px] bg-black '></span>
      </h2>
      <div className='flex items-center gap-10 xl:pr-20 xl:flex-nowrap flex-wrap'>
        <img className='w-150' src={contact} alt='' />

        <div className='flex flex-col gap-5 text-justify h-auto text-[#6B7280]'>
          <h3 className='text-xl font-bold text-[#4B5563]'>Our Store</h3>
          <div>
            <p>8912 Maplewood Drive</p>
            <p>Level 2, Brooklyn, New York, USA</p>
          </div>
          <div>
            <p>Tel: +1 (718) 222-0198</p>
            <p>Email: support@velvexstore.com</p>
          </div>
          <p className='text-xl font-bold text-[#4B5563]'>Careers at Forever</p>
          <p className='italic'>Learn more about our teams and job openings.</p>
          <button className='self-start text-black border border-black py-3 px-6 text-sm font-semibold transition-colors duration-300 ease-in-out hover:text-white hover:bg-black rounded-md'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
