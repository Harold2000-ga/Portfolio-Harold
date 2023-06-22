/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IconsNavBar } from '../components/Icons'
import { HashLink } from 'react-router-hash-link'
import { RiMenuFill } from 'react-icons/ri'
import logo from '../assets/Others/Logo1.png'
import logoSmall from '../assets/Others/LogoSmall.png'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#3a4e48')
  const location = useLocation()

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
        setNavBg('#3a4e48')
      } else {
        setShadow(false)
        if (location.pathname.includes('reactsocial') || location.pathname.includes('bg-remove')) {
          setNavBg('transparent')
        } else {
          setNavBg('#3a4e48')
        }
      }
    }

    if (location.pathname.includes('reactsocial') || location.pathname.includes('bg-remove')) {
      setNavBg('transparent')
    } else {
      setNavBg('#3a4e48')
    }

    console.log(location)
    window.addEventListener('scroll', handleShadow)
  }, [location.pathname])

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav
      style={{ backgroundColor: navBg }}
      className={`fixed w-full h-20 ${shadow ? 'shadow-xl' : ''} z-[100] bg-secondary`}
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <HashLink to='/#Home'>
          <img src={logo} loading='lazy' alt='Logo' className='w-28 h-14 md:w-32 md:h-16' />
        </HashLink>
        <div>
          {/* Nav md and xl device */}
          <ul className='hidden md:flex text-[#e6e9e8] pr-8'>
            <HashLink to='/#Home'>
              <li className='ml-10 text-sm uppercase hover:border-b-2 border-primary'>Home</li>
            </HashLink>
            <HashLink to='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>About</li>
            </HashLink>
            <HashLink to='/#Skills'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Skills</li>
            </HashLink>
            <HashLink to='/#Projects'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Projects</li>
            </HashLink>
            <HashLink to='/#Contact'>
              <li className='ml-10 text-sm uppercase hover:border-b-2  border-primary'>Contact</li>
            </HashLink>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <RiMenuFill size={36} color='#e6e9e8' />
          </div>
        </div>
      </div>
      {/* Nav small devices */}
      <div className={nav ? ' md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e6e9e8] p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%] ease-in duration-500'
          }
        >
          <div className='flex w-full items-center justify-between '>
            <img src={logoSmall} loading='lazy' alt='Logo' />

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
