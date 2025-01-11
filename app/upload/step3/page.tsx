'use client';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { PDFDocument } from '@/components/CV/CvPdf';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Link from 'next/link';

const Step3 = () => {
  const { uploadFormData } = useUploadFormData();
  const { enhancedCv } = uploadFormData;

  if (!enhancedCv)
    return (
      <main>
        <h2 className="mb-4 text-xl font-semibold">
          Please go back and upload your CV
        </h2>
      </main>
    );

  return (
    <main className="pb-8">
      <div className="mb-4 flex items-start justify-between">
        <h2 className="mb-4 text-xl font-semibold">
          Your brand new shiny resume
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Link href="/upload/step1">Adjust to next offer</Link>
          </Button>

          <PDFDownloadLink
            document={<PDFDocument data={enhancedCv} />}
            fileName={`${enhancedCv.name.replace(/\s+/g, '_')}_CV.pdf`}
          >
            {/* @ts-expect-error - ddd */}
            {({ loading }) => (
              <Button disabled={loading}>
                {loading ? 'Preparing PDF...' : 'Download PDF'}
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      <div className="h-[296mm] w-[210mm]">
        <PDFViewer width="100%" height="100%" showToolbar={false}>
          <PDFDocument data={enhancedCv} />
        </PDFViewer>
      </div>
    </main>
  );
};

export default Step3;
