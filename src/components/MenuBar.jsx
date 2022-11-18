import React, { useState }from 'react'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { Link } from 'react-router-dom';
import hamburger from './hamburger.svg';

export const MenuBar = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const display = () => {
    setDisplayForm(!displayForm);
  }

  return (
    <div className='relative w-full z-[1000]'>
      <Navbar id='navigation-bar-menu' collapseOnSelect expand="lg" className='flex flex-row lg:justify-between lg:w-full md:justify-between md:w-[100%] lg:pl-0 lg:pr-0 md:pl-5 md:pr-60 sm:justify-between sm:w-[100%] sm:pl-10 sm:pr-20 xs:justify-between xs:w-[100%] xs:pl-10 xs:pr-20 lg:gap-20 w-full fixed top-0 left-0 right-0 z-[1000]'>
        <Navbar.Brand href="" className='p-2 lg:w-full md:w-50 sm:w-40 xs:w-40'>
            <img src='./img/Meta_2.png' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='w-12 h-12 outline-none'><img src={hamburger} alt='location-logo' /></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className=''>
            <Nav className="text-lg font-normal text-black w-full">
              <Link to={'/'} className='w-25 p-2'>
                Home
              </Link>
              <Link to={'/place-to-stay'} className='w-60 p-2'>
                Place to Stay
              </Link>
              <Link to={'#'} className='w-40 p-2'>
                NFTs
              </Link>
              <Link to={'#'} className='w-40 p-2'>
                Community
              </Link>                            
            </Nav>
            <Nav className='w-full lg:ml-20 md:ml-0 xs:ml-0 p-2 xs:p-0'>
              <Link to={'#'} className='w-40 text-center'>
                  <Button id='button-color' className='text-white p-2 max-sm:p-0' onClick={display}>
                      Connect wallet       
                  </Button>
              </Link> 
            </Nav>                    
        </Navbar.Collapse>                    
     </Navbar>
     <div>
        {displayForm && (
          <div className='mt-14 absolute top-35 lg:left-80 lg:w-2/5 sm:left-40 sm:w-3/5 max-sm:left-15 bg-white border border-1 border-gray-500 rounded-md z-[500]'>
            <div className='pl-4 pr-4 font-bold text-md flex flex-row justify-between items-center gap-2'>
              <div className='p-2'>
                Connect Wallet
              </div>
              <div className='pl-4 text-lg font-normal'>
                <button id='button-connect' type='button' className='w-10 h-10 hover:bg-gray-100 hover:border hover:border-1 hover:border-gray-100 rounded-full text-gray-500 pointer' onClick={()=>setDisplayForm(false)}>
                    x
                </button>                
              </div>              
            </div>
            <div className='mt-2 mb-3'><hr/></div>
            <div className='pt-2 pl-4 pr-4 text-sm'>
              Choose your preferred wallet:
            </div>
            <div id='connect-wallet' className='pl-4 pr-4 pt-1 pb-1 m-3 border border-1 flex flex-row justify-between items-center gap-2 rounded-md'>
              <div>
                <img src='./img/metamask.png' width='120' alt='metamask-logo'/>
              </div>
              <div>
                <img src='./img/Vector.png' width='5' alt='vector-logo'/>
              </div>
            </div>            
            <div className='pl-4 pr-4 pt-2 pb-2 m-3 border border-1  flex flex-row justify-between items-center gap-2 rounded-md'>
              <div>
                <img src='./img/wallet-connect.png' width='120' alt=''/>
              </div>
              <div>
                <img src='./img/Vector.png' width='5' alt='vector-logo'/>
              </div>
            </div>
          </div>
        )}   
      </div>
    </div>    
  )
}


