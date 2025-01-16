'use server';

import { validateFile } from '@/lib/utils';
import officeparser from 'officeparser';

export async function extractTextFromPDF(file: File) {
  if (!file) throw new Error('File is required.');

  const validationError = validateFile(file);
  if (validationError) throw new Error(validationError);

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const extractText = await officeparser.parseOfficeAsync(buffer);

    return extractText;
  } catch (error) {
    console.error('Error extracting text:', error);
    throw new Error('Failed to extract text from the file.');
  }
}
