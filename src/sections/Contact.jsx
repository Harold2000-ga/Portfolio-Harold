import { IconsContact } from '../components/Icons'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { imageContact } from '../../src/assets/about2.jpg'

export const Contact = () => {
  const handleSubmit = e => {
    //Get form
    e.preventDefault()
    const formData = new FormData(e.target)
    const messageObject = {}

    for (let [name, value] of formData) {
      messageObject[name] = value
    }
    // Send form to email
    //
  }

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
                  src={imageContact}
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
              <form
                action='https://getform.io/f/42c2fb6f-1e6a-461b-afa9-3f798588c08a'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      name='name'
                      className='border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input
                      type='text'
                      name='number'
                      className='border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:ring-1 focus:ring-primary'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='border-2 rounded-lg p-3 flex border-gray-400  w-full focus:outline-none focus:ring-1 focus:ring-primary'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                    className='border-2 rounded-lg p-3 flex border-gray-400  w-full focus:outline-none focus:ring-1 focus:ring-primary'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    name='message'
                    className='border-1 rounded-lg border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-primary'
                    rows='10'
                  />
                </div>
                <input
                  type='submit'
                  className='text-gray-100 w-full p-4 mt-4 bg-slate-500 cursor-pointer hover:bg-slate-800 ease-in duration-300'
                  value='Send Message'
                />
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
