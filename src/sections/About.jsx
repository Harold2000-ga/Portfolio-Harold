/* eslint-disable react/jsx-no-comment-textnodes */
import about1 from '../assets/Others/about1.jpg'
export const About = () => {
  return (
    <article id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
        <div className=' col-span-2'>
          <p className='uppercase text-xl tracking-widest text-primary '>About</p>
          <h2 className='py-4'> Who I am</h2>
          <p className='py-2 text-gray-600'>//I am not your normal developer</p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit voluptate
            adipisci dolore numquam, deleniti id recusandae necessitatibus beatae obcaecati. Sint
            qui, aliquam amet facilis eveniet quidem enim ad odit. Tempore, sint in alias cupiditate
            doloremque consectetur culpa libero amet nulla sunt itaque dolorum eligendi id sed
            consequatur recusandae voluptas totam corrupti vero perspiciatis omnis odit. Veritatis
            tenetur eligendi omnis!
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab ad nobis quo qui
            atque architecto consectetur, natus impedit nemo asperiores sapiente ex dolorem minus
            illum amet tenetur dolores! Placeat!
          </p>
          <p className='py-2 underline cursor-pointer text-primary'>
            Check out some of my latest projects
          </p>
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
