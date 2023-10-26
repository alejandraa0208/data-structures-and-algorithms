// sort.js

function sortYear(movies) {
  return movies.sort(compareByYear);
}

function sortTitle(movies) {
  return movies.sort(compareByTitle);
}

function compareByYear(a, b) {
  return a.year - b.year;
}

function compareByTitle(a, b) {
  const titleA = a.title.replace(/^The /, '');
  const titleB = b.title.replace(/^The /, '');
  return titleA.localeCompare(titleB);
}

module.exports = {
  sortYear,
  sortTitle,
  compareByYear,
  compareByTitle, // Make sure to export this function
};
