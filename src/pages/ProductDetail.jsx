import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";
import {
  FaArrowLeft,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [recipe, setRecipe] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const resp = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(resp.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [id]);

  const handleAddToCart = () => {
    if (!recipe) return;

    addToCart({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      price: recipe.caloriesPerServing,
      cuisine: recipe.cuisine,
      quantity,
    });
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/menu");
  };

  if (loading) {
    return (
      <main className="bg-white">
        <section className="mx-auto grid min-h-[70vh] max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div className="h-[420px] animate-pulse rounded-lg bg-slate-100" />
          <div className="space-y-5">
            <div className="h-10 animate-pulse rounded bg-slate-100" />
            <div className="h-6 w-48 animate-pulse rounded bg-slate-100" />
            <div className="h-28 animate-pulse rounded bg-slate-100" />
            <div className="h-14 w-56 animate-pulse rounded-full bg-slate-100" />
          </div>
        </section>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="bg-white">
        <section className="mx-auto min-h-[60vh] max-w-4xl px-6 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-black text-[#111827]">
            Product not found
          </h1>
          <Link
            to="/menu"
            className="mt-8 inline-flex rounded-full bg-[#0F7F6C] px-7 py-3 font-bold text-white"
          >
            Back to Menu
          </Link>
        </section>
      </main>
    );
  }

  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#F8FCFB] to-white">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-[#0F7F6C] hover:text-[#0F7F6C] sm:w-auto sm:gap-2 sm:px-5 sm:py-3 sm:text-sm sm:font-bold"
            aria-label="Back"
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="grid items-center gap-12 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-12">
          <div className="relative overflow-hidden rounded-lg bg-slate-50 p-5 shadow-xl shadow-slate-200/70">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-[360px] w-full rounded-lg object-cover sm:h-[500px]"
            />
          </div>

          <div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-[#111827] sm:text-5xl">
              {recipe.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold">
              <span className="rounded-full bg-[#0F7F6C]/10 px-4 py-2 text-[#0F7F6C]">
                {recipe.cuisine}
              </span>
              <span className="rounded-full bg-[#F26419]/10 px-4 py-2 text-[#F26419]">
                {recipe.difficulty}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">
                {totalMinutes} min
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-4 py-2 text-yellow-600">
                <FaStar /> {recipe.rating}
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Freshly prepared with {recipe.ingredients.slice(0, 5).join(", ")}.
              A warm momo-style favorite with bold flavor and satisfying
              texture.
            </p>

            <p className="mt-8 text-4xl font-black text-[#F26419]">
              Rs {recipe.caloriesPerServing}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex h-13 items-center rounded-full border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="flex h-13 w-13 items-center justify-center text-slate-600 hover:text-[#F26419]"
                  aria-label="Decrease quantity"
                >
                  <FaMinus size={12} />
                </button>
                <span className="min-w-10 text-center text-lg font-black">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="flex h-13 w-13 items-center justify-center text-slate-600 hover:text-[#0F7F6C]"
                  aria-label="Increase quantity"
                >
                  <FaPlus size={12} />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#0F7F6C] px-8 font-bold text-white shadow-lg shadow-[#0F7F6C]/20 transition hover:bg-[#0d6c56]"
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="rounded-lg border border-slate-100 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-[#111827]">Ingredients</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {recipe.ingredients.map((ingredient) => (
              <span
                key={ingredient}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-100 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-black text-[#111827]">Instructions</h2>
          <ol className="mt-5 space-y-3 text-slate-600">
            {recipe.instructions.slice(0, 5).map((step, index) => (
              <li key={step} className="leading-7">
                <span className="mr-2 font-black text-[#F26419]">
                  {index + 1}.
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default ProductDetail;
