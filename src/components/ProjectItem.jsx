import { Link } from 'react-router-dom'

export const ProjectItem = ({ title, image, projectUrl, description }) => {
  return (
    <div className='relative  bg-secondary flex items-center justify-center h-auto w-full shadow-xl  shadow-gray-400 rounded-xl p-2 group hover:bg-gradient-to-t from-[#0F6305] to-[#20A70F]'>
      <div className='w-full '>
        <img
          src={image}
          alt='Programer laptop'
          className='w-full  max-h-[400px] rounded-xl object-fit group-hover:opacity-20'
        />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-[#e6e4e8] tracking-wider text-center '>{title}</h3>
        <p className='pb-4 pt-2 text-[#e6e4e8] tracking-widest'>{description}</p>
        <Link to={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-[#e6e4e8] text-secondary  font-bold text-lg cursor-pointer'>
            More Info
          </p>
        </Link>
      </div>
    </div>
  )
}
