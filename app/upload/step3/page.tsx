'use client';
import { useUploadFormData } from '@/app/contexts/FormDataContext';

const Step3 = () => {
  const { uploadFormData } = useUploadFormData();
  console.log(uploadFormData);
  return (
    <pre className="w-full text-wrap">
      {JSON.stringify(uploadFormData, null, 2)}
    </pre>
  );
};

export default Step3;
