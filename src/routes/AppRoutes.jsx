import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Menu from '../pages/Menu'
import Recipie from '../pages/recipie'
import Service from '../pages/Service'
import AllergyAdvice from '../pages/AllergyAdvice'
import PageNotFound from '../pages/PageNotFound'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/recipe" element={<Recipie />} />
      <Route path="/recipie" element={<Recipie />} />
      <Route path="/service" element={<Service />} />
      <Route path="/allergy" element={<AllergyAdvice />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default AppRoutes;
