import { Section } from './section';

type Props = {
  contact: string[];
  findMe: string[];
  skills: string[];
  technologies: string[];
  courses: string[];
  disclaimer: {
    companyName: string;
    referenceNumber: string;
  };
};

const LeftSideSections = ({
  contact,
  findMe,
  skills,
  technologies,
  courses,
  disclaimer,
}: Props) => {
  return (
    <>
      <Section data={contact} name="contact" />
      <Section data={findMe} name="find me" />
      <Section data={skills} name="personal skills" />
      <Section data={technologies} name="technologies" />
      {courses.length > 0 && (
        <Section data={courses} name="workshops & courses" />
      )}
      <Section disclaimer={disclaimer} name="disclaimer" />
    </>
  );
};

export { LeftSideSections };
