import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from '../sections/Navbar'
import { PagePrincipal } from '../pages/PagePrincipal'
import { Property } from '../sections/Property'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<PagePrincipal />} />
        <Route path='/property' element={<Property />} />
      </Routes>
    </BrowserRouter>
  )
}