/* eslint-disable react/no-unescaped-entities */
import { IconsMain } from '../components/Icons'

export const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase tracking-widest text-sm text-gray-600'>
            Build something together
          </p>
          <h1 className='pt-4 pb-2'>
            Hello I'm<span className='text-primary'> Harold</span>
          </h1>
          <h1>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sapiente at cumque
            voluptatibus sint eveniet ullam voluptas vel architecto vero quia qui totam, fuga,
            dolores illum obcaecati fugiat magnam deserunt.
          </p>
          <IconsMain />
        </div>
      </div>
    </div>
  )
}
