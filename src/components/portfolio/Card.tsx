interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={`${className} h-full w-full rounded-xl ultra:rounded-2xl bg-linear-to-tr from-primary to-[#e4ddd7] dark:to-[#2a2a2e] p-3 ultra:p-4 overflow-hidden transition-all duration-400 outline outline-gray-700/10 shadow-lg shadow-black/20`}
    >
      {children}
    </div>
  );
};
