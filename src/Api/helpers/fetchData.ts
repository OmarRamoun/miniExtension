import { RootStateValue } from '../../Types/index';
import {
  getStudentData,
  getClassesData,
  getStudentsNames,
} from '../index';

// add documentation for the fetchData function
/**
 * @param {string} inputField: the name of the sutdent as entered by ther user in the login form
 * @returns {Promise<RootStateValue | null>}: returns the student data (student name, student classes Names and the partenrs for each class) if the student exists, otherwise returns null
 * @description Fetches student data from the airtable API
 *
 * @example
 * fetchData('John');
 * // returns {
 * //   studentName: "John";
 * //     studentClasses: [{
 * //       className: "CS101";
 * //       classPartners: ['Jane', 'Bob'];
 * //     }];
 * // }
 */
export default async (
  inputField: string,
): Promise<RootStateValue | null> => {
  const [studentName, classesCodes] = await getStudentData(inputField);
  if (!studentName) return null;

  const classesData = await getClassesData(classesCodes);
  const studentClassesData = classesData.map(
    async ({ className, studentsCodes }) => {
      const partners = await getStudentsNames(studentsCodes);
      const classPartners = partners.filter(
        (partner) => partner !== studentName,
      );
      return { className, classPartners };
    },
  );
  const studentClasses = await Promise.all(studentClassesData);
  return { studentName, studentClasses };
};
