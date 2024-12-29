import { CVData } from '@/schemas/classicCvTemplateSchema';
import { Experience } from './experience';
import { LeftSideSections } from './leftSideSections';
import { Section } from './section';

type CVDisplayProps = {
  data: CVData;
  id?: string;
};

export const CV: React.FC<CVDisplayProps> = ({ data }) => {
  return (
    <div className="box-border flex h-full w-full bg-white pt-4">
      {/* left side */}
      <div className="flex h-full w-2/5 flex-col justify-around px-8">
        <h1 className="pb-6 text-3xl font-bold">{data.name}</h1>
        <LeftSideSections
          contact={data.contact}
          findMe={data.findMe}
          skills={data.skills}
          technologies={data.technologies}
          courses={data.courses}
          disclaimer={data.disclaimer}
        />
      </div>
      {/* right side */}
      <div className="flex h-full w-full flex-col justify-around px-8">
        <h2 className="pb-6 text-slate-600">{data.positionTitle}</h2>
        <Section name="About me" data={[data.aboutMe]} />
        <Experience experience={data.experience} />
        {data.education && (
          <Section name="education">
            {data.education.map((school) => {
              return (
                <>
                  <p className="text-sm text-slate-600">{school?.schoolName}</p>
                  <p className="flex justify-between">
                    {school?.studyName}
                    <span className="text-sm text-slate-600">
                      {school?.year}
                    </span>
                  </p>
                </>
              );
            })}
          </Section>
        )}
      </div>
    </div>
  );
};
