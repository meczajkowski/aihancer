'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const steps = [
  { label: 'Add your resume' },
  { label: 'Add job offer' },
  { label: 'Enhance resume' },
];

export default function Stepper() {
  const pathname = usePathname();
  console.log(pathname);
  const currentStep = pathname.split('/').pop(); // e.g., "step1", "step2"

  return (
    <div className="mx-auto mb-8 flex w-full max-w-md items-center justify-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <Link href={`/upload/step${index + 1}`}>
            <div className="relative flex cursor-pointer flex-col items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                  `step${index + 1}` === currentStep
                    ? 'border-gray-800'
                    : 'border-gray-300'
                } bg-transparent`}
              >
                <span
                  className={`text-sm font-medium ${
                    `step${index + 1}` === currentStep
                      ? 'text-gray-800'
                      : 'text-gray-400'
                  }`}
                >
                  {index + 1}
                </span>
              </div>
              <span
                className={`mt-2 text-xs ${
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
            <div
              className="mx-2 h-px flex-1 bg-gray-300"
              style={{ marginTop: '1rem' }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
