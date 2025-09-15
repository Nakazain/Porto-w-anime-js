import React, { useEffect, useRef } from "react";
import { waapi } from "animejs";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const icons = {
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
      />
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.712T12 7t-.712.288T11 8v4q0 .425.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      />
    </svg>
  ),
};

const Toaster: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      waapi.animate(toastRef.current, {
        opacity: [0, 1],
        x: ["150%", "0%"],
        scale: [0.5, 1],
        filter: ["blur(10px)", "blur(0)"],
        ease: "out(3)",
        duration: 400,
      });

      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (toastRef.current) {
      waapi.animate(toastRef.current, {
        opacity: [1, 0],
        x: ["0%", "100%"],
        filter: ["blur(0)", "blur(10px)"],
        ease: "inOut(3)",
        duration: 300,
      });
      setTimeout(onClose, 350);
    }
  };

  const baseClasses =
    "flex items-center p-4 mb-4 text-white rounded-sm shadow-lg w-full max-w-xs";
  const typeClasses = {
    success: "bg-neutral-800",
    error: "bg-red-500",
  };

  return (
    <div ref={toastRef} className={`${baseClasses} ${typeClasses[type]}`}>
      <div className="mr-3">{icons[type]}</div>
      <div className="flex-grow font-bold">{message}</div>
      <button
        onClick={handleClose}
        className="ml-4 p-1 rounded-sm hover:bg-black/20 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="m3.5 2.086l4.5 4.5l4.5-4.5L13.914 3.5L9.414 8l4.5 4.5l-1.414 1.414l-4.5-4.5l-4.5 4.5L2.086 12.5l4.5-4.5l-4.5-4.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toaster;
