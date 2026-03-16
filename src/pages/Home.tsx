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
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-2.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-2.png)] bg-[url(/images/hero-img-3.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-4.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-2.png)] bg-[url(/images/hero-img-2.png)] bg-cover bg-center"></div>
          <div className="h-91.25 w-100.5 md:w-112.5 md:h-130 mask-[url(/images/mask-1.png)] bg-[url(/images/hero-img-3.png)] bg-cover bg-center"></div>
        </div>
      </div>
      <div className="px-5 md:px-20 lg:px-25 xl:px-29.5 flex md:mb-24.25 lg:mb-58.5">
        <div className="hidden md:block basis-1/2"></div>
        <div className="flex flex-col gap-y-7.75 basis-1/2">
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
      <div className="bg-white px-5 md:px-24 lg:px-28 xl:px-32.5 pt-35.5">
        <div className="max-w-204 flex flex-col gap-y-12 md:gap-y-14 lg:gap-y-16 mb-20 md:mb-24 lg:mb-28 xl:mb-34.75">
          <h3 className="text-[40px] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold leading-none tracking-[2.5%] font-lc-moji">
            Our Process Is Us
          </h3>
          <p className="text-black text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-none -tracking-[5%] font-bricolage-grotesque">
            Every project is worth nurturing. And we're here to spore growth &
            yield through the digital experiences we create.
          </p>
        </div>
      </div>
    </div>
  );
}
