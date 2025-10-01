'use client';

import { useState, useCallback } from 'react';
import { ToastMessage } from '@/components/Toast';

export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((
    message: string,
    type: ToastMessage['type'] = 'info',
    duration?: number
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastMessage = { id, message, type, duration };

    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message: string, duration?: number) => {
    addToast(message, 'success', duration);
  }, [addToast]);

  const showError = useCallback((message: string, duration?: number) => {
    addToast(message, 'error', duration);
  }, [addToast]);

  const showInfo = useCallback((message: string, duration?: number) => {
    addToast(message, 'info', duration);
  }, [addToast]);

  const showWarning = useCallback((message: string, duration?: number) => {
    addToast(message, 'warning', duration);
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
  };
}