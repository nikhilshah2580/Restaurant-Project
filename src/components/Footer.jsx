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
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="momos logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-[#0F7F6C]">momos</span>
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-slate-500">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis elit.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C]">momos</h3>
          <ul className="mt-4 space-y-3 text-slate-500">
            {footerPages.map((page) => (
              <li key={page.path}>
                <Link to={page.path} className="transition hover:text-[#0F7F6C]">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C]">Legals</h3>
          <ul className="mt-4 space-y-3 text-slate-500">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#0F7F6C]">Follow Us</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-slate-500">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:text-[#0F7F6C]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`border-t ${borderClass} py-8 text-center text-sm text-slate-400`}
      >
        Copyright (c) 2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
