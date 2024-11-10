'use server';

import prisma from './prisma';

export const createCV = async ({
  extractedText,
  anonToken,
}: {
  extractedText: string;
  anonToken: string;
}) => {
  try {
    const data = await prisma.cV.create({
      data: {
        extractedText,
        anonToken,
      },
    });
    return data;
  } catch (error) {
    console.error('Failed to upload CV:', error);
    throw new Error('Failed to upload CV. Please try again later.');
  }
};
