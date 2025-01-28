import { z } from 'zod';

const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 2000000;

export const stepOneSchema = z.object({
  cvFile: z
    .any()
    .refine((file) => file?.name, 'File is required.')
    .refine((file) => file?.size < MAX_FILE_SIZE, 'Max size is 2MB.')
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      'Invalid file type. Only PDF and DOCX files are allowed.',
    ),
});
