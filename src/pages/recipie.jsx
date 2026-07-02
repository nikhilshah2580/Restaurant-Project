import { useEffect, useState } from "react";
import axios from "axios";

const Recipie = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/recipes?limit=12");
        setRecipes(resp.data.recipes);
      } catch (error) {
        console.log("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-black text-[#111827]">Recipes</h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-72 animate-pulse rounded-lg bg-slate-100"
              />
            ))
          : recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-52 w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="font-black text-[#111827]">{recipe.name}</h2>
                  <p className="mt-1 font-black text-[#F26419]">
                    Rs {recipe.caloriesPerServing}
                  </p>
                </div>
              </article>
            ))}
      </div>
    </main>
  );
};

export default Recipie;
