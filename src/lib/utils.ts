import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatFileSize = (size: number) => {
  const kb = size / 1024;
  if (kb < 1024) {
    return `${kb.toFixed(2)} KB`;
  } else {
    const mb = kb / 1024;
    return `${mb.toFixed(2)} MB`;
  }
};
