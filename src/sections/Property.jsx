import { RiRadioButtonLine } from 'react-icons/ri'
import { HashLink } from 'react-router-hash-link'

export const Property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative '>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'></div>
        <img src='../../src/assets/about2.jpg' alt='Casa' className='object-fill w-full h-full' />
        <div className='text-white p-2 z-10 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h2 className='py-2'>Property Finder</h2>
          <h3>React JS /Tailwind /Firebase</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2 className='py-8'>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum possimus nulla laboriosam
            illo repellendus a omnis alias, corrupti iure similique minima eveniet sapiente pariatur
            totam architecto! Exercitationem nostrum blanditiis dolorum! Possimus vero voluptatem,
            neque vel ipsam quasi, enim autem ea a, tempore magni velit sint reprehenderit. Tempore,
            placeat molestiae molestias, laborum ea similique omnis facere nam, voluptates nostrum
            deleniti aliquam?
          </p>
          <button className='px-8 py-3 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-3 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3' />
                React JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3' />
                Node JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3' />
                JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3' />
                JWT
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonLine className='pr-1 mr-3' />
                AWS
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
