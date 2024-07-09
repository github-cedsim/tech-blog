
module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    // Date methonds for the month, date, and year
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      // Add five years to the 'year' value to calculate the end date
      new Date(date).getFullYear()
    }`;
  },
};
