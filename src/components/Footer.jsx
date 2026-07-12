import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialIcons = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaYoutube, label: "YouTube" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTiktok, label: "TikTok" },
];

const footerPages = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Menu", path: "/menu" },
  { label: "Our Services", path: "/service" },
  { label: "Allergy Advice", path: "/allergy" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = ({ className = "bg-white", borderClass = "border-slate-100" }) => {
  return (
    <footer className={className}>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link
            to="/"
            className="flex w-fit items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <img src="/logo.png" alt="momos logo" className="h-10 w-10 transition-transform duration-300 hover:rotate-12" />
            <span className="text-2xl font-bold text-[#0F7F6C] transition-all duration-300 hover:text-[#F26419] hover:drop-shadow-lg">
              momos
            </span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-500 transition-colors duration-300 hover:text-slate-700">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis elit.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C] transition-colors duration-300">momos</h3>
          <ul className="mt-4 space-y-3 text-slate-500">
            {footerPages.map((page) => (
              <li key={page.path}>
                <Link
                  to={page.path}
                  className="inline-block transition-all duration-300 hover:translate-x-2 hover:text-[#F26419] hover:font-semibold hover:drop-shadow-md"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C] transition-colors duration-300">Legals</h3>
          <ul className="mt-4 space-y-3 text-slate-500">
            {["Terms & Conditions", "Privacy Policy", "Support"].map((item) => (
              <li
                key={item}
                className="w-fit cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-[#F26419] hover:font-semibold hover:drop-shadow-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C] transition-colors duration-300">Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-slate-500">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-[#0F7F6C] hover:text-white hover:shadow-lg hover:shadow-teal-200"
              >
                <Icon className="transition-transform duration-300 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`border-t ${borderClass} py-8 text-center text-sm text-slate-400 transition-colors duration-300 hover:text-slate-600`}
      >
        Copyright (c) 2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
