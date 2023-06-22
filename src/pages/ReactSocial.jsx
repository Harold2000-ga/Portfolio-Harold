import { RiRadioButtonLine } from 'react-icons/ri'
import { HashLink } from 'react-router-hash-link'
import ReactSocialImage from '../../src/assets/Others/ReactSocial.png'

export const ReactSocial = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <img
          src={ReactSocialImage}
          loading='lazy'
          alt='Casa'
          className='object-fill w-full h-full'
        />
        <div className='text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='py-2'>React Social</h2>
          <h3>React JS / Node JS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <h2 className='py-8'>Overview</h2>
          <p>
            This project is a social network built with the MERN stack. Users can register, login,
            and post messages with images that are stored on Cloudinary. The site also includes a
            following system that allows users to keep track of other users. All user information is
            protected with JWT.
          </p>
          <a
            href='https://hg-social-network.vercel.app/'
            target='_blank'
            className='px-8 py-3 mt-4 mr-8  bg-primary opacity-80 text-white uppercase rounded-lg cursor-pointer hover:opacity-100 shadow-gray-400 shadow-xl'
            rel='noreferrer'
          >
            Demo
          </a>
          <a
            href='https://github.com/Harold2000-ga/Social-Network/tree/main'
            target='_blank'
            className='inline-block px-8 py-3 mt-4 bg-primary opacity-80 text-white uppercase rounded-lg cursor-pointer hover:opacity-100 shadow-gray-400 shadow-xl'
            rel='noreferrer'
          >
            Code
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 pl-3 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3 text-primary' />
                React JS
              </p>
              <p className='text-gray-600 py-2 pl-3 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3 text-primary' />
                Node JS
              </p>
              <p className='text-gray-600 py-2 pl-3 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3 text-primary' />
                Express
              </p>
              <p className='text-gray-600 py-2 pl-3 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3 text-primary' />
                MongoDB
              </p>
              <p className='text-gray-600 py-2 pl-3 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3 text-primary' />
                JWT
              </p>
            </div>
          </div>
        </div>
        <HashLink to='/#Projects'>
          <p className='underline cursor-pointer text-lg'> Back </p>
        </HashLink>
      </div>
    </div>
  )
}
