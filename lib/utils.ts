import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// app/lib/utils.ts
export function cn(...inputs: Array<string | number | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}
