import { IconsContact } from '../components/Icons'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

export const Contact = () => {
  return (
    <div id='Contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <p className='uppercase text-primary text-xl tracking-widest'>Contact me</p>
        <h2 className='py-4'>Get In Touch</h2>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300 object-cover'
                  src='../../src/assets/about2.jpg'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-3'>Harold Gutierrez</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>I am aviable for full time positions. Contact me</p>
              </div>
              <div>
                <p className='uppercase pt-8 text-primary'> Connect With Me</p>
                <IconsContact />
              </div>
            </div>
          </div>
          {/* Right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-400' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input type='text' className='border-2 rounded-lg p-3 flex border-gray-400' />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-400  w-full'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='text'
                    className='border-2 rounded-lg p-3 flex border-gray-400  w-full'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg border-gray-300' rows='10' />
                </div>
                <button className='text-gray-100 w-full p-4 mt-4'>Send message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-10'>
          <a
            href='/#Home'
            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
          >
            <HiOutlineChevronDoubleUp size={25} className='text-primary' />
          </a>
        </div>
      </div>
    </div>
  )
}
