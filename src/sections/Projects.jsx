import { ProjectItem } from '../components/ProjectItem'
import ReactSocialImage from '../../src/assets/Others/ReactSocial.png'
import BackgroundRemovalImage from '../../src/assets/Others/bg-remove.png'
import ChristmasImage from '../../src/assets/Others/ChristmasGifts.png'
import WeatherImage from '../../src/assets/Others/Weather.png'

export const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-primary'>Projects</p>
      <h2 className='py-4'> What I have built</h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
        <ProjectItem
          title='React Social'
          description='MERN STACK'
          image={ReactSocialImage}
          projectUrl='/reactsocial'
        />
        <ProjectItem
          title='Background Remove'
          description='React JS'
          image={BackgroundRemovalImage}
          projectUrl='/bg-remove'
        />

        <ProjectItem
          grid={3}
          title='Laptop testing3'
          description='React Js'
          image={ReactSocialImage}
          projectUrl='/about1'
        />
      </div>
      <p className='text-xl tracking-widest uppercase text-primary my-8'>Small-Projects</p>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
        <ProjectItem
          title='Christmas Gifts'
          description='React JS'
          image={ChristmasImage}
          projectUrl='/christmas'
        />
        <ProjectItem
          title='Country Weather'
          description='React JS'
          image={WeatherImage}
          projectUrl='/weather'
        />
        <ProjectItem
          grid={3}
          title='Laptop testing3'
          description='React Js'
          image={ChristmasImage}
          projectUrl='/about1'
        />
      </div>
    </div>
  )
}
