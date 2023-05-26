import { RiLinkedinFill } from 'react-icons/ri'
import { ImGithub } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const IconsMain = () => {
  return (
    <div className='flex items-center justify-between max-w-[330px] mx-auto py-4 gap-6'>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <ImGithub size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <RiLinkedinFill size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <AiOutlineMail size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <BsFillPersonLinesFill size={25} />
      </div>
    </div>
  )
}
export const IconsSkill = ({ name }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-col-2 gap-4 justify-center items-center'>
        <div className='mx-auto'>
          <img src={`../src/assets/skills/${name}.png`} alt='HTML ICON' className=' w-24 h-24' />
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
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <ImGithub />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <RiLinkedinFill />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <BsFillPersonLinesFill />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <AiOutlineMail />
      </div>
    </div>
  )
}
export const IconsContact = () => {
  return (
    <div className='flex items-center justify-between py-4 '>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <ImGithub size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <RiLinkedinFill size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <AiOutlineMail size={25} />
      </div>
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        <BsFillPersonLinesFill size={25} />
      </div>
    </div>
  )
}
