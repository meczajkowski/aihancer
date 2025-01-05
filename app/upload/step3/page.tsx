'use client';
// import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { CV } from '@/components/CV/CV';
import { PDFDocument } from '@/components/CV/CvPdf';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Link from 'next/link';
import { useState } from 'react';
import { mockedCV as enhancedCv } from './mockedCV';

const Step3 = () => {
  // const { uploadFormData } = useUploadFormData();
  // const { enhancedCv } = uploadFormData;
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  return (
    <>
      <div>
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* <Logo /> */}
            {/* <div className="flex space-x-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step === 3 ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-300'}`}
                >
                  {step}
                </div>
                {step < 3 && <div className="w-8 h-0.5 bg-gray-300"></div>}
              </div>
            ))}
          </div> */}
            {/* <Stepper /> */}
          </div>
          {/* <div className="flex space-x-2">
              <Button variant="outline">
                <Link to="/upload/step1">Adjust to next offer</Link>
              </Button>
              <Button onClick={downloadCV}>Download CV</Button>
            </div> */}
        </header>

        {/* <main className="grid md:grid-cols-2 gap-8 mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">Before</h2>
              <CV data={enhancedCv} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">After</h2>
              <div
                id="cv-to-download"
                className="w-[210mm] h-[296mm] box-border"
              >
                <CV data={enhancedCv} />
              </div>
            </div>
          </main> */}
        <div className="pb-8">
          <div className="mb-4 flex items-start justify-between">
            <h2 className="mb-4 text-xl font-semibold">
              Your brand new shiny resume
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline">
                <Link href="/upload/step1">Adjust to next offer</Link>
              </Button>
              <Button onClick={() => setShowPdfPreview(!showPdfPreview)}>
                {showPdfPreview ? 'Hide PDF Preview' : 'Show PDF Preview'}
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

          <div className="flex gap-8">
            <div className="box-border h-[296mm] w-[210mm] border border-gray-200">
              <CV data={enhancedCv} />
            </div>

            {!showPdfPreview && (
              <div className="h-[296mm] w-[210mm]">
                <PDFViewer width="100%" height="100%" showToolbar={false}>
                  <PDFDocument data={enhancedCv} />
                </PDFViewer>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
