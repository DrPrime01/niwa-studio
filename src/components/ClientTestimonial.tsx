export default function ClientTestimonial({
  image,
  collabo,
  testimony,
}: {
  image: string;
  collabo: string;
  testimony: string;
}) {
  return (
    <div className="flex flex-col max-w-70">
      <img
        src={image}
        alt={image}
        className="mb-10 bg-blend-hard-light h-15 w-auto object-contain self-start"
      />
      <p className="text-xl leading-none -tracking-[5%] font-bricolage-grotesque mb-5">
        Niwa © x {collabo}
      </p>
      <p className="text-grey-8 text-xl leading-6 -tracking-[5%] font-bricolage-grotesque">
        {testimony}
      </p>
    </div>
  );
}
