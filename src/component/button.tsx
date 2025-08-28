export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="mt-6 px-6 py-3 bg-transparent border-2 border-primary text-white rounded-lg hover:bg-primary transition-all duration-300">
      {children}
    </button>
  );
}
