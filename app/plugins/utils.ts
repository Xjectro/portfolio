import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default defineNuxtPlugin(() => {
  const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

  return {
    provide: {
      cn,
    },
  };
});
