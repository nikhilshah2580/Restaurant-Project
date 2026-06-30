import React from "react";
import momo from "../assets/momo.png";
import round from "../assets/round.png";
import man from "../assets/man.png";
import buffmomo from "../assets/buffmomo.png";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const Home = () => {
  return (
    <main className="bg-white">
      <section className="relative min-h-screen overflow-hidden bg-white">
        <img
          src={round}
          alt="Decorative round background"
          className="pointer-events-none absolute top-0 hidden md:block h-220 w-220 -right-45"
        />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8 lg:max-w-xl">
              <div className="inline-flex rounded-full bg-[#F26419]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-[#F26419]">
                Restaurant
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                  The{" "}
                  <span className="rounded-md bg-[#F26419] px-3 py-1 text-white">
                    #One
                  </span>
                  <span className="block">Momo Restaurant</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  More than{" "}
                  <span className="font-semibold text-[#F26419]">
                    20+ Varieties
                  </span>{" "}
                  of momo available for you. Enjoy fresh ingredients, bold
                  flavors, and fast delivery.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F7F6C] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0F7F6C]/20 transition duration-200 hover:bg-[#0d6c56]"
                >
                  Explore Food Menu
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-slate-100"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-[#F26419]/10 blur-3xl lg:block" />
              <img
                src={momo}
                alt="Momo restaurant dish"
                className="relative mx-auto w-full max-w-156 rounded-4xl object-cover shadow-[0_35px_80px_rgba(15,127,108,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Light Background */}
              <div className="absolute left-5 top-5 h-107.5 w-75 rounded-t-[170px] bg-slate-100"></div>

              {/* Green Shape */}
              <div className="relative flex h-107.5 w-75 items-end justify-center overflow-hidden rounded-t-[170px] bg-[#0F7F6C]">
                <img
                  src={man}
                  alt="Customer"
                  className="h-107.5 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#101828]">
              Why Customers <span className="text-[#F26419]">Love Us</span>
            </h2>

            <p className="mt-8 max-w-lg leading-8 text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus
              nibh fermentum vulputate tortor. Egestas facilisi luctus turpis
              arcu dignissim. Amet neque enim etiam purus id. Tortor sit orci
              blandit cursus turpis.
            </p>

            <button className="mt-10 rounded-full bg-[#0F7F6C] px-8 py-4 text-white transition hover:bg-[#0d6c56]">
              Explore Our Story →
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#101828]">
            Our <span className="text-[#F26419]">Most Popular</span> Recipes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full border-2 border-black px-8 py-2 font-medium">
            Buff
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-2 font-medium hover:border-[#0F7F6C]">
            Chicken
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-2 font-medium hover:border-[#0F7F6C]">
            Veg
          </button>
        </div>

        {/* Recipes */}
        <div className="mt-16 flex items-center justify-between">
          {/* Left Arrow */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-[#0F7F6C] hover:text-white">
            <IoArrowBackOutline size={20} />
          </button>

          {/* Card 1 */}
          <div className="text-center">
            <img src={buffmomo} alt="Buff Momo" className="mx-auto w-52" />

            <h3 className="mt-4 text-xl font-semibold">Buff Momo</h3>

            <p className="text-2xl font-bold text-[#F26419]">₹150</p>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img src={buffmomo} alt="Buff Fry Momo" className="mx-auto w-52" />

            <h3 className="mt-4 text-xl font-semibold">Buff Fry Momo</h3>

            <p className="text-2xl font-bold text-[#F26419]">₹180</p>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img src={buffmomo} alt="Buff C. Momo" className="mx-auto w-52" />

            <h3 className="mt-4 text-xl font-semibold">Buff C. Momo</h3>

            <p className="text-2xl font-bold text-[#F26419]">₹200</p>
          </div>

          {/* Right Arrow */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-[#0F7F6C] hover:text-white">
            <IoArrowForwardOutline size={20} />
          </button>
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-[#0F7F6C] px-8 py-4 text-white hover:bg-[#0d6c56]">
            Explore Our Menu →
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
