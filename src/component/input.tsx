type InputProps = {
  text:string,
  type:string,
}

export default function Input({text, type} : InputProps){
  return (
      <div className="w-full h-12 relative flex rounded-xl">
        <input required className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl border border-primary focus:shadow-md" id="address" type={type} />
        <label className="absolute top-1/2 translate-y-[-50%] bg-neutral-950 left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-primary peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-primary duration-150" htmlFor="address">
          {text}</label>
      </div>
  );
}