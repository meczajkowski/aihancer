import { ReactNode } from 'react';

type Props = {
  name: string;
  data?: string[];
  disclaimer?: {
    companyName: string;
    referenceNumber: string;
  };
  children?: ReactNode;
};

const Section = ({ name, data = [], disclaimer, children }: Props) => {
  return (
    <div>
      <h3 className="py-2 text-sm font-bold uppercase">{name}</h3>
      {children ? (
        children
      ) : (
        <ul
          className={`list-none text-xs ${name === 'portfolio' || name === 'kontakt' ? 'text-black' : 'text-slate-700'} `}
        >
          {disclaimer
            ? `I hereby consent to my personal data being processed by ${disclaimer.companyName} for the purpose of considering my application for the vacancy advertised under reference number ${disclaimer.referenceNumber}`
            : data.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
        </ul>
      )}
    </div>
  );
};
export { Section };
