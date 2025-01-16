'use client';

import { stepOneFormAction } from '@/app/actions/stepOneFormAction';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { FormErrors } from '@/app/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { stepOneSchema } from '@/schemas/stepOneSchema';
import { useActionState, useEffect, useState } from 'react';

const initialFormState: FormErrors = {};

const Step1 = () => {
  const { uploadFormData, setUploadFormData } = useUploadFormData();
  const [error, setError] = useState<string>('');
  const [serverErrors, formAction, isPending] = useActionState(
    stepOneFormAction,
    initialFormState,
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const uploadedFile = e.target.files?.[0] || null;

    if (!uploadedFile) {
      setError('');
      setUploadFormData({ file: null });
      return;
    }

    const validated = stepOneSchema.safeParse({ cvFile: uploadedFile });
    if (!validated.success) {
      const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
        acc[issue.path[0]] = issue.message;
        return acc;
      }, {});
      setError(errors.cvFile || 'Something went wrong');
    }
    setUploadFormData({ file: uploadedFile });
  };

  // Reset form data on mount because of uncontrolled input
  useEffect(() => {
    setUploadFormData({ file: null });
  }, []);

  return (
    <form action={formAction} className="w-full max-w-[606px]">
      <div className="my-5 rounded-lg border bg-white p-6 shadow-[0_0_100px_100px_rgba(255,255,255,1)]">
        <h3>Upload your resume</h3>
        <span className="text-xs">Accepted types: PDF, docx</span>
        <div
          className={cn(
            'relative mt-4 w-full rounded-[10px] border border-dashed py-9 text-center',
            (serverErrors?.cvFile || error) && 'border-red-200',
          )}
        >
          {uploadFormData.file?.name && (!serverErrors?.cvFile || !error)
            ? uploadFormData.file.name
            : 'Drop file'}
          {(serverErrors?.cvFile || error) && (
            <span className="absolute bottom-2 block w-full text-xs text-red-500">
              {serverErrors?.cvFile || error}
            </span>
          )}
        </div>
        <span className="mt-4 block w-full text-center text-xs">or</span>
        <div className="flex justify-center">
          <input
            type="file"
            id="fileUpload"
            name="cvFile"
            className="hidden"
            onChange={handleFileChange}
            required
            aria-label="Upload your resume"
          />
          <Button
            disabled={isPending}
            asChild
            variant={'outline'}
            className="mt-4 h-auto cursor-pointer bg-transparent"
          >
            <label htmlFor="fileUpload" className="h-full">
              Choose file
            </label>
          </Button>
        </div>
      </div>
      <Button
        disabled={
          !uploadFormData.file || isPending || !!serverErrors?.cvFile || !!error
        }
        type="submit"
        className="w-full"
      >
        {!isPending ? 'Go to adding a job' : 'Loading...'}
      </Button>
    </form>
  );
};

export default Step1;
