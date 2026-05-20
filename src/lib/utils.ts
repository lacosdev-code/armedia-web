/**
 * Utility untuk menggabungkan class Tailwind secara kondisional.
 * Digunakan di seluruh UI components untuk conditional styling.
 *
 * Upgrade path: install `clsx` + `tailwind-merge` lalu:
 *   import { clsx, type ClassValue } from "clsx";
 *   import { twMerge } from "tailwind-merge";
 *   export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(" ");
}
