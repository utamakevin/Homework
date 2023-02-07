import fs from 'fs/promises';

const importStudentNames = (studentNamesFile) => {
  return fs
    .readFile(studentNamesFile, { encoding: 'utf8' })
    .then(data => data.split('\n'))
    .then(names => names.map(name => {
      return name
        .toLowerCase()
        .replace(/\t/, ' ');
    }));
};

export {
  importStudentNames
};
