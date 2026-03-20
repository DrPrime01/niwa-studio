export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="bg-[url('/images/hero-img.png')] bg-cover bg-center bg-no-repeat pt-44.75 pb-17.25 md:pb-25 lg:pb-36 xl:pb-45 flex flex-col">
        <div className="relative overflow-x-scroll mb-25 lg:mb-22 scrollbar-hidden">
          <div className="inline-flex items-center gap-x-14 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 px-5">
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Contact us
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-pomegranate"></span>
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Contact us
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-jaffa"></span>
            <span className="font-lc-moji-a text-white text-[5.375rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9rem] text-nowrap">
              Contact us
            </span>
            <span className="inline-block size-16 rounded-full bg-brand-eminence"></span>
          </div>
        </div>
        <div className="px-5 md:px-24 lg:px-28 xl:px-32.5 mb-43 md:mb-20">
          <p className="text-[2rem] md:text-4xl xl:text-5xl max-w-183 leading-none -tracking-[5%] text-pretty text-white font-bricolage-grotesque">
            Your Vision, Our Expertise – Let’s Build Something Great
          </p>
        </div>
      </div>
      <div className="px-5 md:px-24 lg:px-28 xl:px-32.5 pt-23.5 md:pt-28 lg:pt-36 xl:pt-42 bg-black flex flex-col md:flex-row">
        <div className="md:basis-1/2">
          <h3 className="text-white text-5xl font-bricolage-grotesque leading-none -tracking-[5%]">
            Let’s talk
          </h3>
        </div>
        <div className="md:basis-1/2 flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-6 md:gap-y-8 font-bricolage-grotesque">
            <span className="text-xl leading-7 -tracking-[5%] text-grey-4">
              Contact details
            </span>
            <a
              href="mailto:theo@niwastudios.com"
              className="inline-block text-2xl md:text-3xl lg:text-4xl leading-none -tracking-[5%] text-white underline"
            >
              theo@niwastudios.com
            </a>
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-8 font-bricolage-grotesque">
            <span className="text-xl leading-7 -tracking-[5%] text-grey-4">
              Instagram
            </span>
            <a
              href="https://instagram.com/niwastudios"
              className="inline-block text-2xl md:text-3xl lg:text-4xl leading-none -tracking-[5%] text-white underline"
            >
              @niwastudios
            </a>
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-8 font-bricolage-grotesque">
            <span className="text-xl leading-7 -tracking-[5%] text-grey-4">
              Telegram
            </span>
            <a
              href="https://t.me/niwastudios"
              className="inline-block text-2xl md:text-3xl lg:text-4xl leading-none -tracking-[5%] text-white underline"
            >
              theo@niwastudios.com
            </a>
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-8 font-bricolage-grotesque">
            <span className="text-xl leading-7 -tracking-[5%] text-grey-4">
              x
            </span>
            <a
              href="https://x.com/niwastudios"
              className="inline-block text-2xl md:text-3xl lg:text-4xl leading-none -tracking-[5%] text-white underline"
            >
              @niwastudios
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
