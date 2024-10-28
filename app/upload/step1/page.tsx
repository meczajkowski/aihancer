'use client';

import { extractTextFromPDF } from '@/app/actions/extractTextFromFile';
import { Button } from '@/components/ui/button';
import { cn, validateFile } from '@/lib/utils';
import { useState, useTransition } from 'react';

const Step1 = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;

    if (!uploadedFile) {
      setError('File is required.');
      return;
    }

    const validationError = validateFile(uploadedFile);
    if (validationError) setError(validationError);

    setError(null);
    setFile(uploadedFile);
  };

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      await extractTextFromPDF(formData);
    });
  };

  return (
    <form action={handleSubmit}>
      <div className="my-5 w-[606px] rounded-lg border bg-white p-6 shadow-[0_0_100px_100px_rgba(255,255,255,1)]">
        <h3>Upload your resume</h3>
        <span className="text-xs">Accepted types: PDF, docx</span>
        <div
          className={cn(
            'relative mt-4 w-full rounded-[10px] border border-dashed py-9 text-center',
            error && 'border-red-200',
          )}
        >
          {file?.name && !error ? file.name : 'Drop file'}
          {error && (
            <span className="absolute bottom-2 block w-full text-xs text-red-500">
              {error}
            </span>
          )}
        </div>
        <span className="mt-4 block w-full text-center text-xs">or</span>
        <div className="flex justify-center">
          <input
            type="file"
            id="file-upload"
            name="cv-file"
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
            <label htmlFor="file-upload" className="h-full">
              Choose file
            </label>
          </Button>
        </div>
      </div>
      <Button disabled={!file || isPending} type="submit" className="w-full">
        {!isPending ? 'Go to adding a job' : 'Loading...'}
      </Button>
    </form>
  );
};

export default Step1;
