import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MenuBar1 = () => {
  return (
    <div className='z-[500]'>
        <Navbar id='navigation-bar-menu' collapseOnSelect expand="lg" className='flex flex-row justify-between items-center gap-5 max-sm:gap-3 md:gap-3 w-full mt-20'>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" className='sm:w-15 max-sm:mr-10 max-sm:ml-3 sm:mr-10 md:w-15 md:mr-10 md:ml-5 mt-5' />
         <Navbar.Collapse id="responsive-navbar-nav" className='flex flex-row justify-between items-center gap-5 w-full ml-20 mt-3'>
            <Nav className="text-md font-normal text-black w-full">
                <Link to={'#'} className='p-2 w-100'>
                    Restaurant
                </Link>
                <Link to={'#'} className='p-2 w-100'>
                    Cottage
                </Link>
                <Link to={'#'} className='p-2 w-100'>
                    Castle
                </Link>
                <Link to={'#'} className='p-2 w-100' >
                    fastest city
                </Link>            
                <Link to={'#'} className='p-2 w-100'>
                    beach
                </Link>
                <Link to={'#'} className='p-2 w-100'>
                    Carbins
                </Link>
                <Link to={'#'} className='p-2 w-100'>
                    Off-grid
                </Link>
                <Link to={'#'} className='p-2 w-100'>
                    Farms
                </Link>
                <Link to={'#'} className='mr-4 lg:w-full max-sm:w-100 md:w-100 sm:w-100'>
                    <button className='text-black text-sm flex flex-row justify-between items-center p-1 bg-white bg-gray-800 border-gray-800 lg:w-100 md:w-50 sm:w-40 max-sm:w-40 border border-1 rounded-md'>
                        <div>
                            Location 
                        </div>
                        <div>
                            <img src='./img/location-logo.png' alt='location-logo' />
                        </div>                                     
                    </button>                        
                </Link>               
            </Nav>        
         </Navbar.Collapse>     
        </Navbar>
    </div>
  )
}

export default MenuBar1
