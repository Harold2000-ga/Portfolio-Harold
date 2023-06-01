import { IconsSkill } from '../components/Icons'
import html from '../assets/skills/HTML.png'

export const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
        <h2 className='py-4'>What I Can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <IconsSkill name='HTML' icon={html} />
          <IconsSkill name='CSS' icon={html} />
          <IconsSkill name='JavaScript' icon={html} />
          <IconsSkill name='Tailwind' icon={html} />
          <IconsSkill name='React' icon={html} />
          <IconsSkill name='Node JS' icon={html} />
          <IconsSkill name='Mongo DB' icon={html} />
          <IconsSkill name='Git' icon={html} />
        </div>
      </div>
    </div>
  )
}
