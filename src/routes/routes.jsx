import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../sections/Navbar'
import { PagePrincipal } from '../pages/PagePrincipal'
import { ReactSocial } from '../pages/ReactSocial'
import { BgRemove } from '../pages/BgRemove'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes path='/'>
        <Route path='/reactsocial' element={<ReactSocial />} />
        <Route path='/bg-remove' element={<BgRemove />} />
        <Route index element={<PagePrincipal />} />
        <Route path='*' element={<PagePrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}
