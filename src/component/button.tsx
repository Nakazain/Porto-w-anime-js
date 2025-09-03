type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-transparent border-2 border-primary text-white rounded-lg hover:bg-primary transition-all duration-300 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
