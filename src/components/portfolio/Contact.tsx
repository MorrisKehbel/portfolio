import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <a
      href="#contact"
      className="group grid h-full grid-cols-[1fr_auto] items-end gap-4"
    >
      <div>
        <div className="text-sm opacity-70">Have some questions?</div>
        <div className="mt-2 text-4xl font-serif">
          Contact <em className="italic">me</em>
        </div>
      </div>
      <ArrowUpRight className="mb-2 h-6 w-6 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
    </a>
  );
};
