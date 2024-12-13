import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const colorClasses = new Set([
  "bg-red-500", "bg-blue-500", "bg-green-500", // add all color classes you want to exclude
  "text-red-500", "text-blue-500", "text-green-500", // add all text color classes you want to exclude
  // add more color classes as needed
]);

const themeClasses = new Set([
  "dark", "light", // add all theme classes you want to exclude
  // add more theme classes as needed
]);

export function cn(...inputs: ClassValue[]) {
  const filteredInputs = inputs.flat().filter((cls) => {
    if (typeof cls !== 'string') return true;
    return !colorClasses.has(cls) && !themeClasses.has(cls);
  });
  return twMerge(clsx(filteredInputs));
}
