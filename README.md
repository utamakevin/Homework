# Student Homework Folder Generator
Generates the homework folders for students to use

## How to use
1. Clone down the repo.
2. Update `course_config.json` with course details.
3. Create `student_names.txt` file in the root folder with all the students' names.
4. Run `yarn start`.

## Instructions for instructors to help students with setting up homework repo on their computer
1. Navigate to the Github Enterprise organisation account and allow permission for users to fork private repositories.
2. Navigate to the homework repo on Github Enterprise.
3. Get everyone to click Fork at the top-right to fork the repo.
4. Get everyone to clone down the forked version of the repo to their `sei` folder.
5. Explain to them that they will put their homework inside their named folder, in the correct week folder (dates are on it), and in the correct day folder for that task.
6. Get them to put a homework task in the correct name/week/day folder as practice.
7. Ask them to `git add -A`, `git commit -m 'wednesday homework'`, `git push origin main`
8. Ask them to make a pull request, and check that you've received all pull requests from everyone for the homework repo.
9. Remind them that the steps for adding future homework are in the README.md file in the repository so they can check that each night before pushing homework.
