import { Link, useNavigate } from "react-router";
import { FaMinus, FaPlus, FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
import Footer from "../components/Footer";
import { useCart } from "../context/useCart";

const Cart = () => {
  const navigate = useNavigate();
  const {
    items,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    navigate("/payment", {
      state: {
        amount: cartTotal,
        items,
        transactionUuid: `MOMO-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`,
      },
    });
  };

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#F8FCFB] to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
            Your Cart
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-[#111827] sm:text-5xl">
            Fresh momo picks ready for checkout
          </h1>
        </div>
      </section>

      {items.length === 0 ? (
        <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F26419]/10 text-3xl text-[#F26419]">
            <FaShoppingCart />
          </div>
          <h2 className="mt-6 text-3xl font-black text-[#111827]">
            Your cart is empty
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-500">
            Add your favorite momo dishes from the menu and they will appear
            here.
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex rounded-full bg-[#0F7F6C] px-8 py-3 font-bold text-white transition hover:bg-[#0d6c56]"
          >
            Explore Menu
          </Link>
        </section>
      ) : (
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_360px] lg:px-8">
          <div className="space-y-5">
            {items.map((item) => (
              <article
                key={item.id}
                className="grid gap-5 rounded-lg border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/70 sm:grid-cols-[140px_1fr] sm:p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full rounded-lg object-cover sm:h-full"
                />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-black text-[#111827]">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm font-bold text-[#0F7F6C]">
                      {item.cuisine}
                    </p>
                    <p className="mt-3 text-2xl font-black text-[#F26419]">
                      Rs {item.price}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex h-11 items-center rounded-full border border-slate-200">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        className="flex h-11 w-11 items-center justify-center text-slate-500 hover:text-[#F26419]"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={11} />
                      </button>
                      <span className="min-w-8 text-center font-black">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        className="flex h-11 w-11 items-center justify-center text-slate-500 hover:text-[#0F7F6C]"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={11} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
                      aria-label="Remove item"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-lg border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70">
            <h2 className="text-2xl font-black text-[#111827]">
              Order Summary
            </h2>
            <div className="mt-6 space-y-4 border-b border-slate-100 pb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 text-sm font-bold text-slate-500"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>Rs {item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-2xl font-black text-[#111827]">
              <span>Total</span>
              <span className="text-[#F26419]">Rs {cartTotal}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="mt-7 block w-full rounded-full bg-[#0F7F6C] px-6 py-4 text-center font-bold text-white transition hover:bg-[#0d6c56]"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full rounded-full border border-slate-200 px-6 py-4 font-bold text-slate-600 transition hover:border-red-200 hover:text-red-500"
            >
              Clear Cart
            </button>
          </aside>
        </section>
      )}

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Cart;
