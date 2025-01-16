'use client';

import { CVData } from '@/schemas/classicCvTemplateSchema';
import { createContext, ReactNode, useContext, useState } from 'react';

interface UploadFormData {
  file: File | null;
  extractedText: string | null;
  anonToken: string | null;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  enhancedCv: CVData | null;
}

interface UploadFormDataContextType {
  uploadFormData: UploadFormData;
  setUploadFormData: (data: Partial<UploadFormData>) => void;
}

const UploadFormDataContext = createContext<
  UploadFormDataContextType | undefined
>(undefined);

export const UploadFormDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [uploadFormData, setUploadFormDataState] = useState<UploadFormData>({
    file: null,
    extractedText: null,
    anonToken: null,
    jobTitle: '',
    companyName: '',
    jobDescription: '',
    enhancedCv: null,
  });

  const setUploadFormData = (data: Partial<UploadFormData>) => {
    setUploadFormDataState((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <UploadFormDataContext.Provider
      value={{ uploadFormData, setUploadFormData }}
    >
      {children}
    </UploadFormDataContext.Provider>
  );
};

export const useUploadFormData = () => {
  const context = useContext(UploadFormDataContext);
  if (!context) {
    throw new Error('useUploadFormData must be used within a FormDataProvider');
  }
  return context;
};
