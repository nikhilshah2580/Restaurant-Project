import { useState } from "react";
import { NavLink } from "react-router";
import {
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const activeClass = "text-orange-600 font-semibold";
  const defaultClass =
    "text-slate-600 hover:text-orange-600 transition-colors duration-200";

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <nav className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-5">
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="truncate text-2xl font-bold text-[#0F7F6C]">
              momos
            </span>
          </NavLink>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <NavLink
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#0F7F6C] hover:text-[#0F7F6C]"
              aria-label="Cart"
              onClick={() => setOpen(false)}
            >
              <FaShoppingCart size={17} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F26419] px-1 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-orange-600"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          <div className="hidden items-center gap-6 md:flex md:flex-1 md:justify-center md:text-sm md:font-semibold md:text-slate-500">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/allergy"
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              Allergy Advice
            </NavLink>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-3 text-slate-500">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-[#1877F2]"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-black"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <NavLink
              to="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#0F7F6C] hover:text-[#0F7F6C]"
              aria-label="Cart"
            >
              <FaShoppingCart size={17} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F26419] px-1 text-xs font-black text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition-colors duration-200 hover:bg-orange-700"
            >
              Contact Us
            </NavLink>

            {isAuthenticated ? (
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:text-red-500"
              >
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="inline-flex items-center gap-2 rounded-full border border-[#0F7F6C] px-4 py-2 text-sm font-semibold text-[#0F7F6C] transition hover:bg-[#0F7F6C] hover:text-white"
              >
                <FaUserCircle />
                Login
              </NavLink>
            )}
          </div>
        </div>

        {open && (
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
                onClick={() => setOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
                onClick={() => setOpen(false)}
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
                onClick={() => setOpen(false)}
              >
                Our Services
              </NavLink>
              <NavLink
                to="/allergy"
                className={({ isActive }) =>
                  isActive ? activeClass : defaultClass
                }
                onClick={() => setOpen(false)}
              >
                Allergy Advice
              </NavLink>
              <NavLink
                to="/contact"
                className="rounded-full bg-orange-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition-colors duration-200 hover:bg-orange-700"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </NavLink>
              {isAuthenticated ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:text-red-500"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="rounded-full border border-[#0F7F6C] px-5 py-3 text-center text-sm font-semibold text-[#0F7F6C] transition hover:bg-[#0F7F6C] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
