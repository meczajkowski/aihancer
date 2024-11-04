'use server';

import prisma from './prisma';

export const createCV = async ({
  extractedText,
  anonToken,
}: {
  extractedText: string;
  anonToken: string;
}) => {
  const data = await prisma.cV.create({
    data: {
      extractedText,
      anonToken,
    },
  });

  return data;
};
