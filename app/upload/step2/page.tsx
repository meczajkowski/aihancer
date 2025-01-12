'use client';

import { enhance } from '@/app/actions/enhanceCV';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { redirect, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

const Step2 = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isPending, startTransition] = useTransition();

  const { uploadFormData, setUploadFormData } = useUploadFormData();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const jobTitle = formData.get('jobTitle') as string;
      const companyName = formData.get('companyName') as string;
      const jobDescription = formData.get('jobDescription') as string;
      const resumeText = uploadFormData.extractedText as string;

      const enhancedCv = await enhance(
        resumeText,
        jobTitle,
        companyName,
        jobDescription,
      );
      console.log(enhancedCv.enhancedCv);

      setUploadFormData({
        jobTitle,
        companyName,
        jobDescription,
        enhancedCv: enhancedCv.enhancedCv,
        completedSteps: [1, 2],
      });
      router.push('/upload/step3');
    });
  };

  if (!uploadFormData.completedSteps.includes(1))
    return redirect('/upload/step1');
  return (
    <form action={handleSubmit} className="w-full max-w-[606px] space-y-4">
      <div>
        <label
          htmlFor="jobTitle"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Job title
        </label>
        <Input
          id="jobTitle"
          name="jobTitle"
          placeholder="Position you apply for. Eg. Senior product designer."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
          disabled={isPending}
        />
      </div>

      <div>
        <label
          htmlFor="companyName"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Company name
        </label>
        <Input
          id="companyName"
          name="companyName"
          placeholder="Name of the company you apply to."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
          disabled={isPending}
        />
      </div>

      <div>
        <label
          htmlFor="jobDescription"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Job description
        </label>
        <Textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Paste the text of job offer description."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
          disabled={isPending}
        />
      </div>

      <Button
        disabled={isPending || !jobTitle || !jobDescription || !companyName}
        type="submit"
        className="w-full"
      >
        {!isPending ? 'Start enhancing my resume' : 'Loading...'}
      </Button>
    </form>
  );
};

export default Step2;
