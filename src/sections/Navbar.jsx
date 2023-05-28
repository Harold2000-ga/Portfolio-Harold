/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { IconsNavBar } from '../components/Icons'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import logo from '../../src/assets/Logo.png'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [colorText, setColorText] = useState('black')

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/property') {
      setColorText('#ececec')
      setNavBg('transparent')
    } else {
      setColorText('black')
      setNavBg('#ecf0f3')
    }
  }, [location])

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav
      style={{ background: navBg }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <HashLink to='/#Home'>
          <img src={logo} alt='Logo' className='w-[150] h-[80]' />
        </HashLink>
        <div>
          {/* Nav md and xl device */}
          <ul style={{ color: colorText }} className='hidden md:flex'>
            <HashLink to='/#Home'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 border-primary'>Home</li>
            </HashLink>
            <HashLink to='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>About</li>
            </HashLink>
            <HashLink to='/#Skills'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Skill</li>
            </HashLink>
            <HashLink to='/#Projects'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Project</li>
            </HashLink>
            <HashLink to='/#Contact'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Contact</li>
            </HashLink>
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
              <HashLink to='/#Home'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Home
                </li>
              </HashLink>
              <HashLink to='/#about'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  About
                </li>
              </HashLink>
              <HashLink to='/#Skills'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Skills
                </li>
              </HashLink>
              <HashLink to='/#Projects'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Projects
                </li>
              </HashLink>
              <HashLink to='/#Contact'>
                <li onClick={handleNav} className='py-4 text-sm'>
                  Contact
                </li>
              </HashLink>
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
