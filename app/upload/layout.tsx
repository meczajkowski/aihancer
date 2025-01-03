import Logo from '@/components/Logo';
import Stepper from '@/components/Stepper';
import Link from 'next/link';
import { UploadFormDataProvider } from '../contexts/FormDataContext';

const uploadDayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <UploadFormDataProvider>
      <div className="mx-auto min-h-screen max-w-screen-lg p-5">
        <header className="px-16 pt-11">
          <nav>
            <Link href="/">
              <Logo />
            </Link>
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
