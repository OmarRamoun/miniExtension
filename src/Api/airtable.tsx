import Airtable from 'airtable';

export const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID as string);
export const classesTable = base(process.env.REACT_APP_AIRTABLE_CLASSES_TABLE as string);
export const studentsTable = base(process.env.REACT_APP_AIRTABLE_STUDENTS_TABLE as string);
