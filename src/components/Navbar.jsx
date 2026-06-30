import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const activeClass = 'text-red-600 font-semibold'

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-10" />
          <span className="text-xl font-bold">Momo</span>
        </div>

        <div className="flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            Contact
          </NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            Menu
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            Service
          </NavLink>
          <NavLink to="/allergy" className={({ isActive }) => isActive ? activeClass : 'text-gray-700 hover:text-red-600'}>
            Allergy
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
