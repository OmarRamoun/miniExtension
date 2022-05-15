import { IClassData } from '../../Types';
import { getClassData } from '../index';

/**
 * @param {string[]} classesCodes: an array of classes codes
 * @returns {Promise<IClassData[]>}: returns the classes data (class names and students codes for students attending that class)
 * @description This function returns an array of objects containing the class name and the students codes of the class
 * @example
 * const classesData = await getClassesData(['rec1', 'rec2']);
 * console.log(classesData);
 * // [
 * //   {
 * //     className: 'class1',
 * //     studentsCodes: ['student1', 'student2']
 * //   },
 * //   {
 * //     className: 'class2',
 * //     studentsCodes: ['student3', 'student4']
 * //   }
 * // ]
 */
export default async (classesCodes: string[]): Promise<IClassData[]> => {
  const classesData = classesCodes.map(async (code) => {
    const { className, studentsCodes } = await getClassData(code);
    return { className, studentsCodes };
  });
  const returnedClassesData = await Promise.all(classesData);
  return returnedClassesData;
};
