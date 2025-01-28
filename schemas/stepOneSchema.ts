import { z } from 'zod';

const allowedFileTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 2000000;

// Helper function to check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export const stepOneSchema = z.object({
  cvFile: z
    .any()
    .refine((file) => {
      if (!isBrowser) return true; // Skip validation on server
      return file instanceof File;
    }, 'Must be a file')
    .refine((file) => {
      if (!isBrowser) return true; // Skip validation on server
      return file.name;
    }, 'File is required')
    .refine((file) => {
      if (!isBrowser) return true; // Skip validation on server
      return file.size < MAX_FILE_SIZE;
    }, 'Max size is 2MB.')
    .refine(
      (file) => {
        if (!isBrowser) return true; // Skip validation on server
        return allowedFileTypes.includes(file.type);
      },
      {
        message: 'Invalid file type. Only PDF and DOCX files are allowed.',
      },
    ),
});
