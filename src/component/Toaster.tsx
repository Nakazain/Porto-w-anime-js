import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

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
      animate(toastRef.current, {
        opacity: [0, 1],
        translateX: ['100%', '0%'],
        duration: 500,
        easing: 'easeOutExpo',
      });

      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (toastRef.current) {
      animate(toastRef.current, {
        opacity: [1, 0],
        translateX: ['0%', '100%'],
        duration: 500,
        easing: 'easeInExpo',
        complete: onClose, 
      });
    }
  };

  const baseClasses = "flex items-center p-4 mb-4 text-white rounded-lg shadow-lg w-full max-w-xs";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div ref={toastRef} className={`${baseClasses} ${typeClasses[type]}`}>
      <div className="mr-3">{icons[type]}</div>
      <div className="flex-grow">{message}</div>
      <button onClick={handleClose} className="ml-4 p-1 rounded-full hover:bg-black/20 focus:outline-none">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
  );
};

export default Toaster;