'use client';

import { enhance } from '@/app/actions/enhanceCV';
import { getAnonToken } from '@/app/actions/getAnonToken';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getLastCVbyAnonToken } from '@/lib/prisma/CV.service';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const Step2 = () => {
  const [isPending, startTransition] = useTransition();

  const { uploadFormData, setUploadFormData } = useUploadFormData();
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const jobTitle = formData.get('jobTitle') as string;
      const companyName = formData.get('companyName') as string;
      const jobDescription = formData.get('jobDescription') as string;
      const anonToken = await getAnonToken();
      const resumeData = await getLastCVbyAnonToken(anonToken);
      if (!resumeData) {
        alert('No resume data found. Please upload your resume first.');
        return;
      }
      const enhancedCv = await enhance(
        resumeData?.extractedText as string,
        jobTitle,
        companyName,
        jobDescription,
      );

      setUploadFormData({
        enhancedCv: enhancedCv.enhancedCv,
      });
    });

    router.push('/upload/step3');
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
          value={uploadFormData.jobTitle}
          onChange={(e) => setUploadFormData({ [e.target.id]: e.target.value })}
          required
          disabled={isPending}
          minLength={2}
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
          value={uploadFormData.companyName}
          onChange={(e) => setUploadFormData({ [e.target.id]: e.target.value })}
          required
          disabled={isPending}
          minLength={2}
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
          value={uploadFormData.jobDescription}
          onChange={(e) => setUploadFormData({ [e.target.id]: e.target.value })}
          required
          disabled={isPending}
          minLength={2}
        />
      </div>

      <Button
        disabled={
          isPending ||
          !uploadFormData.jobTitle ||
          !uploadFormData.jobDescription ||
          !uploadFormData.companyName
        }
        type="submit"
        className="w-full"
      >
        {!isPending ? 'Start enhancing my resume' : 'Loading...'}
      </Button>
    </form>
  );
};

export default Step2;
