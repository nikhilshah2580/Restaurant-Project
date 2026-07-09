import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { GiChefToque, GiPartyPopper } from "react-icons/gi";
import team1 from "../assets/team1.png";
import waiter from "../assets/waiter.jpg";
import Footer from "../components/Footer";

const qrImage =
  "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://dummyjson.com/recipes";

const Service = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const heroFoodImage = recipes[0]?.image || waiter;
  const partyImage = recipes[1]?.image || waiter;
  const cateringImage = recipes[2]?.image || waiter;

  useEffect(() => {
    const getServiceImages = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/recipes?limit=6");
        setRecipes(resp.data.recipes || []);
      } catch (error) {
        console.log("Error fetching service images:", error);
      } finally {
        setLoading(false);
      }
    };

    getServiceImages();
  }, []);

  return (
    <main className="bg-white">
      <section className="mx-auto grid min-h-135 max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-['Brush_Script_MT',cursive] text-5xl italic leading-tight text-[#0F7F6C] md:text-6xl">
            Our Services
          </p>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.42em] text-slate-400">
            Knowing Our Customers Needs
          </p>
          <h1 className="mt-5 text-2xl font-extrabold leading-tight text-[#111827] sm:text-3xl">
            <span className="block text-orange-600">
              We're more than just momos.
            </span>
            We're a full-service dining experience.
          </h1>
        </div>

        <div className="relative mx-auto flex min-h-90 w-full max-w-lg items-center justify-center">
          <div className="absolute right-6 top-16 h-72 w-72 rounded-full bg-[#0F7F6C] sm:h-88 sm:w-88" />
          <div className="absolute left-4 top-20 hidden h-44 w-44 bg-[radial-gradient(#dce4eb_2px,transparent_2px)] bg-size-[18px_18px] md:block" />
          <div className="absolute bottom-2 right-0 hidden h-44 w-44 bg-[radial-gradient(#dce4eb_2px,transparent_2px)] bg-size-[18px_18px] md:block" />
          <img
            src={team1}
            alt="Chef showing approval"
            className="relative z-10 h-90 w-70 rounded-b-full object-cover object-top sm:h-110 sm:w-85"
          />
        </div>
      </section>

      <section className="relative min-h-135 overflow-hidden bg-slate-900">
        {loading ? (
          <div className="absolute inset-0 animate-pulse bg-slate-200" />
        ) : (
          <img
            src={heroFoodImage}
            alt="Momo dining service"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex min-h-135 max-w-7xl flex-col justify-center px-6 text-white lg:px-8">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Dine With Us</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/90">
            Enjoy our momos in the comfort of your own home with our delivery
            services.
          </p>
          <button className="mt-9 inline-flex w-fit items-center gap-4 rounded-full bg-[#0F7F6C] px-7 py-4 text-sm font-bold transition hover:bg-[#0b6858]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0F7F6C]">
              <FaPlay size={10} />
            </span>
            Watch the Video
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <GiPartyPopper className="text-5xl text-orange-600" />
            <h2 className="mt-7 text-3xl font-extrabold text-[#111827]">
              Private Party
            </h2>
            <p className="mt-7 max-w-lg leading-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
            <QrCard />
          </div>

          <ServiceImage src={partyImage} loading={loading} alt="Private party" />
        </div>

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">
          <ServiceImage
            src={cateringImage}
            loading={loading}
            alt="Catering dining table"
          />

          <div className="lg:pl-16">
            <GiChefToque className="text-5xl text-orange-600" />
            <h2 className="mt-7 text-3xl font-extrabold text-[#111827]">
              Catering
            </h2>
            <p className="mt-7 max-w-lg leading-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
            <QrCard />
          </div>
        </div>

        <div className="mt-24 rounded-2xl bg-slate-50 px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#111827]">
            Got any Queries?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-500">
            If you have any queries, send us a message. Our Friendly team would
            love to hear from you
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex h-14 min-w-52 items-center justify-center rounded-full bg-[#0F7F6C] px-8 text-base font-bold text-white transition hover:bg-[#0b6858]"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

const ServiceImage = ({ src, alt, loading }) => (
  <div className="relative overflow-hidden rounded-lg bg-slate-100 shadow-sm">
    {loading ? (
      <div className="h-95 animate-pulse bg-slate-200" />
    ) : (
      <img src={src} alt={alt} className="h-95 w-full object-cover" />
    )}
    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2">
      <span className="h-2 w-7 rounded-full bg-white" />
      <span className="h-2 w-2 rounded-full bg-white/70" />
      <span className="h-2 w-2 rounded-full bg-white/70" />
    </div>
  </div>
);

const QrCard = () => (
  <div className="mt-12 flex max-w-md items-center justify-between gap-5 rounded-lg bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.10)]">
    <div>
      <h3 className="text-xl font-extrabold text-[#0F7F6C]">
        Scan the QR code
      </h3>
      <p className="mt-1 text-sm text-slate-400">
        You can also check about the service
      </p>
    </div>
    <img src={qrImage} alt="Service QR code" className="h-24 w-24" />
  </div>
);

export default Service;
