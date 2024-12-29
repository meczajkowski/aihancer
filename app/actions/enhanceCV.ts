'use server';

import { cvEnhancePrompt } from '@/prompts/cv.prompt';
import { classicCVTemplateSchema } from '@/schemas/classicCvTemplateSchema';
import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
export const enhance = async (
  resumeText: string,
  jobTitle: string,
  companyName: string,
  jobDescription: string,
) => {
  const PROMPT = cvEnhancePrompt(
    resumeText,
    jobTitle,
    companyName,
    jobDescription,
  );
  const result = await generateObject({
    model: openai('gpt-4o'),
    schema: classicCVTemplateSchema,
    messages: [
      {
        role: 'user',
        content: [{ type: 'text', text: PROMPT }],
      },
    ],
  });

  return { type: 'success', enhancedCv: result.object };
};
