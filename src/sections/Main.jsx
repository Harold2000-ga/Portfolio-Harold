/* eslint-disable react/no-unescaped-entities */
import { IconsMain } from '../components/Icons'
import profile from '../assets/Others/Profile.jpg'

export const Main = () => {
  return (
    <div id='Home' className='w-full h-screen text-center'>
      <div
        className='max-w-[1240px] w-full h-full  mx-auto p-2  flex md:flex-row md:gap-8 md:justify-between flex-col-reverse
       items-center justify-center gap-4'
      >
        <div>
          <p className='uppercase tracking-widest text-sm text-gray-600'>
            Let's Build something together
          </p>
          <h1 className='py-4'>
            Hello, I'm<span className='text-primary'> Harold Gutiérrez</span>
          </h1>
          <h2 className=' font-light pt-2 pb-5'>Front-End Web Developer</h2>

          <IconsMain />
        </div>
        <div className='w-full h-full max-h-[250px] max-w-[150px] md:max-h-[470px] md:max-w-[350px] shadow-xl rounded-xl shadow-gray-400 bg-secondary flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 '>
          <img
            loading='lazy'
            src={profile}
            alt='Programer laptop'
            className='w-full h-full   rounded-xl object-fit '
          />
        </div>
      </div>
    </div>
  )
}
