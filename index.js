import fs from 'fs/promises';

import { weeksInCourse } from './lib/date_manipulation.js';
import { resetHomeworkFolder, createStudentFolders } from './lib/folder_management.js';
import { importStudentNames } from './lib/import_students.js';

(async () => {
  // config -- course details
  let course = await fs.readFile('./course_config.json', { encoding: 'utf8' });
  course = JSON.parse(course)

  // config -- other
  const studentNamesFile = 'student_names.txt';
  const homeworkFolderName = 'sei_homework';

  resetHomeworkFolder(homeworkFolderName)
    .then(() => importStudentNames(studentNamesFile))
    .then(studentNames => {
      const weeks = weeksInCourse(course);
      createStudentFolders(homeworkFolderName, studentNames, weeks, course.daysOfWeek)
    })
    .then(() => {
      fs.copyFile(`extra_files_to_create/.gitignore`, `${homeworkFolderName}/.gitignore`);
      fs.copyFile(`extra_files_to_create/README.md`, `${homeworkFolderName}/README.md`);
    });
})();
