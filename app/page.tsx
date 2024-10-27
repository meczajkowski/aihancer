import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import hero from '../assets/hero.png';

export default function Home() {
  return (
    <div className="mx-auto my-24 h-screen max-w-screen-lg font-[family-name:var(--font-geist-sans)]">
      {/* header */}
      <header className="z-10 mb-20 flex w-full items-center justify-between p-5">
        <Logo className="z-10" />
        <div className="space-x-3">
          <Button disabled variant="outline" className="bg-white">
            Login
          </Button>
          <Button
            disabled
            variant="outline"
            className="border-slate-400 bg-white"
          >
            Register
          </Button>
        </div>
      </header>

      <div className="flex justify-between">
        {/* left */}
        <div>
          <div className="w-[606px] rounded-lg bg-white p-5 shadow-[0_0_100px_100px_rgba(255,255,255,1)]">
            <h1>
              Improve your resume to
              <span className="block">fit the offer</span>
            </h1>
            <p>
              Upload your resume and job offer to see how we improved it.
              <span className="block">
                Boost your chances on getting a job.
              </span>
            </p>
            <div className="my-8 flex items-center justify-between gap-5 text-xs font-medium">
              <span>Check the improvements</span>
              <span className="h-[15px] w-[1px] bg-black bg-opacity-20"></span>
              <span>Scan for ATS</span>
              <span className="h-[15px] w-[1px] bg-black bg-opacity-20"></span>
              <span>Get personalized design</span>
              <span className="h-[15px] w-[1px] bg-black bg-opacity-20"></span>
              <span>Simple editing</span>
            </div>

            <Button>
              <Link href="/upload/step1">Improve my resume</Link>
            </Button>
          </div>
        </div>
        {/* right */}
        <Image src={hero} alt="Image of CV" />
      </div>
    </div>
  );
}
