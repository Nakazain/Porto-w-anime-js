type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className,
  style,
}: ButtonProps) {
  return (
    <div style={style}>
      <button
        className={`px-6 py-3 bg-transparent border-2 border-primary text-white rounded-lg hover:bg-primary transition-all duration-200 ${className} hover:cursor-pointer`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}
