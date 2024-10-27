import Logo from '@/components/Logo';
import Stepper from '@/components/Stepper';
import Link from 'next/link';

const uploadDayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="px-16 py-11">
        <nav>
          <Link href="/">
            <Logo />
          </Link>
          <Stepper />
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default uploadDayout;
