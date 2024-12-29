'use client';
import { useUploadFormData } from '@/app/contexts/FormDataContext';
import { CV } from '@/components/CV/CV';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Step3 = () => {
  const { uploadFormData } = useUploadFormData();
  console.log(uploadFormData);

  const { enhancedCv } = uploadFormData;

  const downloadCV = async () => {
    // const element = document.getElementById('cv-to-download');
    // if (element) {
    //   // Capture the content of the CV
    //   const canvas = await html2canvas(element, { scale: 1.5 }); // Use scale 1 for normal size
    //   const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait, 'mm' for mm, 'a4' for A4 size
    //   const imgData = canvas.toDataURL('image/png');
    //   const imgWidth = pdf.internal.pageSize.getWidth(); // A4 width in mm
    //   const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
    //   const pageHeight = pdf.internal.pageSize.getHeight(); // A4 height in mm
    //   let heightLeft = imgHeight;
    //   let position = 0;
    //   // Add the first image to the PDF
    //   pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    //   // If the image height exceeds one page, add more pages
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     pdf.addPage();
    //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //     heightLeft -= pageHeight;
    //   }
    //   // Save the PDF with a specified filename
    //   pdf.save('cv.pdf');
    // }
  };

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
              <Button disabled onClick={downloadCV}>
                Download CV
              </Button>
            </div>
          </div>

          <div id="cv-to-download" className="box-border h-[296mm] w-[210mm]">
            {enhancedCv ? <CV data={enhancedCv} /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
