'use server';

import { stepOneSchema } from '@/schemas/stepOneSchema';
import { redirect } from 'next/navigation';
import { FormErrors } from '../types';

export const stepOneFormAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepOneSchema.safeParse(data);

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});
    return errors;
  } else {
    try {
      // const file = formData.get('cvFile') as File;
      // const extractedText = await extractTextFromPDF(file);
      // const anonToken = await getAnonToken();
      // console.log(file, extractedText, anonToken);
      // await createCV({ extractedText, anonToken });
    } catch (err) {
      if (err) {
        const error = err.toString();
        return { cvFile: error ? error : 'Something went wrong' };
      }
    }

    return redirect('/upload/step2');
  }
};
