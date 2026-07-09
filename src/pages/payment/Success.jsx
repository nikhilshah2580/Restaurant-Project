import { Link, useSearchParams } from "react-router";
import { FaCheckCircle, FaReceipt, FaShoppingBag } from "react-icons/fa";
import Footer from "../../components/Footer";

const decodeEsewaData = (encodedData) => {
  if (!encodedData) return null;

  try {
    return JSON.parse(atob(encodedData));
  } catch {
    return null;
  }
};

const Success = () => {
  const [searchParams] = useSearchParams();
  const paymentData = decodeEsewaData(searchParams.get("data"));

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#F1FBF7] to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0F7F6C]/10 text-4xl text-[#0F7F6C]">
            <FaCheckCircle />
          </div>
          <p className="mt-6 font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
            Payment Successful
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-[#111827] sm:text-5xl">
            Thank you, your momo order is confirmed
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
            We received your eSewa payment and your order is being prepared.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 lg:px-8">
        <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#0F7F6C]">
                Transaction Summary
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#111827]">
                eSewa payment completed
              </h2>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F26419]/10 text-2xl text-[#F26419]">
              <FaReceipt />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-500">Status</p>
              <p className="mt-1 text-lg font-black text-[#0F7F6C]">
                {paymentData?.status || "Complete"}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-500">Amount</p>
              <p className="mt-1 text-lg font-black text-[#F26419]">
                Rs {paymentData?.total_amount || paymentData?.amount || "Paid"}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 sm:col-span-2">
              <p className="text-sm font-bold text-slate-500">
                Transaction Code
              </p>
              <p className="mt-1 break-words text-lg font-black text-[#111827]">
                {paymentData?.transaction_code ||
                  paymentData?.transaction_uuid ||
                  "Available in your eSewa account"}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0F7F6C] px-6 py-4 font-bold text-white transition hover:bg-[#0d6c56]"
            >
              <FaShoppingBag />
              Order More
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 font-bold text-slate-600 transition hover:border-[#F26419] hover:text-[#F26419]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default Success;
