'use client'

import React, { useState, type ReactNode } from 'react';
import Toaster from '../component/Toaster';
import { ToastContext } from "../hooks/useToast";

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'error') => {
    const newToast: Toast = {
      id: Date.now(), 
      message,
      type,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 z-50">
        {toasts.map((toast) => (
          <Toaster
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};