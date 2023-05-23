import { About } from './sections/About'
import { Main } from './sections/Main'
import { Navbar } from './sections/Navbar'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
