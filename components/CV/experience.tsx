import { ExperienceType } from './types';

const Experience = ({ experience }: { experience: ExperienceType[] }) => {
  return (
    <div className="my-8">
      <h3 className="py-2 text-sm font-bold uppercase">experience</h3>
      {experience.map((work, index) => {
        return (
          <div key={index} className="py-4">
            <p className="text-sm text-slate-600">
              <span className="italic">{work.companyName}</span>
            </p>
            <p className="flex w-full justify-between text-xl font-bold">
              {work.positionName}
              <span className="text-sm font-normal text-slate-600">
                {work.date}
              </span>
            </p>
            <p className="text-sm">{work.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export { Experience };
