import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const allowedFileTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const maxFileSize = 2 * 1024 * 1024; // 2MB

export const validateFile = (file: File) => {
  if (!file) {
    return 'File is required.';
  }

  if (!allowedFileTypes.includes(file.type)) {
    return 'Invalid file type. Only PDF and DOCX files are allowed.';
  }

  if (file.size > maxFileSize) {
    return `File size exceeds the ${maxFileSize / 1024 / 1024}MB limit.`;
  }

  return null;
};
