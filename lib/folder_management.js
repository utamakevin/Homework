import fs from 'fs/promises';

const resetHomeworkFolder = homeworkFolderName => {
  return fs
    .rm(homeworkFolderName, { recursive: true })
    .then(() => fs.mkdir(homeworkFolderName))
    .catch(() => fs.mkdir(homeworkFolderName));
};

const createStudentFolders = (homeworkFolderName, studentNames, weeks, daysOfWeek) => {
  studentNames.forEach(studentName => {
    const studentPath = `${homeworkFolderName}/${studentName}`
    fs.mkdir(studentPath)
      .then(() => createWeekFolders(studentPath, weeks, daysOfWeek));
  });
};

const createWeekFolders = (studentPath, weeks, daysOfWeek) => {
  return weeks.forEach(week => {
    const weekPath = `${studentPath}/${week}`
    fs.mkdir(weekPath)
      .then(() => createDaysOfWeekFolders(weekPath, daysOfWeek));
  });
};

const createDaysOfWeekFolders = (weekPath, daysOfWeek) => {
  return daysOfWeek.forEach((day, i) => {
    const dayPath = `${weekPath}/${i + 1}-${day}`
    fs.mkdir(dayPath)
      .then(() => fs.writeFile(`${dayPath}/.keep`, ''));
  });
};

export {
  resetHomeworkFolder,
  createStudentFolders
};
