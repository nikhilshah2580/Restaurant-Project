import { useMemo } from "react";
import { Link, Navigate, useLocation } from "react-router";
import CryptoJS from "crypto-js";
import { FaArrowLeft, FaLock, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import Footer from "../../components/Footer";
import { useCart } from "../../context/useCart";

const ESEWA_SECRET_KEY = "8gBm/:&EnhH.1/q";
const PRODUCT_CODE = "EPAYTEST";

const Payment = () => {
  const location = useLocation();
  const { cartTotal, items } = useCart();

  const amount = Number(location.state?.amount || cartTotal || 0);
  const orderItems = location.state?.items?.length ? location.state.items : items;

  const transactionUuid = location.state?.transactionUuid;

  const signature = useMemo(() => {
    const message = `total_amount=${amount},transaction_uuid=${transactionUuid},product_code=${PRODUCT_CODE}`;
    const hash = CryptoJS.HmacSHA256(message, ESEWA_SECRET_KEY);
    return CryptoJS.enc.Base64.stringify(hash);
  }, [amount, transactionUuid]);

  if (!amount || !transactionUuid) {
    return <Navigate to="/cart" replace />;
  }

  const appUrl = window.location.origin;

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#F8FCFB] to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_420px] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Link
              to="/cart"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#F26419]"
            >
              <FaArrowLeft />
              Back to cart
            </Link>
            <p className="mt-8 font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
              Secure Payment
            </p>
            <h1 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-[#111827] sm:text-5xl">
              Complete your order with eSewa
            </h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-500">
              Review your total, then continue to the eSewa test checkout page
              to finish your payment.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm shadow-slate-200/70">
                <FaShieldAlt className="text-2xl text-[#0F7F6C]" />
                <p className="mt-3 text-sm font-black text-[#111827]">
                  eSewa Test Mode
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm shadow-slate-200/70">
                <FaLock className="text-2xl text-[#F26419]" />
                <p className="mt-3 text-sm font-black text-[#111827]">
                  Signed Request
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm shadow-slate-200/70">
                <FaMoneyBillWave className="text-2xl text-[#0F7F6C]" />
                <p className="mt-3 text-sm font-black text-[#111827]">
                  Total Rs {amount}
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-lg border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70">
            <h2 className="text-2xl font-black text-[#111827]">
              Payment Summary
            </h2>
            <div className="mt-6 space-y-4 border-b border-slate-100 pb-6">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 text-sm font-bold text-slate-500"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span className="whitespace-nowrap">
                    Rs {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between text-2xl font-black text-[#111827]">
              <span>Total</span>
              <span className="text-[#F26419]">Rs {amount}</span>
            </div>

            <form
              className="mt-7"
              action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
              method="POST"
            >
              <input type="hidden" name="amount" value={amount} readOnly />
              <input type="hidden" name="tax_amount" value="0" readOnly />
              <input type="hidden" name="total_amount" value={amount} readOnly />
              <input
                type="hidden"
                name="transaction_uuid"
                value={transactionUuid}
                readOnly
              />
              <input
                type="hidden"
                name="product_code"
                value={PRODUCT_CODE}
                readOnly
              />
              <input
                type="hidden"
                name="product_service_charge"
                value="0"
                readOnly
              />
              <input
                type="hidden"
                name="product_delivery_charge"
                value="0"
                readOnly
              />
              <input
                type="hidden"
                name="success_url"
                value={`${appUrl}/payment/success`}
                readOnly
              />
              <input
                type="hidden"
                name="failure_url"
                value={`${appUrl}/payment/failure`}
                readOnly
              />
              <input
                type="hidden"
                name="signed_field_names"
                value="total_amount,transaction_uuid,product_code"
                readOnly
              />
              <input type="hidden" name="signature" value={signature} readOnly />
              <button
                type="submit"
                className="w-full rounded-full bg-[#0F7F6C] px-6 py-4 font-bold text-white transition hover:bg-[#0d6c56]"
              >
                Pay with eSewa
              </button>
            </form>

            <p className="mt-4 text-center text-sm leading-6 text-slate-500">
              You will be redirected to the official eSewa test checkout.
            </p>
          </aside>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Payment;
