interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={`${className} h-full w-full rounded-2xl bg-primary p-6 overflow-hidden transition-all duration-400 outline outline-gray-700/10`}
    >
      {children}
    </div>
  );
};
