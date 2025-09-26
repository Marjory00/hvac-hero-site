// src/lib/data/services.ts
import { ServiceOption } from '@/lib/types/service';

// --- SERVICE DATA ---
export const serviceOptions: ServiceOption[] = [
  { id: 'diag', name: 'Standard Diagnostic Fee', baseRate: 150, timeEstimateHours: 1.5 },
  { id: 'filter', name: 'Standard Filter Replacement', baseRate: 80, timeEstimateHours: 0.5 },
  { id: 'recharge', name: 'AC Refrigerant Recharge (Est.)', baseRate: 450, timeEstimateHours: 3.0 },
  { id: 'heat_diag', name: 'Furnace Diagnostic Fee', baseRate: 160, timeEstimateHours: 1.5 },
  { id: 'coil_clean', name: 'Evaporator Coil Cleaning', baseRate: 250, timeEstimateHours: 2.0 },
];

// --- UTILITY FUNCTION FIX ---
/**
 * Calculates the total base cost for a list of selected service IDs.
 * @param selectedIds - An array of 'id' strings for the selected services.
 * @returns The total estimated base cost.
 */
export const calculateTotal = (selectedIds: string[]): number => {
  // 1. Filter the main data array to find the full ServiceOption objects
  const selectedServices = serviceOptions.filter(service => 
    selectedIds.includes(service.id)
  );

  // 2. Use the 'reduce' method to sum the baseRate of the selected services
  const totalCost = selectedServices.reduce((sum, service) => {
    return sum + service.baseRate;
  }, 0); // Start the sum at 0

  return totalCost;
};