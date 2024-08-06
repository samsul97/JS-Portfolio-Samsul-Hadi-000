import { useState } from 'react';
import Link from 'next/link'
const Menu = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
  };
  return (
    <div className='p-4 text-white text-base rounded-l-sm' style={{backgroundColor:'rgba(33,33,55,0.8)'}}>
      <div className='text-left pt-1'>
        <Link href="/">
          <a className="hover:cursor-pointer">
            Home
          </a>
        </Link>
      </div>
      <div className='text-left pt-1'>
        <button className="hover:cursor-pointer" onClick={toggleAboutMenu}>
          About
        </button>
        {isAboutOpen && (
          <div className='ml-4'>
            <div className='text-left pt-1'>
              <Link href="/about">
                <a className="hover:cursor-pointer">Summary</a>
              </Link>
            </div>
            <div className='text-left pt-1'>
              <Link href="/skills">
                <a className="hover:cursor-pointer">Skills</a>
              </Link>
            </div>
            <div className='text-left pt-1'>
              <Link href="/experiences">
                <a className="hover:cursor-pointer">Experience</a>
              </Link>
            </div>
            <div className='text-left pt-1'>
              <Link href="/education">
                <a className="hover:cursor-pointer">Education</a>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className='text-left pt-1'>
        <Link href="/portfolio">
          <a className="hover:cursor-pointer">
            Projects
          </a>
        </Link>
      </div>
      <div className='text-left pt-1'>
        <Link href="/service">
          <a className="hover:cursor-pointer">
            Support
          </a>
        </Link>
      </div>
      <div className='text-left pt-1'>
        <Link href="/contact">
          <a className="hover:cursor-pointer">
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Menu
