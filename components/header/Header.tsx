import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import Menu from '../Menu';

const customStyles = {
  content: {
    top: '20px',
    right: '20px',
    left: 'auto',
    bottom: 'auto',
  },
};
const activeClass = "text-18 mx-4 hover:cursor-pointer is-active border-white border-dashed"
const deactiveClass = "text-18 mx-4 hover:cursor-pointer hover:border-b-2 border-white border-dashed"

const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [menubtn, setMenuBTN] = React.useState('block');
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
    setMenuBTN('none')
  }

  function closeModal() {
    setIsOpen(false);
    setMenuBTN('block')
  }

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
  };
  return (
    <>
      <div className='absolute top-0 flex justify-between items-center h-[40px] w-full mt-4 px-4'  >
        <div className="navbar-nav w-full h-full flex justify-between items-center text-white md:px-4">
          <Link href="/">
            <a className="nav-item nav-link flex items-center hover:cursor-pointer">
              <div className=''><Image src={'/assets/img/sscorp.png'} alt='logo' width={70} height={40}/></div>              
            </a>
          </Link>
          <div className='md:hidden'>
            <Link href="#">
              <a className="text-lg md:text-28 hover:cursor-pointer" style={{display:menubtn}} onClick={openModal}>
                <FaBars/>
              </a>
            </Link>
          </div>
          <div className='hidden md:block font-normal js-nav'>
            <Link href="/">
              <a className={deactiveClass}>
                Home
              </a>
            </Link>
            <div className='relative inline-block'>
              <button className={deactiveClass} onClick={toggleAboutMenu}>
                About
              </button>
              {isAboutOpen && (
                <div className='absolute bg-gray-800 rounded-md mt-1'>
                  <Link href='/about'>
                    <a className='block px-4 py-2 text-white'>Me</a>
                  </Link>
                  <Link href='/skills'>
                    <a className='block px-4 py-2 text-white'>Skills</a>
                  </Link>
                  <Link href='/experiences'>
                    <a className='block px-4 py-2 text-white'>Experience</a>
                  </Link>
                  <Link href='/education'>
                    <a className='block px-4 py-2 text-white'>Education</a>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/portfolio">
              <a className={deactiveClass}>
                Portfolio
              </a>
            </Link>
            <Link href="/service">
              <a className={deactiveClass}>
                Service
              </a>
            </Link>
            <Link href="/contact">
              <a className={deactiveClass}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >        
        <Menu/>
      </Modal>
    </>
  )
}

export default Header
