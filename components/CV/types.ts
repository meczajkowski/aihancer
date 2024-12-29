export type ExperienceType = {
  companyName: string;
  industry: string;
  speciality: string;
  positionName: string;
  description: string;
  date: string;
};
export type CvDataType = {
  contact: string[];
  findMe: string[];
  skills: string[];
  technologies: string[];
  courses: string[];
  disclaimer: {
    companyName: string;
    referenceNumber: string;
  };
  aboutMe: string;
  experience: ExperienceType[];
  education: {
    schoolName: string;
    studyName: string;
    year: string;
  }[];
};
