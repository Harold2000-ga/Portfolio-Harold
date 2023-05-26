import { BrowserRouter } from 'react-router-dom'
import { About } from '../sections/About'
import { Main } from '../sections/Main'
import { Navbar } from '../sections/Navbar'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </BrowserRouter>
  )
}
