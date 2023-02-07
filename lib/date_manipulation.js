import moment from 'moment';

const weeksInCourse = ({ endDate, startDate, weeksOff }) => {
  const dateToCheck = moment(startDate);
  endDate = moment(endDate);
  let weeksInCourse = [];
  let weekNum = 1;
  weeksOff = weeksOff.map(week => moment(week));

  while (dateToCheck < endDate) {
    if (weeksOff.length) {
      const durationInWeeks = findDurationInWeeks(dateToCheck, weeksOff[0])
      if (durationInWeeks >= 1) {
        weeksInCourse.push(weekFormat(weekNum, dateToCheck));
        weekNum++;
      } else {
        weeksOff.shift()
      }
    } else {
      weeksInCourse.push(weekFormat(weekNum, dateToCheck));
      weekNum++;
    }
    dateToCheck.add(1, 'week');
  }

  return weeksInCourse;
};

const findDurationInWeeks = (startDate, endDate) => {
  const dateDiff = endDate.diff(startDate);
  const duration = moment.duration(dateDiff);
  return duration.asWeeks();
}

const weekFormat = (weekNum, weekStartDate) => {
  return `wk${weekNum.toString().padStart(2, 0)} - starts ${weekStartDate.format('Do MMM')}`
}

export {
  weeksInCourse
};
