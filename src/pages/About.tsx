export default function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-black pt-44.75 pb-17.25 md:pb-25 lg:pb-36 xl:pb-45 flex flex-col">
        <div className="relative overflow-x-scroll mb-25 lg:mb-27 scrollbar-hidden">
          <div className="inline-flex items-center gap-x-14 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 px-5">
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Niwa
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-eminence"></span>
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Niwa
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-jaffa"></span>
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Niwa
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-eminence"></span>
          </div>
        </div>
        <div className="px-5 md:px-24 lg:px-28 xl:px-32.5 mb-43 md:mb-20">
          <p className="text-[2rem] md:text-4xl xl:text-5xl max-w-183 leading-none -tracking-[5%] text-pretty text-white/60 font-bricolage-grotesque">
            At Niwa Studios , we tell stories through pixels and digital
            experiences that nurture's growth.
          </p>
        </div>
        <div className="px-5 md:px-24 lg:px-28 xl:px-32.5 mb-43 self-end">
          <p className="text-white/60 font-bricolage-grotesque leading-none -tracking-[5%] text-[2rem] md:text-4xl">
            (SCROLL)
          </p>
        </div>
      </div>
      <div>
        <img src="/images/hero-img.png" className="object-cover" />
      </div>
      <div></div>
    </div>
  );
}
