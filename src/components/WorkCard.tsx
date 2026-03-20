export default function WorkCard({
  title,
  parentClassName,
}: {
  title: string;
  parentClassName?: string;
}) {
  return (
    <div className={`flex flex-col gap-y-12 ${parentClassName}`}>
      <div
        className={`rounded-2xl bg-slate-100 md:bg-slate-50 px-4 py-4.5 h-85 ${parentClassName ? "w-full" : "w-90.5 md:w-120"}`}
      ></div>
      <div className="flex flex-col gap-y-3">
        <p className="text-base leading-6 tracking-normal font-nohemi">
          Cub Hub X • 2024
        </p>
        <p className="font-medium text-[2rem] leading-none font-bricolage-grotesque">
          {title}
        </p>
      </div>
    </div>
  );
}
