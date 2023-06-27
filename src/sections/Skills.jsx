import { IconsSkill } from '../components/Icons'
import html from '../assets/skills/HTML.png'
import css from '../assets/skills/CSS.png'
import js from '../assets/skills/JavaScript.png'
import tailwind from '../assets/skills/Tailwind.png'
import react from '../assets/skills/React.png'
import node from '../assets/skills/Node JS.png'
import mongo from '../assets/skills/Mongo DB.png'
import git from '../assets/skills/Git.png'

export const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
        <h2 className='py-4'>What I Can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          <IconsSkill name='HTML' icon={html} />
          <IconsSkill name='CSS' icon={css} />
          <IconsSkill name='JavaScript' icon={js} />
          <IconsSkill name='Tailwind CSS' icon={tailwind} />
          <IconsSkill name='React' icon={react} />
          <IconsSkill name='Node JS' icon={node} />
          <IconsSkill name='Mongo DB' icon={mongo} />
          <IconsSkill name='Git' icon={git} />
        </div>
      </div>
    </div>
  )
}
