import {
  FaChevronDown,
  FaClock,
  FaDirections,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaMinus,
  FaPhoneAlt,
  FaPlus,
} from "react-icons/fa";
import Footer from "../components/Footer";

const contactCards = [
  {
    Icon: FaMapMarkerAlt,
    title: "LOCATION",
    content: (
      <p>
        New Baneshwor - 41201,
        <br />
        Kathmandu, Bagmati, Nepal
      </p>
    ),
  },
  {
    Icon: FaPhoneAlt,
    title: "PHONE",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-[86px_1fr] gap-4">
          <span className="font-bold text-[#0F7F6C]">Mobile:</span>
          <span>
            (+977) 980 5689789
            <br />
            (+977) 9841 275897
          </span>
        </div>
        <div className="grid grid-cols-[86px_1fr] gap-4">
          <span className="font-bold text-[#0F7F6C]">Tel:</span>
          <span>01-4783972</span>
        </div>
      </div>
    ),
  },
  {
    Icon: FaClock,
    title: "SERVICE TIME",
    content: (
      <div className="space-y-4">
        <div className="flex justify-between gap-8">
          <span className="font-bold text-[#0F7F6C]">MON - FRI</span>
          <span>8 am - 8 pm</span>
        </div>
        <div className="flex justify-between gap-8">
          <span className="font-bold text-[#0F7F6C]">SAT - SUN</span>
          <span>Closed</span>
        </div>
      </div>
    ),
  },
];

