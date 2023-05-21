/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { IconsNavBar } from '../components/Icons'

export const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <img src='../src/assets/Logo.png' alt='Logo' className='w-[150] h-[80]' />

        <div>
          {/* Nav md and xl device */}
          <ul className='hidden md:flex'>
            <a to='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 border-primary'>Home</li>
            </a>
            <a to='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>About</li>
            </a>
            <a to='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Skill</li>
            </a>
            <a to='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Project</li>
            </a>
            <a to='/'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Contact</li>
            </a>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <CiMenuBurger size={36} />
          </div>
        </div>
      </div>
      {/* Nav small devices */}
      <div className={nav ? ' md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%] ease-in duration-500'
          }
        >
          <div className='flex w-full items-center justify-between'>
            <img src='../src/assets/logo.png' alt='Logo' />

            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together</p>
          </div>
          <div className='py-4 flex flex-col'>
            <ul>
              <a to='/'>
                <li className='py-4 text-sm'>Home</li>
              </a>
              <a to='/'>
                <li className='py-4 text-sm'>About</li>
              </a>
              <a to='/'>
                <li className='py-4 text-sm'>Skills</li>
              </a>
              <a to='/'>
                <li className='py-4 text-sm'>Projects</li>
              </a>
              <a to='/'>
                <li className='py-4 text-sm'>Contact</li>
              </a>
            </ul>
            <div className='py-20'>
              <p className='uppercase tracking-widest text-primary'>LET'S CONNEct</p>
              <IconsNavBar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
