import { FaMobileAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import aboutwomen from "../assets/aboutwomen.png";

const qrImage =
  "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://momos.example.com/allergy-advice";

const ingredientGroups = [
  {
    title: "For the Dough",
    items: [
      "120 gms refined flour",
      "1/4 tsp baking powder",
      "1/2 tsp salt water (for kneading)",
    ],
  },
  {
    title: "For the Chicken Filling:",
    items: [
      "1 cup chicken (minced)",
      "1/2 cup onions, finely chopped",
      "1/4 tsp black pepper powder",
      "1 tbsp oil",
      "1/2 tsp garlic paste",
      "1/2 tsp soya sauce",
      "Salt",
      "1/4 tsp vinegar",
    ],
  },
  {
    title: "For the Vegetarian Filling:",
    items: [
      "1 cup cabbage and carrots, grated",
      "2 tbsp onions, finely chopped",
      "1/2 tsp garlic, finely chopped",
      "1 tbsp oil",
      "1/4 tsp vinegar",
      "1/2 tsp soya sauce",
      "to taste salt",
      "to taste pepper",
      "1 tbsp cornflour",
    ],
  },
  {
    title: "For Chilli Sauce:",
    items: [
      "25 gram garlic, peeled",
      "6 gms whole red chillies",
      "3 tbsp vinegar",
      "3 tbsp vinegar",
      "1 tbsp oil",
      "to taste salt",
      "to taste salt",
      "to taste sugar",
    ],
  },
];

const allergyParagraphs = [
  "Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisi facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam diam montes orci congue vulputate magna ullamcorper.",
  "Feugiat orci feugiat cursus nisi tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque est.",
  "Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisl nisl nisl tincidunt rhoncus.",
  "Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac.",
  "Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget.",
];

const SectionTitle = ({ orange, dark }) => (
  <div className="flex items-center justify-center gap-5">
    <span className="h-px w-24 bg-[#0F7F6C]" />
    <h2 className="shrink-0 text-center text-2xl font-black text-[#101828]">
      <span className="text-[#F26419]">{orange}</span> {dark}
    </h2>
    <span className="h-px w-24 bg-[#0F7F6C]" />
  </div>
);

const AllergyAdvice = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto grid min-h-140 max-w-7xl items-center gap-12 overflow-hidden px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-serif text-4xl italic text-[#0F7F6C] sm:text-5xl">
            Allergy Advices
          </p>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-slate-400 sm:text-sm sm:tracking-[0.35em]">
            At Our Restaurant
          </p>
          <h1 className="mx-auto mt-5 max-w-xl text-3xl font-black leading-tight text-[#101828] sm:text-4xl lg:mx-0">
            We use only the freshest and highest quality ingredients in all our
            dishes,{" "}
            <span className="text-[#F26419]">
              and offer transparency in our ingredient labeling.
            </span>
          </h1>
        </div>

        <div className="relative flex min-h-90 justify-center sm:min-h-115">
          <div className="absolute top-12 h-72 w-72 rounded-full bg-[#0F7F6C] sm:h-88 sm:w-88 lg:right-12" />
          <div className="absolute left-8 top-28 hidden h-52 w-52 bg-[radial-gradient(#dce4eb_2px,transparent_2px)] bg-size-[18px_18px] md:block" />
          <img
            src={aboutwomen}
            alt="Chef showing approval"
            className="relative z-10 h-85 w-57.5 rounded-full object-cover object-top sm:h-107.5 sm:w-75"
          />
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl overflow-hidden px-6 py-14 lg:px-8">
        <SectionTitle orange="Ingredient's" dark="Used" />

        <div
          className="relative mx-auto mt-16 max-w-4xl rounded-lg bg-white bg-contain bg-center bg-no-repeat px-0 py-10 sm:px-8 sm:py-14"
          style={{ backgroundImage: "url('/allergy.png')" }}
        >
          <div className="absolute left-4 top-24 h-72 w-72 rounded-full bg-[#0F7F6C]/85 sm:-left-10 sm:h-80 sm:w-80" />
          <div className="absolute bottom-24 right-2 h-72 w-56 rounded-[45%] bg-[#0F7F6C]/85 sm:-right-10" />

          <div className="relative z-10 mx-auto max-w-3xl space-y-12">
            {ingredientGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border-4 border-[#0F7F6C] bg-white p-8 shadow-[0_8px_18px_rgba(15,127,108,0.20)] sm:p-10"
              >
                <h3 className="text-lg font-black text-[#101828]">
                  {group.title}
                </h3>
                <ul className="mt-6 divide-y divide-slate-100">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 py-3 text-sm font-bold text-slate-700"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full border-2 border-[#F26419]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle orange="Allergy" dark="Advice" />
        <div className="mt-14 space-y-7 text-sm font-medium leading-7 text-slate-500">
          {allergyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-lg bg-slate-50 px-6 py-12 text-center">
          <h2 className="text-2xl font-black text-[#0F7F6C]">
            Scan the QR code
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-500">
            You can also check the allergy advices using your phone as well
          </p>
          <img
            src={qrImage}
            alt="Allergy advice QR code"
            className="mx-auto mt-8 h-44 w-44 rounded-md border-8 border-slate-900 bg-white p-2"
          />
          <p className="mt-4 inline-flex items-center justify-center gap-2 text-xl font-black uppercase text-[#F26419]">
            Scan Me! <FaMobileAlt className="text-slate-900" />
          </p>
        </div>
      </section>

      <Footer className="bg-slate-50" borderClass="border-slate-200" />
    </main>
  );
};

export default AllergyAdvice;
