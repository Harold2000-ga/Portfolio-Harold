import { IconsSkill } from '../components/Icons'

export const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
        <h2 className='py-4'>What I Can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <IconsSkill name='HTML' />
          <IconsSkill name='CSS' />
          <IconsSkill name='JavaScript' />
          <IconsSkill name='Tailwind' />
          <IconsSkill name='React' />
          <IconsSkill name='Node JS' />
          <IconsSkill name='Mongo DB' />
          <IconsSkill name='Git' />
        </div>
      </div>
    </div>
  )
}
