import React from 'react';
import '../styles/HomeStyle.css'

import Typed from 'typed.js';
import Founder from '../common/Founder';
import ContactUs from '../common/ContactUs';

function Home() {


  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Biology', 'Pharmacy', 'Medical', 'courses', 'jobs'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* home  */}
      <div className='px-5 grid sm:grid-cols-1 md:grid-cols-2 mt-6'>
        {/* start text  */}
        <div className='text-center md:text-start'>
          <p className='text-3xl font-bold'>Welcome to <span className='text-lime-600'>MicroscopeForever</span></p>
          <p className='text-3xl font-bold'>Learn{" "}
            <span ref={el} className='text-3xl font-bold text-lime-600' />
          </p>
          <p>where we bring the fascinating world of microbiology to life through engaging content, captivating images, and insightful articles. Explore the hidden universe of microbes with us and discover the beauty and importance of the unseen world around us</p>
          {/* buttons */}
          <div className='mt-3'>
            <button className='bg-lime-500 hover:bg-lime-600 text-white p-2 border border-s-violet-100 rounded-md me-2'>Free Courses</button>
            <button className='bg-slate-500 hover:bg-slate-600 text-white p-2 border border-s-violet-100 rounded-md'>Explore Blogs</button>
          </div>
        </div>
        {/* end text  */}

        {/* image  */}
        <div>
          <img src="https://images.fineartamerica.com/images-medium-large-5/15-woman-using-microscope-wladimir-bulgarscience-photo-library.jpg" alt="img" className='rounded-s-lg h-auto max-width: 100% mt-5' />
        </div>

      </div>

      {/* founder component */}
      <Founder></Founder>

      {/* contact  */}
      <ContactUs></ContactUs>
    </>
  );
}

export default Home;
