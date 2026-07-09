import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { FaMobileAlt, FaShoppingCart } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";

const getPrice = (recipe) => `Rs ${recipe.caloriesPerServing}`;
const getDescription = (recipe) => recipe.ingredients.slice(0, 4).join(", ");

const MenuSection = ({ title, recipes, loading }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (recipe) => {
    addToCart({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      price: recipe.caloriesPerServing,
      cuisine: recipe.cuisine,
      quantity: 1,
    });
  };

  return (
    <section className="mx-auto max-w-375 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-14">
      <div className="mb-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:mb-16 sm:gap-7">
        <div className="h-px bg-linear-to-r from-transparent via-[#0F7F6C] to-[#0F7F6C]" />
        <h2 className="shrink-0 text-center text-xl font-black uppercase tracking-wide text-[#111827] sm:text-3xl lg:text-4xl">
          <span className="text-[#F26419]">{title}</span>{" "}
          <span>Momo's</span>
        </h2>
        <div className="h-px bg-linear-to-r from-[#0F7F6C] via-[#0F7F6C] to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 2xl:gap-x-10">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="h-72 animate-pulse rounded-lg bg-slate-100" />
                <div className="mt-6 h-6 animate-pulse rounded bg-slate-100" />
                <div className="mt-4 h-8 w-24 animate-pulse rounded bg-slate-100" />
                <div className="mt-6 h-16 animate-pulse rounded bg-slate-100" />
              </div>
            ))
          : recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="group flex min-h-130 flex-col overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm shadow-slate-200/70 transition duration-200 hover:-translate-y-1 hover:border-[#0F7F6C]/20 hover:shadow-xl hover:shadow-slate-200"
              >
                <Link
                  to={`/product/${recipe.id}`}
                  className="flex h-76 items-center justify-center bg-linear-to-b from-slate-50 to-white p-5"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-full w-full rounded-lg object-cover shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-5">
                    <Link
                      to={`/product/${recipe.id}`}
                      className="text-lg font-black leading-snug text-[#111827] transition hover:text-[#0F7F6C]"
                    >
                      {recipe.name}
                    </Link>
                    <p className="shrink-0 text-xl font-black text-[#F26419]">
                      {getPrice(recipe)}
                    </p>
                  </div>
                  <p className="mt-4 line-clamp-2 text-sm font-medium leading-6 text-slate-500">
                    {getDescription(recipe)}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-7 text-xs font-bold">
                    <span className="rounded-full bg-[#0F7F6C]/10 px-3.5 py-1.5 text-[#0F7F6C]">
                      {recipe.cuisine}
                    </span>
                    <span className="rounded-full bg-[#F26419]/10 px-3.5 py-1.5 text-[#F26419]">
                      {recipe.difficulty}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3.5 py-1.5 text-slate-500">
                      {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Link
                      to={`/product/${recipe.id}`}
                      className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-700 transition hover:border-[#0F7F6C] hover:text-[#0F7F6C]"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleAddToCart(recipe)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F7F6C] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0d6c56]"
                    >
                      <FaShoppingCart size={14} /> Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const firstSection = recipes.slice(0, 8);
  const secondSection = recipes.slice(8, 16);
  const firstTitle = firstSection[0]?.cuisine || "Buff";
  const secondTitle = secondSection[0]?.cuisine || "Chicken";

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/recipes?limit=20");
        setRecipes(resp.data.recipes);
      } catch (error) {
        console.log("Error fetching menu recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <main className="bg-white">
      <section className="bg-linear-to-b from-[#F8FCFB] to-white">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-18 text-center sm:px-8 sm:pb-20 sm:pt-20 lg:px-10">
          <div
            className="text-4xl font-medium italic text-[#0F7F6C] sm:text-5xl"
            style={{ fontFamily: "cursive" }}
          >
            Our Menu
          </div>
          <h1 className="mx-auto mt-10 max-w-4xl text-2xl font-black leading-tight text-[#111827] sm:text-3xl">
            <span className="block text-[#F26419]">
              Our menu is more than just momos,
            </span>
            with a variety of dishes to cater to all tastes and preferences.
          </h1>

          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 rounded-lg border border-slate-100 bg-white px-7 py-10 text-center shadow-xl shadow-slate-200/70 sm:px-12 sm:py-12 md:grid-cols-[1fr_auto] md:text-left">
            <div>
              <h2 className="text-2xl font-black text-[#0F7F6C]">
                Scan the QR code
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-slate-500">
                You can also check the allergy advices using your phone as well
              </p>
            </div>
            <div className="mx-auto text-center md:mx-0">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://dummyjson.com/recipes"
                alt="QR code for recipe menu"
                className="mx-auto h-40 w-40 rounded-lg border-8 border-[#111827] bg-white p-2 sm:h-44 sm:w-44"
              />
              <p className="mt-5 inline-flex items-center gap-2 text-2xl font-black uppercase text-[#111827]">
                <span className="text-[#F26419]">Scan</span> Me!
                <FaMobileAlt className="text-xl" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {!loading && recipes.length === 0 ? (
        <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
          <GiHotMeal className="mx-auto text-6xl text-[#F26419]" />
          <p className="mt-5 text-lg font-semibold text-slate-500">
            Menu recipes are not available right now.
          </p>
        </section>
      ) : (
        <>
          <MenuSection
            title={firstTitle}
            recipes={firstSection}
            loading={loading}
          />
          <MenuSection
            title={secondTitle}
            recipes={secondSection}
            loading={loading}
          />
        </>
      )}

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Menu;
