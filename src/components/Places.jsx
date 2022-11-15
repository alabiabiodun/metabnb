import React from 'react'
//import Button from 'react-bootstrap/Button';
import { MenuBar } from '../components/MenuBar'
import MenuBar1 from '../components/MenuBar1';

const Places = () => {
  return (
    <div>
        <div id='navbar'>
            <MenuBar />
        </div>
        <div id='navbar1'>
            <MenuBar1 />        
        </div>        
        <div id='second-section' className='mt-60 w-full'>
          <div id='title' className='text-center text-black-800 text-3xl max-sm:text-2xl font-bold mt-6 max-sm:mt-2'>
            <div className='lg:grid lg:grid-row-2 lg:grid-cols-4 lg:gap-2 md:grid md:grid-row-4 md:grid-cols-2 md:gap-2 sm:grid sm:grid-row-8 sm:grid-cols-1 sm:gap-2 max-sm:grid max-sm:grid-row-8 max-sm:grid-cols-1 max-sm:gap-2 pt-2 lg:ml-5 lg:mr-5 md:ml-12 md:mr-12 max-sm:ml-6'>
              <div>
                <img src='./img/image_001.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_002.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_003.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_004.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_005.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_006.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_007.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_008.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_009.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_010.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_011.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_012.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_013.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_014.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_015.png' alt='img-section-two' />
              </div>
              <div>
                <img src='./img/image_016.png' alt='img-section-two' />
              </div>
            </div>
          </div>
        </div>
        <div id='last-section' className='flex flex-row justify-around items-center gap-5 max-sm:gap-1 mt-5'>
          <div id='left-last-section' className='ml-10 max-sm:ml-2 mt-10 flex flex-col justify-center items-between gap-20 w-80'>
            <div>
              <img src='./img/image_19.png' width='170' alt='img-last-section'/>
            </div>
            <div>
              <img src='./img/image_20.png' width='100' alt='img-last-section'/>
              <img src='./img/image_21.png' width='100' alt='img-last-section' className='mt-3'/>
            </div>
          </div>
          <div id='right-last-section' className='grid grid-row-5 grid-cols-3 gap-2 text-white w-100 text-sm ml-20 max-sm:ml-0 max-sm:mt-5 max-sm:text-center'>
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
    
        
    
  )
}

export default Places