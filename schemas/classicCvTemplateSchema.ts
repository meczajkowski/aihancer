import { z } from 'zod';

// Schema for ExperienceType
const ExperienceSchema = z.object({
  companyName: z.string().describe('Company name'),
  industry: z.string().describe('Industry of the company'),
  speciality: z.string().describe('Speciality of the company'),
  positionName: z.string().min(1).describe('Position name is required'),
  description: z.string().describe('Description is required'),
  date: z.string().describe('Date is required'),
});

// Schema for Education
const EducationSchema = z
  .object({
    schoolName: z
      .string()
      .optional()
      .describe('do not fill if not provided in original cv in prompt.'),
    studyName: z
      .string()
      .optional()
      .describe('do not fill if not provided in original cv in prompt.'),
    degree: z
      .string()
      .optional()
      .describe('do not fill if not provided in original cv in prompt.'),
    year: z
      .string()
      .optional()
      .describe('do not fill if not provided in original cv in prompt.'),
  })
  .optional()
  .describe('do not fill if not provided in original cv in prompt.');

// Main schema for CvDataType
export const classicCVTemplateSchema = z.object({
  name: z.string().min(1).describe('Name item cannot be empty. your name'),
  positionTitle: z
    .string()
    .min(1)
    .describe(
      "Position item cannot be empty. Name of the position yo apply for. generic. do not fill the same if it is specified too much. for example if 'Software Engineer (Node.js) - AI Solutions' return 'Software Engineer'",
    ),
  contact: z.array(
    z
      .string()
      .min(1)
      .describe(
        'Contact item cannot be empty. Email address, phone number, location, languages.',
      ),
  ),
  findMe: z.array(
    z
      .string()
      .min(1)
      .describe(
        'Find me item cannot be empty. Links - ie. linkedin, github, portfolio.',
      ),
  ),
  skills: z
    .array(
      z
        .string()
        .min(1)
        .describe(
          'Skill cannot be empty. personal skills. Soft skills. not technologies',
        ),
    )
    .max(6)
    .describe('Max 6 skills. If more, list the most important.'),
  technologies: z
    .array(
      z
        .string()
        .min(1)
        .describe(
          'Technology cannot be empty. technologies you use. hard skills. ie. react, next.js, MVC',
        ),
    )
    .max(15)
    .describe('Max 15 technologies. If more, list the most important.'),
  courses: z.array(
    z
      .string()
      .describe(
        'List of courses. If provided in cv in prompt. do not fill if not provided.',
      ),
  ),
  disclaimer: z.object({
    companyName: z
      .string()
      .min(1)
      .describe('Company name is required in disclaimer'),
    referenceNumber: z
      .string()
      .min(1)
      .describe('Reference number is required in disclaimer'),
  }),
  aboutMe: z
    .string()
    .min(1)
    .describe(
      'About me section is required. Few sentences that highlight you as a person.',
    ),
  experience: z.array(ExperienceSchema),
  education: z
    .array(EducationSchema)
    .optional()
    .describe('do not fill if not provided in original cv in prompt.'),
});

// Export the schemas
export type CVData = z.infer<typeof classicCVTemplateSchema>;
