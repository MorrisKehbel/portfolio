interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`${className} rounded-2xl bg-primary p-6 outline outline-gray-700/10`}
    >
      {children}
    </div>
  );
};
