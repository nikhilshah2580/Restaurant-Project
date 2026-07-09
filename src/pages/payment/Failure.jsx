import { Link } from "react-router";
import { FaExclamationCircle, FaRedo, FaShoppingCart } from "react-icons/fa";
import Footer from "../../components/Footer";

const Failure = () => {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-red-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl text-red-500">
            <FaExclamationCircle />
          </div>
          <p className="mt-6 font-serif text-4xl italic text-red-500 sm:text-5xl">
            Payment Failed
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-[#111827] sm:text-5xl">
            Your order was not completed
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
            The eSewa payment was cancelled or could not be verified. Your cart
            is still safe, so you can try checkout again.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-red-500">
                Checkout Interrupted
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#111827]">
                No money was captured by this app
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-500">
              <FaRedo />
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-5 leading-7 text-slate-600">
            Please check your eSewa app, internet connection, or entered
            credentials before trying again.
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/cart"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F26419] px-6 py-4 font-bold text-white transition hover:bg-orange-700"
            >
              <FaShoppingCart />
              Return to Cart
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 font-bold text-slate-600 transition hover:border-[#0F7F6C] hover:text-[#0F7F6C]"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Failure;
