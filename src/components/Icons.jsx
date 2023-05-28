import { RiLinkedinFill } from 'react-icons/ri'
import { ImGithub, ImTelegram, ImWhatsapp } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

export const IconsMain = () => {
  return (
    <div className='flex items-center justify-between max-w-[330px] mx-auto py-4 gap-6'>
      <a
        href='https://www.linkedin.com/in/harold-guti%C3%A9rrez'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <RiLinkedinFill size={25} />
      </a>
      <a
        href='https://github.com/Harold2000-ga'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <ImGithub size={25} />
      </a>
      <a
        href='https://twitter.com/HaroldGA2000'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <BsTwitter size={25} />
      </a>
      <a
        href='https://www.facebook.com/harold.gutierrez.96592'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <BsFacebook size={25} />
      </a>
    </div>
  )
}
export const IconsSkill = ({ name }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-col-2 gap-4 justify-center items-center'>
        <div className='mx-auto'>
          <img src={`../../src/assets/skills/${name}.png`} alt='HTML ICON' className=' w-24 h-24' />
        </div>
        <div className='flex flex-col item-center justify-center mx-auto'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export const IconsNavBar = () => {
  return (
    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
      <a
        href='https://www.linkedin.com/in/harold-guti%C3%A9rrez'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
      >
        <RiLinkedinFill />
      </a>
      <a
        href='https://github.com/Harold2000-ga'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
      >
        <ImGithub />
      </a>
      <a
        href='https://twitter.com/HaroldGA2000'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
      >
        <BsTwitter />
      </a>
      <a
        href='https://www.facebook.com/harold.gutierrez.96592'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
      >
        <BsFacebook />
      </a>
    </div>
  )
}
export const IconsContact = () => {
  return (
    <div className='flex items-center justify-start gap-4  py-4 '>
      <a
        href='https://wa.link/6smnk9'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <ImWhatsapp size={25} />
      </a>

      <a
        href='mailto:haroldgutierrezhga@gmail.com?body=Hi,%20I%20was%20looking%20at%20your%20portfolio%20and'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <AiOutlineMail size={25} />
      </a>
      <a
        href='https://t.me/Harold00Gutierrez'
        rel='noopener noreferrer'
        target='_blank'
        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
      >
        <ImTelegram size={25} />
      </a>
    </div>
  )
}
