type InputProps = {
  text: string;
  type?: string;
  textarea?: boolean;
};

export default function Input({ text, type="text", textarea=false }: InputProps) {
  return (
    <div className="w-full relative flex rounded-xl">
      {textarea ? (
        <textarea
          placeholder=" "
          required
          className="peer w-2xl min-h-24 bg-transparent outline-none px-4 py-2 text-base rounded-xl border border-primary focus:shadow-md"
          id="address"
        />
      ) : (
      <input
        placeholder=" "
        required
        className="peer w-2xl h-12 bg-transparent outline-none px-4 text-base rounded-xl border border-primary focus:shadow-md"
        id="address"
        type={type}
      />
      )}
      <label
        className="absolute top-1/2 -translate-y-1/2 bg-neutral-950 left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-primary peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:left-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-primary duration-150 peer-not-placeholder-shown:peer-invalid:text-red-500"
        htmlFor="address"
      >
        {text}
      </label>
    </div>
  );
}
