/* eslint-disable react/jsx-no-comment-textnodes */
import { HashLink } from 'react-router-hash-link'
import about1 from '../assets/Others/about1.jpg'
export const About = () => {
  return (
    <article id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className=' col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary '>About</p>
          <h2 className='py-4'> Who I am</h2>
          <p className='py-2 text-gray-600'>
            As a front-end developer, I thrive on challenges and enjoy pushing myself to learn new
            things. I have a passion for staying up-to-date with the latest web development trends
            and technologies, which allows me to create innovative and effective solutions.
          </p>
          <p className='py-2 text-gray-600'>
            With extensive experience working in teams, I understand the importance of collaboration
            and effective communication when it comes to achieving project goals. My ability to work
            well with others and contribute to a positive team dynamic is an asset that sets me
            apart.
          </p>
          <p className='py-2 text-gray-600'>
            Outside of work, I value spending time with my family and maintaining a healthy
            lifestyle through regular exercise. I also love nothing more than soaking up the sun and
            enjoying the beach.
          </p>
          <HashLink to='/#Projects'>
            <p className='py-2 underline cursor-pointer text-primary'>
              Check out some of my latest projects
            </p>
          </HashLink>
        </div>
        <div className='w-full h-auto mx-auto shadow-xl rounded-xl shadow-gray-400 flex items-center justify-center p-1 bg-secondary hover:scale-105 ease-in duration-300 '>
          <img
            loading='lazy'
            src={about1}
            alt='Programer laptop'
            className='w-full h-full rounded-xl object-fit '
          />
        </div>
      </div>
    </article>
  )
}
