import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import momo from "../assets/momo.png";
import man from "../assets/man.png";
import waiter from "../assets/waiter.jpg";
import women from "../assets/women.png";
import round from "../assets/round.png";
import Footer from "../components/Footer";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlay,
  FaRegClock,
  FaShoppingCart,
  FaTiktok,
} from "react-icons/fa";
import { GiChefToque, GiHotMeal, GiPartyPopper } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useCart } from "../context/useCart";

const services = [
  {
    icon: <GiHotMeal />,
    title: "Quality Food",
    text: "Only the best food with top quality products and ingredients",
  },
  {
    icon: <GiPartyPopper />,
    title: "Private Party",
    text: "Get the best food for all your private parties and gatherings",
  },
  {
    icon: <GiChefToque />,
    title: "Catering",
    text: "Get the best food for any occasions and gatherings",
  },
];

const Home = () => {
  const { addToCart } = useCart();
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [loadingRecipes, setLoadingRecipes] = useState(true);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [recipeIndex, setRecipeIndex] = useState(0);

  const cuisines = [
    "All",
    ...new Set(popularRecipes.map((recipe) => recipe.cuisine)),
  ].slice(0, 4);

  const filteredRecipes =
    selectedCuisine === "All"
      ? popularRecipes
      : popularRecipes.filter((recipe) => recipe.cuisine === selectedCuisine);

  const visibleRecipes = filteredRecipes.length
    ? Array.from(
        { length: Math.min(3, filteredRecipes.length) },
        (_, index) => {
          const currentIndex = (recipeIndex + index) % filteredRecipes.length;
          return filteredRecipes[currentIndex];
        },
      )
    : [];

  const handlePrevRecipe = () => {
    setRecipeIndex((currentIndex) =>
      currentIndex === 0
        ? Math.max(filteredRecipes.length - 1, 0)
        : currentIndex - 1,
    );
  };

  const handleNextRecipe = () => {
    setRecipeIndex((currentIndex) =>
      filteredRecipes.length ? (currentIndex + 1) % filteredRecipes.length : 0,
    );
  };

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine);
    setRecipeIndex(0);
  };

  const handleAddToCart = (recipe) => {
    addToCart({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      price: recipe.priceValue,
      cuisine: recipe.cuisine,
      quantity: 1,
    });
  };

  useEffect(() => {
    const getPopularRecipes = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/recipes?limit=12");
        const recipes = resp.data.recipes.map((recipe) => ({
          id: recipe.id,
          name: recipe.name,
          price: `Rs ${recipe.caloriesPerServing}`,
          priceValue: recipe.caloriesPerServing,
          image: recipe.image,
          cuisine: recipe.cuisine,
        }));
        setPopularRecipes(recipes);
      } catch (error) {
        console.log("Error fetching recipes:", error);
      } finally {
        setLoadingRecipes(false);
      }
    };

    getPopularRecipes();
  }, []);

  return (
    <main className="bg-white">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-175 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="z-10">
              <p className="mb-4 uppercase tracking-[6px] text-gray-400">
                Restaurant
              </p>

              <h1 className="text-5xl font-bold leading-tight text-[#101828] md:text-7xl">
                The{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 -rotate-6 rounded-md bg-[#F26419]"></span>
                  <span className="relative px-5 py-1 text-white">#One</span>
                </span>
                <br />
                Momo <span className="text-[#F26419]">Restaurant</span>
              </h1>

              <p className="mt-6 text-xl text-gray-600">
                More than{" "}
                <span className="font-bold text-[#F26419]">20+ Varieties</span>{" "}
                of momo available for you
              </p>

              <button className="mt-10 rounded-full bg-[#0D7A6D] px-10 py-4 text-lg font-medium text-white transition hover:bg-[#0A6459]">
                Explore Food Menu →
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex min-h-75 items-center justify-center  sm:min-h-105 lg:min-h-175 lg:justify-end">
              {/* Round Background Image */}
              <img 
                src={round}
                alt="round background"
                className="  pointer-events-none
      absolute
      top-1/2
      -translate-y-1/2
      z-0
    
     
      w-62.5

      -right-5

      sm:-right-37.5 sm:w-120

      md:-right-45 md:w-155

      lg:-right-42.5 lg:w-212.5"
              />

              {/* Momo Image */}
              <img
                src={momo}
                alt="Momo"
                className="relative
      z-10
      object-contain

      w-85

      sm:w-85

      md:w-120

      lg:w-175"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute left-5 top-5 h-107.5 w-75 rounded-t-[170px] bg-slate-100" />
              <div className="relative flex h-107.5 w-75 items-end justify-center overflow-hidden rounded-t-[170px] bg-[#0F7F6C]">
                <img
                  src={man}
                  alt="Customer"
                  className="h-107.5 object-contain"
                />
              </div>
            </div>
          </div>

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
              Explore Our Story {"->"}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#101828]">
            Our <span className="text-[#F26419]">Most Popular</span> Recipes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places.
          </p>
        </div>

        <div className="mt-10 flex justify-start gap-4 overflow-x-auto pb-2 sm:justify-center">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              type="button"
              onClick={() => handleCuisineChange(cuisine)}
              className={`shrink-0 rounded-full px-8 py-2 font-medium transition ${
                selectedCuisine === cuisine
                  ? "border-2 border-black text-slate-950"
                  : "border border-gray-300 text-slate-600 hover:border-[#0F7F6C]"
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrevRecipe}
            disabled={filteredRecipes.length < 2}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-[#0F7F6C] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
          >
            <IoArrowBackOutline size={20} />
          </button>
          <div className="flex gap-5 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
            {loadingRecipes
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="min-w-52 text-center md:min-w-0">
                    <div className="mx-auto h-52 w-52 animate-pulse rounded-full bg-slate-100" />
                    <div className="mx-auto mt-4 h-6 w-36 animate-pulse rounded bg-slate-100" />
                    <div className="mx-auto mt-3 h-7 w-20 animate-pulse rounded bg-slate-100" />
                  </div>
                ))
              : visibleRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="min-w-56 rounded-lg bg-white p-4 text-center shadow-sm shadow-slate-200/70 md:min-w-0"
                  >
                    <Link to={`/product/${recipe.id}`}>
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="mx-auto h-52 w-52 rounded-full object-cover transition duration-300 hover:scale-105"
                      />
                    </Link>
                    <Link
                      to={`/product/${recipe.id}`}
                      className="mt-4 block text-xl font-semibold transition hover:text-[#0F7F6C]"
                    >
                      {recipe.name}
                    </Link>
                    <p className="text-2xl font-bold text-[#F26419]">
                      {recipe.price}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(recipe)}
                      className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0F7F6C] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0d6c56]"
                    >
                      <FaShoppingCart size={13} /> Add
                    </button>
                  </div>
                ))}
            {!loadingRecipes && filteredRecipes.length === 0 && (
              <div className="text-center md:col-span-3">
                <p className="font-medium text-slate-500">
                  Recipes are not available right now.
                </p>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleNextRecipe}
            disabled={filteredRecipes.length < 2}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white transition hover:bg-[#0F7F6C] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12"
          >
            <IoArrowForwardOutline size={20} />
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-[#0F7F6C] px-8 py-4 text-white hover:bg-[#0d6c56]">
            Explore Our Menu {"->"}
          </button>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold text-[#101828]">
            <span className="text-[#F26419]">We Offer People</span> The Service
            They Want
          </h2>
        </div>
      </section>

      <section className="relative min-h-130 overflow-hidden bg-[#0F7F6C]">
        <img
          src={waiter}
          alt="Fresh momo kitchen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex min-h-130 max-w-7xl flex-col items-center justify-center px-6 text-center text-white lg:px-8">
          <h2 className="text-4xl font-bold">Process behind the making</h2>
          <p className="mt-4 text-lg text-white/85">
            See how only chefs cooks only the best momos
          </p>
          <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0F7F6C] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0d6c56]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0F7F6C]">
              <FaPlay size={10} />
            </span>
            Watch the Video
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 text-center md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="text-6xl text-[#F26419]">{service.icon}</div>
              <h3 className="mt-5 text-2xl font-bold text-[#101828]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm font-medium leading-6 text-slate-500">
                {service.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <button className="rounded-full bg-[#0F7F6C] px-8 py-4 text-white hover:bg-[#0d6c56]">
            Explore Our Services {"->"}
          </button>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold text-[#101828]">
              200+ <span className="text-[#F26419]">Happy Customers</span>
            </h2>
            <p className="mt-3 text-lg font-semibold text-[#0F7F6C]">
              What our customers say about us
            </p>
            <blockquote className="mt-10 max-w-xl text-xl font-medium italic leading-9 text-slate-600">
              "Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon"
            </blockquote>
            <p className="mt-5 text-2xl font-bold text-[#101828]">Livia Dias</p>
            <div className="mt-10 flex gap-4">
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-[#0F7F6C] hover:text-white">
                <IoArrowBackOutline />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-[#0F7F6C] hover:text-white">
                <IoArrowForwardOutline />
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-md bg-white shadow-xl shadow-slate-200/70">
              <img
                src={women}
                alt="Happy customer"
                className="h-130 w-105 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#101828]">
            Get <span className="text-[#F26419]">In Touch</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-[#0F7F6C]">
            Our Friendly team would love to hear from you
          </p>
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-white p-5 shadow-2xl shadow-slate-200 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-xl bg-[#0F7F6C] p-8 text-white">
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <FaMapMarkerAlt /> Our Address
                </h3>
                <p className="mt-3 leading-7 text-white/85">
                  New Baneshwor, Kathmandu, Bagmati, Nepal
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <FaPhoneAlt /> Our Contacts
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-4 text-white/85">
                  <p>
                    <span className="block font-bold text-white">Mobile</span>
                    980 5689789
                    <br />
                    9841275897
                  </p>
                  <p>
                    <span className="block font-bold text-white">Landline</span>
                    01-4783972
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-lg font-bold">
                  <FaRegClock /> Our Service Time
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-4 text-white/85">
                  <p>
                    <span className="block font-bold text-white">
                      MON - FRI
                    </span>
                    10 am - 8 pm
                  </p>
                  <p>
                    <span className="block font-bold text-white">
                      SAT - SUN
                    </span>
                    Closed
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold">Get in touch in social networks</p>
                <div className="mt-4 flex gap-4 text-xl">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTiktok />
                </div>
              </div>
            </div>
          </aside>

          <form className="grid gap-5 p-3 md:grid-cols-2 lg:p-8">
            <label className="text-sm font-semibold text-slate-600">
              First Name
              <input className="mt-2 w-full rounded border border-slate-200 px-4 py-3 outline-none focus:border-[#0F7F6C]" />
            </label>
            <label className="text-sm font-semibold text-slate-600">
              Last Name
              <input className="mt-2 w-full rounded border border-slate-200 px-4 py-3 outline-none focus:border-[#0F7F6C]" />
            </label>
            <label className="text-sm font-semibold text-slate-600 md:col-span-2">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded border border-slate-200 px-4 py-3 outline-none focus:border-[#0F7F6C]"
              />
            </label>
            <label className="relative text-sm font-semibold text-slate-600 md:col-span-2">
              What can we do for you
              <select className="mt-2 w-full appearance-none rounded border border-slate-200 px-4 py-3 text-slate-400 outline-none focus:border-[#0F7F6C]">
                <option>Choose</option>
                <option>Reservation</option>
                <option>Catering</option>
                <option>Feedback</option>
              </select>
              <MdKeyboardArrowDown className="pointer-events-none absolute bottom-4 right-4 text-xl text-slate-400" />
            </label>
            <label className="text-sm font-semibold text-slate-600 md:col-span-2">
              Phone Number
              <input
                placeholder="+977"
                className="mt-2 w-full rounded border border-slate-200 px-4 py-3 outline-none focus:border-[#0F7F6C]"
              />
            </label>
            <label className="text-sm font-semibold text-slate-600 md:col-span-2">
              Message
              <textarea className="mt-2 h-40 w-full resize-none rounded border border-slate-200 px-4 py-3 outline-none focus:border-[#0F7F6C]" />
            </label>
            <button className="rounded-full bg-[#F26419] px-8 py-4 font-semibold text-white hover:bg-orange-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="relative h-130 overflow-hidden bg-slate-100">
        <iframe
          title="New Baneshwor Kathmandu map"
          src="https://www.google.com/maps?q=Kathmandu New Baneshwor &output=embed"
          className="absolute inset-0 h-full w-full border-0 "
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/25" />
        <div className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded bg-white p-5 text-center shadow-xl">
          <p className="font-bold text-[#101828]">
            New Baneshwor, Kathmandu, Bagmati, Nepal
          </p>
          <a
            href="https://www.openstreetmap.org/?mlat=27.6930&mlon=85.3314#map=16/27.6930/85.3314"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-bold text-[#0F7F6C]"
          >
            Get Direction {"->"}
          </a>
        </div>
        <div className="absolute left-1/2 top-[62%] flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#F26419] text-white shadow-lg">
          <FaMapMarkerAlt size={14} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
