import { ProjectItem } from '../components/ProjectItem'
import ReactSocialImage from '../../src/assets/Others/ReactSocial.png'
import about2 from '../../src/assets/Others/about2.jpg'
export const Projects = () => {
  return (
    <div id='Projects' className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase text-primary'>Projects</p>
      <h2 className='py-4'> What I have built</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
          title='React Social'
          description='MERN STACK'
          image={ReactSocialImage}
          projectUrl='/reactsocial'
        />
        <ProjectItem
          title='Laptop testing1'
          description='React Js'
          image={about2}
          projectUrl='/about1'
        />
        <ProjectItem
          title='Laptop testing3'
          description='React Js'
          image={ReactSocialImage}
          projectUrl='/about1'
        />
        <ProjectItem
          title='Laptop testing2'
          description='React Js'
          image={about2}
          projectUrl='/about1'
        />
      </div>
    </div>
  )
}
