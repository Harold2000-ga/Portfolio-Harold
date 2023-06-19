import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../sections/Navbar'
import { PagePrincipal } from '../pages/PagePrincipal'
import { ReactSocial } from '../sections/ReactSocial'

export const Routing = () => {
  return (
    <BrowserRouter basename='Portfolio'>
      <Navbar />
      <Routes path='/'>
        <Route index element={<PagePrincipal />} />
        <Route path='reactsocial' element={<ReactSocial />} />
        <Route path='*' element={<PagePrincipal />} />
      </Routes>
    </BrowserRouter>
  )
}
