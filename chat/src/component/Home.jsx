import HeroImg from '../assets/website/coffee2.png';

const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-black/90 flex justify-center items-center text-white'>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {/* Text content section */}
         <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
         <div className='flex flex-col justify-center'>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
              We serve the richest <span className='text-primary font-cursive'>Coffee</span> in the city
            </h1>
            <button className='mt-6 bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200'>
              Coffee And Code
            </button>
          </div>
         </div>
          {/* Image content section */}
          <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
          <div className='flex justify-center sm:justify-end'>
            <img src={HeroImg} alt="Coffee cup" className=' w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'  />
            <div className='absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary  p-3 rounded-xl'>
              <h1>Hey Coder</h1>
            </div>
            <div className='bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl'>
            <h1>Brand Coffee</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
