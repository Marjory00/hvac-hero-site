// src/lib/store/uiStore.ts
import { create } from 'zustand';

// 1. Your defined interface (this is correct)
interface UIState {
  isAlertVisible: boolean;
  alertMessage: string;
  alertType: 'success' | 'error' | 'info';
  
  // Actions
  showAlert: (message: string, type: UIState['alertType']) => void;
  hideAlert: () => void;
}

// 2. The FIX is applied here:
// The callback function must accept 'set' and 'get' (if used), which need to be typed.
export const useUIStore = create<UIState>((set) => ({ // <-- Ensure 'set' is typed by the generic <UIState>
  // Initial State
  isAlertVisible: false,
  alertMessage: '',
  alertType: 'info',

  // Actions
  // The 'set' function inside this block correctly infers its type from the store definition.
  showAlert: (message, type) => {
    set((state) => ({ // <-- FIX: The error is in this inner function's 'state' parameter.
        // We fix this by correctly typing the outer `create` function and
        // ensuring the inner function uses the `set` overload that accepts a partial state.
        isAlertVisible: true, 
        alertMessage: message, 
        alertType: type 
    }));
    
    // Using the set overload that accepts the new state directly is often cleaner and avoids this specific error:
    /*
    set({ 
        isAlertVisible: true, 
        alertMessage: message, 
        alertType: type 
    });
    */

    // Auto-hide the alert after 4 seconds
    setTimeout(() => {
      set({ isAlertVisible: false });
    }, 4000);
  },
  
  hideAlert: () => set({ isAlertVisible: false }),
}));