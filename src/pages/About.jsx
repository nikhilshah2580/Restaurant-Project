import waiter from "../assets/waiter.jpg";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import reactangle from "../assets/reactangle.png";
import reactangle2 from "../assets/reactangle2.png";
import pngwing2 from "../assets/pngwing2.png";
import pngwing3 from "../assets/pngwing3.png";
import pngwing from "../assets/pngwing.png";
import aboutwomen from "../assets/aboutwomen.png";
import aboutwomen2 from "../assets/aboutwomen2.png";
import aboutveg from "../assets/aboutveg.png";
import Footer from "../components/Footer";
import { FaPlay } from "react-icons/fa";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const storyBlocks = [
  {
    title: (
      <>
        Our momos are <span className="text-[#F26419]">made with love</span>
      </>
    ),
    image: reactangle,
    plate: pngwing,
    reverse: false,
  },
  {
    title: (
      <>
        Taste the difference with{" "}
        <span className="text-[#F26419]">our handcrafted momos</span>
      </>
    ),
    image: reactangle2,
    plate: pngwing2, 
    reverse: true,
  },
  {
    title: (
      <>
        Our momos are the perfect{" "}
        <span className="text-[#F26419]">blend of tradition and innovation</span>
      </>
    ),
    image: waiter,
    plate: pngwing3, 
    reverse: false,
  },
];

const team = [
  { title: "Head Chef", image: team1 },
  { title: "Assistant Chef", image: team2 },
  { title: "Assistant Chef", image: team3 },
];

const About = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto grid min-h-170 max-w-7xl items-center gap-12 overflow-hidden px-6 py-16 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
            About Us
          </p>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-slate-400 sm:mt-16 sm:text-sm sm:tracking-[0.35em]">
            We pride ourself on
          </p>
          <h1 className="mx-auto mt-5 max-w-xl text-3xl font-bold leading-tight text-[#101828] sm:text-4xl md:text-5xl lg:mx-0">
            <span className="text-[#F26419]">Our authentic momo recipes</span>{" "}
            passed down through generations
          </h1>
        </div>

        <div className="relative flex min-h-90 justify-center sm:min-h-115">
          <div className="absolute top-12 h-72 w-72 rounded-full bg-[#0F7F6C] sm:h-88 sm:w-88 lg:right-4" />
          <div className="absolute left-8 top-28 hidden h-52 w-52 bg-[radial-gradient(#dce4eb_2px,transparent_2px)] bg-size-[18px_18px] md:block" />
          <div className="absolute bottom-0 right-0 hidden h-52 w-52 bg-[radial-gradient(#dce4eb_2px,transparent_2px)] bg-size-[18px_18px] md:block" />
          <img
            src={aboutwomen}
            alt="Chef holding cooking spoon"
            className="relative z-10 h-85 w-57.5 rounded-full object-cover object-top sm:h-107.5 sm:w-75 lg:translate-x-10"
          />
        </div>
      </section>

      <section className="relative min-h-115 overflow-hidden sm:min-h-140">
        <img
          src={aboutveg}
          alt="Chef preparing momos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto flex min-h-115 max-w-7xl flex-col justify-center px-6 text-white sm:min-h-140 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Process behind the making
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
            See how we make momos that you like from only the best ingredients
          </p>
          <button className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#0F7F6C] px-7 py-4 text-sm font-semibold transition hover:bg-[#0d6c56]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0F7F6C]">
              <FaPlay size={10} />
            </span>
            Watch the Video
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20 sm:space-y-28 sm:py-28 lg:px-8">
        {storyBlocks.map((block, index) => (
          <div
            key={index}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              block.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="text-center lg:text-left">
              <h2 className="mx-auto max-w-md text-3xl font-bold leading-tight text-[#101828] sm:text-4xl lg:mx-0">
                {block.title}
              </h2>
              <p className="mx-auto mt-6 max-w-md leading-8 text-slate-500 lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
                adipiscing. Leo odio tincidunt ipsum magna lacus viverra
                tincidunt. Viverra aliquet sollicitudin eget dapibus.
              </p>
            </div>
            <div className="relative pb-12">
              <img
                src={block.image}
                alt="Momo preparation"
                className="h-65 w-full rounded-md object-cover sm:h-90"
              />
              <img
                src={block.plate}
                alt="Momo plate"
                className={`absolute -bottom-3 w-36 sm:-bottom-8 sm:w-56 ${
                  block.reverse ? "right-2 sm:-right-4" : "left-2 sm:-left-4"
                }`}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="grid bg-slate-900 lg:min-h-140 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={aboutveg}
            alt="Restaurant interior"
            className="absolute inset-0 h-full w-full object-cover opacity-35 blur-sm"
          />
          <div className="relative flex h-full flex-col justify-center px-6 py-16 text-white sm:py-20 lg:px-32">
            <p className="text-7xl font-bold leading-none">“</p>
            <p className="mt-3 max-w-xl text-base leading-8 text-white/90 sm:text-lg sm:leading-9">
              Momo is not just about sustenance, it's about bringing people
              together and creating memories. At our restaurant, we strive to
              create a warm and inviting atmosphere where our guests can enjoy
              delicious momo, great company, and unforgettable experiences.
            </p>
            <h3 className="mt-12 text-3xl font-bold">Marcus Schleifer</h3>
            <p className="font-bold">CEO</p>
            <div className="mt-14 flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white">
                <IoArrowBackOutline />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white">
                <IoArrowForwardOutline />
              </button>
            </div>
          </div>
        </div>
        <img
          src={aboutwomen2}
          alt="Company leader"
          className="h-105 w-full object-cover object-top sm:h-140 lg:h-full lg:min-h-140"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#101828] sm:text-5xl">
            Meet The <span className="text-[#F26419]">Team</span>
          </h2>
          <p className="mt-4 text-lg font-bold text-[#0F7F6C]">
            Our talented team members who delivers only the best results
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.title + member.image}
              className="relative h-90 overflow-hidden rounded-md sm:h-105"
            >
              <img
                src={member.image}
                alt={member.title}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  {member.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-2xl font-bold text-[#101828]">
            01 <span className="text-base text-slate-300">/ 05</span>
          </p>
          <div className="flex gap-4">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200">
              <IoArrowBackOutline />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200">
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default About;

