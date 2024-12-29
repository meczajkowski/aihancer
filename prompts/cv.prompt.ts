export const cvEnhancePrompt = (
  resumeText: string,
  jobTitle: string,
  companyName: string,
  jobDescription: string,
) => `
  You are an expert CV writer. Your task is to tailor the following CV to a specific job application.

  The job position is "${jobTitle}" at "${companyName}". Focus on matching the CV to the following job description: ${jobDescription}.

  Your goal is to ensure the CV passes the ATS (Applicant Tracking System) by incorporating relevant keywords from the job description. You may update the CV in the following ways:
  
  1. Adjust skills, technologies, and other sections to highlight relevant qualifications.
  2. Modify the descriptions of work experience to better align with the required qualifications.
  3. Ensure the CV showcases the candidate's fit for the position of "${jobTitle}" at "${companyName}".
  
  Important:
  - **Do not hallucinate** or invent any facts.
  - Keep all factual information like experience duration, education length, and other verifiable details **accurate and unchanged**.
  - Focus only on restructuring, optimizing, and enhancing the presentation of existing information to better align with the job description.

  Provide a professional and enhanced version of the CV, preserving the original language and structure as much as possible.

  Original CV:
  ${resumeText}
`;
