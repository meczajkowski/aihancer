'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useTransition } from 'react';

const Step2 = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      console.log(formData);
    });
  };

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
