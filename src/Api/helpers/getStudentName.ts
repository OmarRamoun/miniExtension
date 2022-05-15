import { studentsTable } from '../airtable';

/**
 * @param {string} studentCode: student's code
 * @returns {Promise<string>}: return the student name
 * @description This function returns a student's name based on student's code throught the airtable API
 * @example
 * const studentCode = 'rec2';
 * const studentsName = await getStudentsNames(studentCode);
 * console.log(studentsName);
 * // 'student2'
 */
export default async (studentCode: string)
  : Promise<string> => {
  const findStudentName = await studentsTable.find(studentCode);
  const literalStudentName = findStudentName.get('Name') as string;
  return literalStudentName;
};
