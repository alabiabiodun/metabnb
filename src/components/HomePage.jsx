import React from 'react';
import { MenuBar } from '../components/MenuBar';

export const HomePage = () => {
  return (
    <div className="container-total z-200 font-['Red Rose']">
      <div id='navbar' className='relative lg:m-20 md:m-20 sm:m-10 xs:m-10'>
        <MenuBar />
      </div>
      <div id='container'>
        <div id='first_section' className='grid lg:grid-row-4 lg:grid-cols-4 lg:gap-4 lg:m-15 md:grid-row-4 md:grid-cols-4 md:p-12 md:gap-0 sm:grid-row-4 sm:grid-cols-2 sm:gap-4 sm:p-12 xs:grid-row-8 xs:grid-cols-1 xs:gap-4 xs:p-12'>
          <div id='left_first_section' className='lg:row-span-4 lg:col-span-2 lg:ml-10 md:row-span-4 md:col-span-2 md:ml-3 sm:row-span-2 sm:col-span-1 sm:ml-10 xs:row-span-2 xs:col-span-1 xs:ml-2'>
            <p className='lg:text-5xl md:text-4xl sm:text-2xl xs:text-2xl leading-relaxed mt-2 xs:mt-0'>
              Rent a 
              <small id='text-color' className='lg:text-5xl md:text-4xl sm:text-2xl xs:text-2xl'> Place </small>
              away from<br/><small id='text-color' className='lg:text-5xl md:text-3xl sm:text-2xl xs:text-2xl'> Home </small>
              in the<small id='text-color' className='lg:text-5xl md:text-3xl sm:text-2xl xs:text-2xl'> Metaverse </small>
            </p>
            <p className='mt-10 xs:mt-4 lg:text-lg md:text-md sm:text-sm xs:text-[0.9rem] xs:text-justify'>
              we provide you access to luxury and affordable houses<br/> 
              in the metaverse, get a chance to turn your<br/>imagination 
              to reality at your comfort zone
            </p>
            <div className='mt-4 flex flex-row xs:flex-none'>
              <input id='search_location' name="search_location" type="text" placeholder="Search for location" className='lg:w-80 md:w-60 sm:w-30 xs:w-25 p-2 border border-1 border-gray-800 text-gray-500 rounded-l-md outline outline-0'/>
              <button id='button-color' className='lg:w-40 md:w-40 sm:w-20 xs:w-25 p-2 "bg-gradient-to-r from-red-160 via-green-34 to-blue-121 border border-1 border-pink-800 text-white rounded-r-md'>Search</button>
            </div>
          </div>
          <div id='right_first_section' className='lg:row-span-4 lg:col-span-2 md:row-span-4 md:col-span-2 sm:row-span-4 sm:col-span-1 xs:row-span-6 xs:flex xs:flex-col xs:justify-between items-center md:mr-8 w-full relative z-100'>
            <div className='absolute lg:left-80 md:left-60 sm:left-40 xs:left-20 w-100'>
              <img src='./img/image_3.png' alt='image_logo' className='lg:w-40 md:w-40 sm:w-20 xs:w-20 p-1'/>
              <img src='./img/image_5.png' alt='image_logo' className='lg:w-40 md:w-40 sm:w-20 xs:w-20 p-1'/>            
            </div>
            <div className='absolute lg:top-15 lg:left-40 md:left-20 md:top-10 sm:left-20 sm:top-20 xs:top-10 xs:left-40'>
              <img src='./img/image_4.png' alt='image_logo' className='lg:w-40 md:w-40 sm:w-20 xs:w-20 p-1 '/>
              <img src='./img/image_6.png' alt='image_logo' className='lg:-40 md:w-40 sm:w-20 xs:w-20 p-1'/>
            </div>
          </div>
        </div>
        <div id='footer-first-section' className='flex flex-row justify-around items-center gap-2 mt-5 w-full h-20'>
          <div className='w-40'>
            <img src='./img/image_7.png' width='200' alt='image_footer' />
          </div>
          <div className='w-40'>
            <img src='./img/image_8.png' width='200' alt='image_footer'  />          
          </div>
          <div className='w-40'>
            <img src='./img/image_9.png' width='200' alt='image_footer' />          
          </div>
        </div>
        <div id='second-section' className='mt-10 w-full'>
          <div id='title' className='text-center text-black-800 text-3xl xs:text-2xl font-bold  xs:mt-2'>
            <p className='p-2'>
              Inspiration for your next adventure
            </p>
            <div className='lg:grid lg:grid-row-2 lg:grid-cols-4 lg:gap-2 md:grid md:grid-row-4 md:grid-cols-2 md:gap-3 sm:grid sm:grid-row-8 sm:grid-cols-1 sm:gap-2 xs:grid xs:grid-row-8 xs:grid-cols-1 xs:gap-2 justify-items-center items-center mt-4'>
              <div className=''>
                <img src='./img/image_10.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_11.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_12.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_13.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_14.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_15.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_16.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_17.png' alt='img-section-two' />
              </div>
            </div>
          </div>
        </div>
        <div id='third-section' className='flex lg:flex-row lg:justify-center lg:items-center md:flex-row md:justify-center md:items-center xs:flex-col xs:justify-center xs:items-center gap-3 mt-3 pb-10 pt-5'>
          <div id='left-third-section flex flex-col items-start justify-around'>
            <h5 className='xs:text-3xl md:text-4xl lg:text-4xl text-white font-bold sm:ml-3 xs:ml-5'>Metabnb NFTs</h5>
            <p className='lg:text-lg xs:text-sm sm:text-sm md:text-md text-white font-bold pt-6 pb-5 sm:ml-3 xs:ml-5'>
              Discover our NFT gift cards collection. Loyal<br/>customers 
              gets amazing gift cards which are<br/>traded as NFTs. These 
              NFTs gives our customer<br/>access to loads of our exclusive 
              services.
            </p>
            <button id='button1-color' className='w-30 rounded-md p-2 text-md sm:ml-3 xs:ml-5'>Learn more</button>
          </div>
          <div id='right-third-section' className='w-50 flex flex-row justify-center xs:mt-10'>
            <img src='./img/image_18.png' alt='img-section-two' />
          </div>        
        </div>
        <div id='last-section' className='flex lg:flex-row lg:justify-around lg:items-center md:flex-row md:justify-around md:items-center gap-5 xs:flex-col xs:justify-center xs:items:start xs:gap-1'>
          <div id='left-last-section' className='ml-10 xs:ml-2 mt-8 flex flex-col justify-center items-between gap-20 w-80'>
            <div>
              <img src='./img/image_19.png' width='160' alt='img-last-section'/>
            </div>
            <div>
              <img src='./img/image_20.png' width='100' alt='img-last-section'/>
              <img src='./img/image_21.png' width='100' alt='img-last-section' className='mt-3'/>
            </div>
          </div>
          <div id='right-last-section' className='grid grid-row-5 grid-cols-3 gap-2 text-white w-100 lg:text-[1rem] lg:leading-8 lg:ml-20 lg:mt-10 md:text-[0.9rem] md:leading-8 md:ml-20 md:mt-10 xs:ml-0 xs:mt-5 xs:text-[0.8rem] xs:ml-3'>
            <div className='text-md font-bold'><h4>Community</h4></div>
            <div className='text-md font-bold'><h4>Places</h4></div>
            <div className='text-md font-bold'><h4>About us</h4></div>
            <div><p>NFT</p></div>
            <div><p>Castle</p></div>
            <div><p>Road map</p></div>
            <div><p>Tokens</p></div>
            <div><p>Farms</p></div>
            <div><p>Creators</p></div>
            <div><p>Landlords</p></div>
            <div><p>Beach</p></div>
            <div><p>Career</p></div>
            <div><p>Discord</p></div>
            <div><p>Learn more</p></div>
            <div><p>Contact us</p></div>
          </div>
        </div>         
      </div>
      
    </div>    
  )
}
