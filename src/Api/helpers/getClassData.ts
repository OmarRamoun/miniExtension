import { classesTable } from '../airtable';
import { IClassData } from '../../Types';

/**
 * @param {string} classCode: the class code
 * @returns {Promise<IClassData>}: returns the class data (class name and students codes attending that class)
 * @description This function returns an object containing the class name and the students codes of the class
 *
 * @example
 * const classesData = await getClassData('rec');
 * console.log(classesData);
 * // {
 * //   className: 'class1',
 * //   studentsCodes: ['student1', 'student2']
 * // }
 */
export default async (classCode: string): Promise<IClassData> => {
  const record = await classesTable.find(classCode);
  const studentsCodes = record.get('Students') as string[];
  const className = record.get('Name') as string;
  return { className, studentsCodes };
};
