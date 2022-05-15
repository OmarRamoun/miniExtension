import { getStudentName } from '../index';

/**
 * @param {string[]} studentsCodes: an array of students codes
 * @returns {Promise<string[]>}: returns an array of students names
 * @description This function returns an array of the students names
 * @example
 * const students = ['rec1', 'rec2'];
 * const studentsNames = await getStudentsNames(students);
 * console.log(studentsNames);
 * // ['student1', 'student2']
 * @see {@link getStudentName}
 */
export default async (studentsCodes: string[])
  : Promise<string[]> => {
  const returnedClassPartners = studentsCodes.map(async (code: string) => {
    const student = await getStudentName(code);
    return student;
  });
  const partners = await Promise.all(returnedClassPartners);
  return partners;
};
