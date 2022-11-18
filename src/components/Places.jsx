import React from 'react'
//import Button from 'react-bootstrap/Button';
import { MenuBar } from '../components/MenuBar'
import { Link } from 'react-router-dom';

const Places = () => {
  return (
    <div>        
        <MenuBar />        
        <div id='navbar1' className='mt-40'>            
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 pl-10 pr-10 text-md font-normal text-black w-full sm:flex sm:flex-col sm:gap-4 xs:flex xs:flex-col xs:gap-4">
                <Link to={'#'} className='w-100'>
                    Restaurant
                </Link>
                <Link to={'#'} className='w-100'>
                    Cottage
                </Link>
                <Link to={'#'} className='w-100'>
                    Castle
                </Link>
                <Link to={'#'} className='w-100' >
                    fastest city
                </Link>            
                <Link to={'#'} className='w-100'>
                    beach
                </Link>
                <Link to={'#'} className='w-100'>
                    Carbins
                </Link>
                <Link to={'#'} className='w-100'>
                    Off-grid
                </Link>
                <Link to={'#'} className='w-100'>
                    Farms
                </Link>
                <Link to={'#'} className='mr-4 lg:w-full xs:w-100 md:w-100 sm:w-100'>
                    <button className='text-black text-sm flex flex-row justify-between items-center p-2 bg-white bg-gray-800 border-gray-800 lg:w-100 md:w-50 sm:w-40 xs:w-40 border border-1 rounded-md'>
                        <div>
                            Location 
                        </div>
                        <div>
                            <img src='./img/location-logo.png' alt='location-logo' />
                        </div>                                     
                    </button>                        
                </Link>               
          </div>                   
        </div>        
        <div id='second-section' className='mt-10 w-full'>          
            <div className='grid lg:grid lg:grid-row-2 lg:grid-cols-4 lg:gap-2 md:grid-row-4 md:grid-cols-2 md:gap-2 sm:grid-row-8 sm:grid-cols-1 sm:gap-2 xs:grid-row-8 xs:grid-cols-1 xs:gap-2 justify-items-center items-center'>
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
        <div id='last-section' className='flex flex-row justify-around items-center gap-5 xs:gap-1 mt-20'>
          <div id='left-last-section' className='ml-10 xs:ml-2 mt-10 flex flex-col justify-center items-between gap-20 w-80'>
            <div>
              <img src='./img/image_19.png' width='170' alt='img-last-section'/>
            </div>
            <div>
              <img src='./img/image_20.png' width='100' alt='img-last-section'/>
              <img src='./img/image_21.png' width='100' alt='img-last-section' className='mt-3'/>
            </div>
          </div>
          <div id='right-last-section' className='grid grid-row-5 grid-cols-3 gap-2 text-white w-100 text-sm ml-20 xs:ml-0 xs:mt-5 xs:text-center'>
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