import { z } from 'zod';

const allowedFileTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 2000000;

export const stepOneSchema = z.object({
  cvFile: z
    .instanceof(File)
    .refine((file: File) => file.name, 'File is required')
    .refine((file) => file.size < MAX_FILE_SIZE, 'Max size is 2MB.')
    .refine((file) => allowedFileTypes.includes(file.type), {
      message: 'Invalid file type. Only PDF and DOCX files are allowed.',
    }),
});
