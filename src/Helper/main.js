export const result = (students) => {
  return students.reduce(function (acc, curr) {
    acc[curr.cohort.cohortCode] = acc[curr.cohort.cohortCode] || [];
    acc[curr.cohort.cohortCode].push(curr);

    return acc;
  }, {});
};



