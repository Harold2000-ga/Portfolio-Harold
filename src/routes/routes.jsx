import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../sections/Navbar'
import { PagePrincipal } from '../pages/PagePrincipal'
import { ReactSocial } from '../pages/ReactSocial'
import { BgRemove } from '../pages/BgRemove'
import { Christmas } from '../pages/ChristmasGifts'
import { Weather } from '../pages/Weather'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes path='/'>
        <Route path='/reactsocial' element={<ReactSocial />} />
        <Route path='/christmas' element={<Christmas />} />
        <Route path='/bg-remove' element={<BgRemove />} />
        <Route path='/weather' element={<Weather />} />
        <Route index element={<PagePrincipal />} />
        <Route path='*' element={<PagePrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}
