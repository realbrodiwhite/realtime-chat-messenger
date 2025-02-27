import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEnvironmentVariable (name: string): string {
  const value = process.env[name];
  if (value === undefined) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return value;
}
