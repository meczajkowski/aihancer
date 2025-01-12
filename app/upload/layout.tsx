import Logo from '@/components/Logo';
import Stepper from '@/components/Stepper';
import Link from 'next/link';
import { UploadFormDataProvider } from '../contexts/FormDataContext';

const uploadDayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UploadFormDataProvider>
      <div className="mx-auto min-h-screen max-w-screen-lg p-5">
        <header className="pt-3 sm:px-16 md:pt-11">
          <nav className="flex flex-col gap-9">
            <div>
              <Link href="/" className="inline-block">
                <Logo />
              </Link>
            </div>
            <Stepper />
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
      </div>
    </UploadFormDataProvider>
  );
};

export default uploadDayout;
