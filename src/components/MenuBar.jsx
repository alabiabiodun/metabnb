import React, { useState }from 'react'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../index.css';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const display = () => {
    setDisplayForm(!displayForm);
  }

  return (
    <div className='relative w-full z-[1000]'>
      <Navbar id='navigation-bar-menu' collapseOnSelect expand="lg" className='flex flex-row justify-between items-center gap-10 max-sm:gap-3 w-full fixed top-0 left-0 right-0 z-[1000]'>
        <Navbar.Brand href="" className='lg:ml-20 md:ml-10 sm:ml-10 max-sm:ml-5'>
              <img src='./img/Meta_2.png' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='sm:w-15 max-sm:mr-10 max-sm:ml-5 sm:mr-10 md:w-15 md:mr-10 border' />
        <Navbar.Collapse id="responsive-navbar-nav" className='flex flex-row justify-between items-center gap-10 w-full ml-20 mt-3'>
            <Nav className="text-lg font-normal text-black w-full">
              <Link to={'/'} className='p-2 w-100'>
                Home
              </Link>
              <Link to={'/place-to-stay'} className='p-2 w-100'>
                Place to Stay
              </Link>
              <Link to={'#'} className='p-2 w-100'>
                NFTs
              </Link>
              <Link to={'#'} className='p-2 w-100'>
                Community
              </Link>
              <Link to={'#'} className='p-2 w-100 ml-10'>
                <Button id='button-color' className='text-white' onClick={display}>
                    Connect wallet       
                </Button>
              </Link>               
            </Nav>        
        </Navbar.Collapse>     
     </Navbar>
     <div>
        {displayForm && (
          <div className='mt-14 absolute p-3 top-35 left-80 w-2/5 bg-white border border-1 border-gray-500 rounded-md z-[500]'>
            <div className='pl-4 pr-4 font-bold text-md flex flex-row justify-between items-center gap-2'>
              <div>
                Connect Wallet
              </div>
              <div className='pl-4 text-lg font-normal'>
                <button id='button-connect' type='button' className='w-10 h-10 hover:bg-gray-100 hover:border hover:border-1 hover:border-gray-100 rounded-full text-gray-500 pointer' onClick={()=>setDisplayForm(false)}>
                    x
                </button>                
              </div>              
            </div>
            <div className='m-3'><hr/></div>
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


