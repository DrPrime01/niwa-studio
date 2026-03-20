import Accordion from "../components/Accordion";
import ClientTestimonial from "../components/ClientTestimonial";
import ArrowRight from "../components/vectors/ArrowRight";
import WorkCard from "../components/WorkCard";

export default function Home() {
  return (
    <div className="mt-82.75 flex flex-col">
      <div className="px-5 md:px-20 lg:px-25 xl:px-29.5 mb-10 md:mb-11">
        <p className="text-base text-black">Plant, Nurture, Yield</p>
        <h2 className="text-[46.27px] md:text-[80px] lg:text-[110px] xl:text-[153.9px] leading-full uppercase font-lc-moji">
          Niwa Studios
        </h2>
      </div>
      <div className="relative overflow-x-scroll px-3.5 md:px-5 mb-40.75 lg:mb-39.75 scrollbar-hidden">
        <div className="inline-flex gap-x-3.5 md:gap-x-5">
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1-mb.png)] md:mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-2.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-2-mb.png)] md:mask-[url(/images/mask-2.png)] bg-[url(/images/hero-img-3.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1-mb.png)] md:mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-4.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-2-mb.png)] md:mask-[url(/images/mask-2.png)] bg-[url(/images/hero-img-2.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1-mb.png)] md:mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-3.png)] bg-cover bg-center"></div>
        </div>
      </div>
      <div className="px-5 md:px-20 lg:px-25 xl:px-29.5 flex md:mb-24.25 lg:mb-58.5">
        <div className="hidden md:block basis-1/2"></div>
        <div className="flex flex-col gap-y-7.75 md:basis-1/2">
          <p className="text-[2rem] md:text-[40px] lg:text-5xl leading-full">
            Creative nurture room is a modern way of calling ourselves a garden.
            We plant, nurture and create impact through digital experiences that
            grows beyond pixels.
          </p>
          <p className="text-xl leading-8 -tracking-[5%]">
            We believe every project is worth nurturing. And we're here to spore
            growth & yield through the digital experiences we create.
          </p>
        </div>
      </div>
      <div className="px-5 md:px-20 lg:px-25 xl:px-29.5 flex flex-col gap-y-5 relative mb-21.5 md:mb-20">
        <h3 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-extrabold leading-full -tracking-[2%]">
          Works
        </h3>
        <div className="h-86 lg:h-159.5 w-full mask-[url(/images/works-mask.png)] mask-no-repeat bg-slate-100"></div>
        <img
          src="/images/works-figurine.png"
          alt="figurine"
          className="object-contain h-[183.63px] w-33.75 absolute bottom-0 right-1/8"
        />
      </div>
      <div className="flex flex-col gap-y-9 md:gap-y-12 lg:gap-y-16 xl:gap-y-20 pb-32.25">
        <div className="flex items-center justify-between px-5 md:px-20 lg:px-25 xl:px-29.5">
          <button className="py-4 px-11.5 border border-black text-base leading-5 font-semibold -tracking-[0.7%] rounded-full">
            Drag
          </button>
          <p className="font-semibold text-[2rem] leading-5 -tracking-[0.7%]">
            Yield In Pixels.
          </p>
        </div>
        <div className="relative overflow-x-scroll mb-22.5 scrollbar-hidden">
          <div className="inline-flex gap-x-4.5 md:gap-x-5 px-5">
            <WorkCard title="Cub Hub X: Immersive NFTs with Real-World Impact" />
            <WorkCard title="Redefining Decentralized Computing" />
            <WorkCard title="Crafting a Ninja-Inspired NFT Collection" />
            <WorkCard title="Cub Hub X: Immersive NFTs with Real-World Impact" />
          </div>
        </div>
        <button className="flex items-center gap-x-8 self-center cursor-pointer">
          <span className="font-bricolage-grotesque font-semibold text-2xl leading-8 tracking-[-0.7%]">
            Experience Nurture
          </span>
          <span className="size-11 rounded-full bg-black grid place-items-center">
            <ArrowRight />
          </span>
        </button>
      </div>
      <div className="bg-black relative">
        <div className="flex flex-col gap-y-12 md:gap-y-15 lg:gap-y-19 mt-22.75 md:mt-22 mx-5 md:mx-24 lg:mx-28 xl:mx-32.5 mb-67 md:mb-79.5">
          <h3 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-bold leading-none tracking-[2.5%] font-lc-moji">
            <span className="text-white">Capabi</span>
            <span className="text-white/55">lities</span>
          </h3>
          <div className="flex flex-col gap-y-18 md:flex-row md:items-end md:justify-between">
            <p className="text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-none -tracking-[5%] font-bricolage-grotesque max-w-167.25">
              Every project is worth nurturing. And we're here to spore growth &
              yield through the digital experiences we create.
            </p>
            <button className="flex items-center gap-x-8 cursor-pointer shrink-0">
              <span className="font-bricolage-grotesque font-semibold text-2xl leading-8 tracking-[-0.7%] text-white">
                See All Services
              </span>
              <span className="size-11 rounded-full bg-white grid place-items-center">
                <ArrowRight stroke="black" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative overflow-x-scroll mb-71.5 md:mb-66.5 scrollbar-hidden z-10">
          <div className="inline-flex gap-x-12 px-5 items-center">
            <span className="font-lc-moji-c text-4xl md:text-[3.375rem] lg:text-[4.5rem] text-white shrink-0">
              Creative Direction
            </span>
            <span className="size-8 rounded-full bg-brand-eminence shrink-0"></span>
            <span className="font-lc-moji-c text-4xl md:text-[3.375rem] lg:text-[4.5rem] text-white shrink-0">
              Creative Direction
            </span>
            <span className="size-8 rounded-full bg-brand-eminence shrink-0"></span>
            <span className="font-lc-moji-c text-4xl md:text-[3.375rem] lg:text-[4.5rem] text-white shrink-0">
              Creative Direction
            </span>
            <span className="size-8 rounded-full bg-brand-eminence shrink-0"></span>
            <span className="font-lc-moji-c text-4xl md:text-[3.375rem] lg:text-[4.5rem] text-white shrink-0">
              Creative Direction
            </span>
            <span className="size-8 rounded-full bg-brand-eminence shrink-0"></span>
          </div>
        </div>
        <img
          src="/images/capabilities.png"
          alt="capabilities"
          className="rounded-4xl z-0 absolute right-4.5 bottom-42.25 lg:bottom-35 lg:right-79.5 w-66.75 h-65.25 md:w-100 md:h-79.5"
        />
      </div>
      <div className="bg-white px-5 md:px-24 lg:px-28 xl:px-32.5 pt-35.5 mb-32.75 md:mb-35 lg:mb-37.75">
        <div className="max-w-204 flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16 mb-20 md:mb-24 lg:mb-28 xl:mb-34.75">
          <h3 className="text-[40px] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold leading-none tracking-[2.5%] font-lc-moji">
            Our Process Is Us
          </h3>
          <p className="text-black text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-none -tracking-[5%] font-bricolage-grotesque">
            Every project is worth nurturing. And we're here to spore growth &
            yield through the digital experiences we create.
          </p>
        </div>
        <Accordion />
        <div className="mt-18 flex flex-col gap-y-25">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bricolage-grotesque leading-none -tracking-[5%]">
              Let’s work together !
            </h3>
            <button className="flex items-center gap-x-8 self-center cursor-pointer">
              <span className="font-bricolage-grotesque font-semibold text-base md:text-2xl lg:text-[2rem] xl:text-[2.5rem] -tracking-[0.7%] leading-[145%]">
                Contact Us
              </span>
              <span className="size-11 rounded-full bg-black grid place-items-center">
                <ArrowRight />
              </span>
            </button>
          </div>
          <div className="relative">
            <div className="h-86 lg:h-159.5 w-full mask-[url(/images/works2-mask.png)] mask-no-repeat bg-slate-100"></div>
            <img
              src="/images/works-figurine-2.png"
              alt="figurine"
              className="object-contain h-[183.63px] w-33.75 absolute top-0 left-1/25"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-34 md:mb-48 lg:mb-56 xl:mb-61">
        <div className="px-5 md:px-24 lg:px-28 xl:px-32.5 pt-35.5 flex items-center justify-between mb-9.5 md:mb-16 lg:mb-25 xl:mb-32.75">
          <h3 className="font-lc-moji tracking-[2.5%] text-[2.5rem] md:text-6xl lg:text-7xl xl:text-8xl">
            <span>Cli</span>
            <span className="text-black/50">ents</span>
          </h3>
          <div className="flex items-center gap-x-3.5">
            <img src="/icons/brand-arrow.svg" alt="brand-left-arrow" />
            <img
              src="/icons/brand-arrow.svg"
              alt="brand-right-arrow"
              className="rotate-180"
            />
          </div>
        </div>
        <div className="relative overflow-x-scroll px-3.5 md:px-5 mb-40.75 lg:mb-39.75 xl:mb-44.5 scrollbar-hidden">
          <div className="inline-flex gap-x-10 md:gap-x-16 lg:gap-x-24 xl:gap-x-35">
            <ClientTestimonial
              image="/images/aptos-logo.png"
              collabo="Aptos"
              testimony="Aptos is a next-gen Layer 1 blockchain fueling the future of Web3. We’re rebranding and repositioning the masterbrand."
            />
            <ClientTestimonial
              image="/images/klaviyo-logo.png"
              collabo="Klaviyo"
              testimony="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <ClientTestimonial
              image="/images/google-logo.png"
              collabo="Google"
              testimony="Aptos is a next-gen Layer 1 blockchain fueling the future of Web3. We’re rebranding and repositioning the masterbrand. "
            />
            <ClientTestimonial
              image="/images/virgin-logo.png"
              collabo="Virgin"
              testimony="Virgin is a next-gen Layer 1 blockchain fueling the future of Web3. We’re rebranding and repositioning the masterbrand."
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 mb-26.25 md:mb-24.5">
          <div className="relative overflow-x-scroll px-3.5 md:px-5 scrollbar-hidden">
            <div className="inline-flex gap-x-16 md:gap-x-32 items-center">
              <span className="uppercase font-bricolage-grotesque font-extrabold text-[4rem] lg:text-8xl shrink-0">
                we are niwa
              </span>
              <img
                src="/icons/brand-arrow.svg"
                alt="brand-right-arrow"
                className="rotate-90 size-16"
              />
              <span className="uppercase font-bricolage-grotesque font-extrabold text-[4rem] lg:text-8xl shrink-0">
                Ready , Set , Plant your ideas
              </span>
              <img
                src="/icons/brand-arrow.svg"
                alt="brand-right-arrow"
                className="rotate-90 size-16"
              />
            </div>
          </div>
          <div className="relative overflow-x-scroll px-3.5 md:px-5 scrollbar-hidden">
            <div className="inline-flex gap-x-16 md:gap-x-32 items-center">
              <span className="uppercase font-bricolage-grotesque font-extrabold text-[4rem] lg:text-8xl shrink-0">
                we are niwa
              </span>
              <img
                src="/icons/brand-arrow.svg"
                alt="brand-right-arrow"
                className="rotate-90 size-16"
              />
              <span className="uppercase font-bricolage-grotesque font-extrabold text-[4rem] lg:text-8xl shrink-0">
                OWN YOUR GROWTH
              </span>
              <img
                src="/icons/brand-arrow.svg"
                alt="brand-right-arrow"
                className="rotate-90 size-16"
              />
            </div>
          </div>
        </div>
        <div className="relative px-5 md:px-24 lg:px-28 xl:px-32.5">
          <div className="flex flex-col max-w-70 md:ml-25">
            <h5 className="text-[2rem] leading-none -tracking-[5%] font-bricolage-grotesque">
              Nurturing Growth
            </h5>
            <p className="text-grey-8 text-xl leading-6 -tracking-[5%] font-bricolage-grotesque mt-5 mb-16">
              We nurture and embody our description “Creative Nurture Room”
              through our approach in creating digital experiences that yield
              growth for you.
            </p>
            <button className="flex items-center gap-x-8">
              <span className="leading-6 text-xl -tracking-[5%] font-bricolage-grotesque text-black">
                Learn the Niwa Way
              </span>
              <div className="size-12 rounded-full bg-black grid place-items-center">
                <img
                  src="/icons/right-arrow.svg"
                  alt="arrow right"
                  className="object-contain animate-back-n-forth"
                />
              </div>
            </button>
          </div>
          <div className="hidden md:block h-screen w-[40.28vw] rounded-2xl bg-slate-100 absolute right-[9.03vw] -top-[19vh]">
            <img
              src="/images/stamp.png"
              alt="stamp"
              className="size-37 absolute -bottom-1/10 -right-1/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
