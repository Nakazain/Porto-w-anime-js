export default function Input() {
  return (
    <div className="relative" id="input">
      <input placeholder="Name" className="blocks w-full text-sm h-[50px] px-4 text-neutral-200 bg-neutral-900 rounded-[8px] border border-neutral-800 appearance-none focus:border-transparent focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]" id="floating_outlined" type="text" />
      <label className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-red-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-neutral-900 data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" htmlFor="floating_outlined">
        Name
      </label>
    </div>
  );
}