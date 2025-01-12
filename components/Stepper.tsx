'use client';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const steps = [
  { label: 'Add your resume' },
  { label: 'Add job offer' },
  { label: 'Enhance resume' },
];

export default function Stepper() {
  const { uploadFormData } = useUploadFormData();
  const pathname = usePathname();
  const currentStep = pathname.split('/').pop();

  const handleStepClick = (e: React.MouseEvent, stepNumber: number) => {
    if (stepNumber === 1) return;
    if (!uploadFormData.completedSteps.includes(stepNumber - 1)) {
      e.preventDefault();
      alert('Please complete the previous step first');
    }
  };

  return (
    <div className="relative mx-auto mb-8 flex w-full max-w-xs items-center justify-center md:max-w-md">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Link
            href={`/upload/step${index + 1}`}
            onClick={(e) => handleStepClick(e, index + 1)}
          >
            <div className="relative flex cursor-pointer flex-col items-center">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border md:h-9 md:w-9 ${
                  `step${index + 1}` === currentStep
                    ? 'border-gray-800'
                    : 'border-gray-300'
                } bg-transparent`}
              >
                <span
                  className={`text-xs font-medium md:text-lg ${
                    `step${index + 1}` === currentStep
                      ? 'text-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <span
                className={`mt-2 max-w-14 text-center text-xs md:max-w-none md:text-sm ${
                  `step${index + 1}` === currentStep
                    ? 'font-medium text-gray-800'
                    : 'text-gray-400'
                }`}
              >
                {step.label}
              </span>
            </div>
          </Link>

          {index < steps.length - 1 && (
            <div className="relative bottom-5 mx-2 h-px flex-1 bg-gray-300 md:bottom-3"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
