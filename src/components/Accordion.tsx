import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleAccordion(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div className="flex flex-col divide-y divide-grey-3 border-t border-grey-3">
      <div
        className={`flex flex-col gap-y-5 ${openIndex === 0 ? "pb-20" : ""}`}
      >
        <button
          className="py-8 flex items-center cursor-pointer"
          onClick={() => toggleAccordion(0)}
        >
          <span
            className={`shrink-0 md:w-50 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 0 ? "text-brand-jaffa" : "text-black"}`}
          >
            01
          </span>
          <span
            className={`flex-1 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 0 ? "text-brand-jaffa" : "text-black"}`}
          >
            We Both Plant
          </span>
          <div className="shrink-0 relative md:w-50 text-end mr-7">
            <span className="w-6.5 h-[2.5px] bg-black inline-block absolute"></span>
            <span
              className={`w-6.5 h-[2.5px] bg-black inline-block absolute ${openIndex === 0 ? "rotate-90" : ""} origin-center transition-transform`}
            ></span>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 flex items-start ${openIndex === 0 ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="shrink-0 md:w-50">
            <img
              src="/images/flower-pot.png"
              alt="flower-pot"
              className="hidden md:block w-33 h-38"
            />
          </div>
          <div className="flex-1 md:w-50 flex flex-col gap-y-12 md:flex-row md:gap-x-20 lg:gap-x-25.5 xl:gap-x-31">
            <p className="leading-6 text-base font-bricolage-grotesque max-w-94.75">
              It starts with you taking a step to grow. And also with us
              carefully understanding your vision & facets of your project
              that’ll be defined for growth.
            </p>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <span className="text-xl font-medium leading-none font-nohemi">
                Research
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Insights
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Strategy
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Voice & Tone
              </span>
            </div>
          </div>
          <div className="shrink-0 md:w-45"></div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-y-5 ${openIndex === 1 ? "pb-20" : ""}`}
      >
        <button
          className="py-8 flex items-center cursor-pointer"
          onClick={() => toggleAccordion(1)}
        >
          <span
            className={`shrink-0 md:w-50 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 1 ? "text-brand-jaffa" : "text-black"}`}
          >
            02
          </span>
          <span
            className={`flex-1 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 1 ? "text-brand-jaffa" : "text-black"}`}
          >
            We Nurture
          </span>
          <div className="shrink-0 relative md:w-50 text-end mr-7">
            <span className="w-6.5 h-[2.5px] bg-black inline-block absolute"></span>
            <span
              className={`w-6.5 h-[2.5px] bg-black inline-block absolute ${openIndex === 1 ? "rotate-90" : ""} origin-center transition-transform`}
            ></span>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 flex items-start ${openIndex === 1 ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="shrink-0 md:w-50">
            <img
              src="/images/flower-pot.png"
              alt="flower-pot"
              className="hidden md:block w-33 h-38"
            />
          </div>
          <div className="flex-1 md:w-50 flex flex-col gap-y-12 md:flex-row md:gap-x-20 lg:gap-x-25.5 xl:gap-x-31">
            <p className="leading-6 text-base font-bricolage-grotesque max-w-94.75">
              It starts with you taking a step to grow. And also with us
              carefully understanding your vision & facets of your project
              that’ll be defined for growth.
            </p>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <span className="text-xl font-medium leading-none font-nohemi">
                Research
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Insights
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Strategy
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Voice & Tone
              </span>
            </div>
          </div>
          <div className="shrink-0 md:w-45"></div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-y-5 ${openIndex === 2 ? "pb-20" : ""}`}
      >
        <button
          className="py-8 flex items-center cursor-pointer"
          onClick={() => toggleAccordion(2)}
        >
          <span
            className={`shrink-0 md:w-50 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 2 ? "text-brand-jaffa" : "text-black"}`}
          >
            03
          </span>
          <span
            className={`flex-1 text-start font-bricolage-grotesque font-semibold leading-none text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] ${openIndex === 2 ? "text-brand-jaffa" : "text-black"}`}
          >
            Yield
          </span>
          <div className="shrink-0 relative md:w-50 text-end mr-7">
            <span className="w-6.5 h-[2.5px] bg-black inline-block absolute"></span>
            <span
              className={`w-6.5 h-[2.5px] bg-black inline-block absolute ${openIndex === 2 ? "rotate-90" : ""} origin-center transition-transform`}
            ></span>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 flex items-start ${openIndex === 2 ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="shrink-0 md:w-50">
            <img
              src="/images/flower-pot.png"
              alt="flower-pot"
              className="hidden md:block w-33 h-38"
            />
          </div>
          <div className="flex-1 md:w-50 flex flex-col gap-y-12 md:flex-row md:gap-x-20 lg:gap-x-25.5 xl:gap-x-31">
            <p className="leading-6 text-base font-bricolage-grotesque max-w-94.75">
              It starts with you taking a step to grow. And also with us
              carefully understanding your vision & facets of your project
              that’ll be defined for growth.
            </p>
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <span className="text-xl font-medium leading-none font-nohemi">
                Research
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Insights
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Strategy
              </span>
              <span className="text-xl font-medium leading-none font-nohemi">
                Voice & Tone
              </span>
            </div>
          </div>
          <div className="shrink-0 md:w-45"></div>
        </div>
      </div>
    </div>
  );
}