const Contact = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 text-center lg:px-8 lg:pb-20 lg:pt-20">
        <p className="font-['Brush_Script_MT',cursive] text-5xl italic leading-tight text-[#0F7F6C] md:text-6xl">
          Our Contact
        </p>
        <p className="mt-8 text-xl font-medium uppercase tracking-[0.32em] text-slate-400">
          Get In Touch
        </p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl">
          <span className="text-orange-600">Our Friendly Team</span> would love
          to hear from you
        </h1>

        <div className="mt-14 grid gap-7 text-left md:grid-cols-3">
          {contactCards.map(({ Icon, title, content }) => (
            <article
              key={title}
              className="min-h-52.5 rounded-2xl bg-white p-9 shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full text-orange-600">
                  <Icon size={25} />
                </span>
                <h2 className="text-base font-extrabold text-slate-800">
                  {title}
                </h2>
              </div>
              <div className="mt-10 text-lg font-bold italic leading-7 text-slate-700">
                {content}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="grid min-h-190 lg:grid-cols-[1fr_1.25fr]">
          <div className="relative min-h-130 overflow-hidden bg-[#edf2f2] lg:min-h-full">
            <div className="absolute inset-0 opacity-70 bg-[linear-gradient(30deg,rgba(148,163,184,0.22)_12%,transparent_12.5%,transparent_87%,rgba(148,163,184,0.22)_87.5%,rgba(148,163,184,0.22)),linear-gradient(150deg,rgba(148,163,184,0.22)_12%,transparent_12.5%,transparent_87%,rgba(148,163,184,0.22)_87.5%,rgba(148,163,184,0.22)),linear-gradient(30deg,rgba(148,163,184,0.22)_12%,transparent_12.5%,transparent_87%,rgba(148,163,184,0.22)_87.5%,rgba(148,163,184,0.22)),linear-gradient(150deg,rgba(148,163,184,0.22)_12%,transparent_12.5%,transparent_87%,rgba(148,163,184,0.22)_87.5%,rgba(148,163,184,0.22)),linear-gradient(60deg,rgba(100,116,139,0.16)_25%,transparent_25.5%,transparent_75%,rgba(100,116,139,0.16)_75%,rgba(100,116,139,0.16)),linear-gradient(60deg,rgba(100,116,139,0.16)_25%,transparent_25.5%,transparent_75%,rgba(100,116,139,0.16)_75%,rgba(100,116,139,0.16))] bg-position-[0_0,0_0,32px_56px,32px_56px,0_0,32px_56px] bg-size-[64px_112px]" />
            <div className="absolute left-8 top-8 flex overflow-hidden rounded-md border border-slate-200 bg-white text-sm font-semibold shadow-sm">
              <button className="bg-white px-4 py-3 text-slate-900">Map</button>
              <button className="border-l border-slate-200 px-4 py-3 text-slate-400">
                Satellite
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mt-16 rounded-lg bg-white px-8 py-7 text-center shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
                <h3 className="text-xl font-extrabold text-slate-800">
                  New Baneshwor, Kathmandu, Bagmati, Nepal
                </h3>

                <iframe
                  title="New Baneshwor Kathmandu map"
                  src="https://www.google.com/maps?q=Kathmandu New Baneshwor &output=embed"
                  className="absolute inset-0 h-full w-full border-0 "
                  loading="lazy"
                />
                <a className="mt-5 inline-flex items-center gap-2 font-bold text-blue-500">
                  Get Direction <FaDirections size={14} />
                </a>
              </div>
            </div>
            <FaMapMarkerAlt className="absolute left-1/2 top-[54%] -translate-x-1/2 text-5xl text-red-600 drop-shadow-lg" />
            <div className="absolute bottom-10 right-10 grid gap-3">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
                aria-label="Zoom in"
              >
                <FaPlus />
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
                aria-label="Zoom out"
              >
                <FaMinus />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-14 lg:px-14">
            <form className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-sm md:p-11">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Contact <span className="text-orange-600">Us</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-500">
                If you have any queries, send us a message. Our Friendly team
                would love to hear from you
              </p>

              <div className="mt-9 grid gap-5 md:grid-cols-2">
                <label className="block text-base font-medium text-slate-700">
                  First Name
                  <input
                    type="text"
                    className="mt-2 h-14 w-full rounded-lg border border-slate-200 px-4 outline-none transition focus:border-[#0F7F6C] focus:ring-4 focus:ring-[#0F7F6C]/10"
                  />
                </label>
                <label className="block text-base font-medium text-slate-700">
                  Last Name
                  <input
                    type="text"
                    className="mt-2 h-14 w-full rounded-lg border border-slate-200 px-4 outline-none transition focus:border-[#0F7F6C] focus:ring-4 focus:ring-[#0F7F6C]/10"
                  />
                </label>
              </div>

              <label className="mt-6 block text-base font-medium text-slate-700">
                What can we do for you
                <span className="relative mt-2 block">
                  <select className="h-14 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 text-slate-400 outline-none transition focus:border-[#0F7F6C] focus:ring-4 focus:ring-[#0F7F6C]/10">
                    <option>Choose</option>
                    <option>Reservation</option>
                    <option>Catering</option>
                    <option>Feedback</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700" />
                </span>
              </label>

              <label className="mt-6 block text-base font-medium text-slate-700">
                Email
                <input
                  type="email"
                  className="mt-2 h-14 w-full rounded-lg border border-slate-200 px-4 outline-none transition focus:border-[#0F7F6C] focus:ring-4 focus:ring-[#0F7F6C]/10"
                />
              </label>

              <label className="mt-6 block text-base font-medium text-slate-700">
                Phone Number
                <span className="mt-2 flex h-14 overflow-hidden rounded-lg border border-slate-200 focus-within:border-[#0F7F6C] focus-within:ring-4 focus-within:ring-[#0F7F6C]/10">
                  <span className="flex items-center gap-2 border-r border-slate-200 px-4 text-sm text-slate-700">
                    <FaLocationArrow className="text-blue-700" size={12} />
                    +977 <FaChevronDown size={10} />
                  </span>
                  <input
                    type="tel"
                    className="min-w-0 flex-1 px-4 outline-none"
                  />
                </span>
              </label>

              <label className="mt-6 block text-base font-medium text-slate-700">
                Message
                <textarea className="mt-2 h-44 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0F7F6C] focus:ring-4 focus:ring-[#0F7F6C]/10" />
              </label>

              <button
                type="submit"
                className="mt-10 h-14 w-full rounded-full bg-[#0F7F6C] px-8 text-base font-bold text-white transition hover:bg-[#0b6858] md:w-72"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Contact;
