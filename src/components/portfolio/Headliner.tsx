export const Headliner = () => {
  return (
    <div className="grid w-full grid-cols-[1fr_auto] items-end gap-4">
      <h1 className="text-4xl leading-[1.05] font-serif md:text-5xl lg:text-6xl">
        Let’s build digital
        <br /> experiences that <em className="italic">matter</em>
      </h1>
      <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full border border-black/10">
        <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
          <path
            d="M8 7l-5 5 5 5M16 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};
