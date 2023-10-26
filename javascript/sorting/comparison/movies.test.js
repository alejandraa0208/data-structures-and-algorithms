const { Movies } = require("./movies");
const { sortYear, sortTitle, compareByYear, compareByTitle } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const sortedMovies = sortYear(Movies);
    const years = sortedMovies.map((movie) => movie.year);
    expect(years).toEqual([1984, 1986, 1988, 1994, 2000, 2002, 2007, 2007, 2008, 2011]);
  });

  it("can sort movies by title", () => {
    const sortedMovies = sortTitle(Movies);
    const titles = sortedMovies.map((movie) => movie.title);
    expect(titles).toEqual([
      "Beetlejuice",
      "City of God",
      "Crocodile Dundee",
      "Memento",
      "Ratatouille",
      "Stardust",
      "The Cotton Club",
      "The Intouchables",
      "The Shawshank Redemption",
      "Valkyrie",
    ]);
  });

  it("compares movies by year correctly", () => {
    const movie1 = { year: 2000 };
    const movie2 = { year: 1990 };
    expect(compareByYear(movie1, movie2)).toBeGreaterThan(0);
    expect(compareByYear(movie2, movie1)).toBeLessThan(0);
    expect(compareByYear(movie1, movie1)).toBe(0);
  });

  it("compares movies by title correctly", () => {
    const movie1 = { title: "City of God" };
    const movie2 = { title: "The Shawshank Redemption" };
    expect(compareByTitle(movie1, movie2)).toBeLessThan(0);
    expect(compareByTitle(movie2, movie1)).toBeGreaterThan(0);
    expect(compareByTitle(movie1, movie1)).toBe(0);
  });
});

