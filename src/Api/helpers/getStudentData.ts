import { studentsTable } from '../airtable';

/**
 * @param {string} studentName: the name of the student given by user in the input field of the login form.
 * @returns {Promise<[string, string[]]>}: a promise with an array containing the name of the student (as returned by the API) and an array of the codes of the classes that the student is registered in.
 * @description Returns the name of the student alongside the codes of the classes he joined through the airtable API.
 * @example
 * const [studentName, classesCodes] = await getStudentData('Joe');
 * console.log(studentName, classesCodes);
 * // => 'Joe', ['rec', 'rec']
 */
export default async (studentName: string)
  : Promise<[string, string[]]> => {
  const records = await studentsTable.select({
    filterByFormula: `{Name} = '${studentName}'`,
  }).all();

  const record = records[0];
  const name = record.get('Name') as string;
  const classesCodes: string[] = record.get('Classes') as string[];
  return [name, classesCodes];
};
