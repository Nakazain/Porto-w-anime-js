import React, { useEffect, useRef } from 'react';
import { waapi } from 'animejs';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const icons = {
  success: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  ),
  error: (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  ),
};

const Toaster: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      waapi.animate(toastRef.current, {
        opacity: [0, 1],
        x: ['150%', '0%'],
        scale: [0.5, 1],
        filter: ['blur(10px)', 'blur(0)'],
        ease: 'out(3)',
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
        x: ['0%', '100%'],
        filter: ['blur(0)', 'blur(10px)'],
        ease: 'inOut(3)',
        duration: 300,
      });
      setTimeout(onClose, 350);
    }
  };

  const baseClasses = "flex items-center p-4 mb-4 text-white rounded-sm shadow-lg w-full max-w-xs";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div ref={toastRef} className={`${baseClasses} ${typeClasses[type]}`}>
      <div className="mr-3">{icons[type]}</div>
      <div className="flex-grow">{message}</div>
      <button onClick={handleClose} className="ml-4 p-1 rounded-sm hover:bg-black/20 focus:outline-none">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  );
};

export default Toaster;