// Calendar data
export const _daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// export const _weekdayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const _weekdayLabels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export const _weekdayLength = 3;
export const _weekdayCasing = "title";
export const _monthLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const _monthLength = 0;
export const _monthCasing = "title";

// Helper function for label transformation
export const _transformLabel = (label, length, casing) => {
  label = length <= 0 ? label : label.substring(0, length);
  if (casing.toLowerCase() === "lower") return label.toLowerCase();
  if (casing.toLowerCase() === "upper") return label.toUpperCase();
  return label;
};

// Today's data
export const _today = new Date();
export const _todayComps = {
  year: _today.getFullYear(),
  month: _today.getMonth() + 1,
  day: _today.getDate()
};
