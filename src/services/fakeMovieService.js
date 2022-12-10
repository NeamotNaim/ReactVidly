import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "ltdfjsf",
    title: "Terminator",
    genre: { _id: "sflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "ltdfdsfjsf",
    title: "sdfTerminator",
    genre: { _id: "sdsfflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "sdafsdfltdfjsf",
    title: "eTeerminator",
    genre: { _id: "werfsflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "wqrltdfjsf",
    title: "erTerminator",
    genre: { _id: "serqflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "qwerltdfjsf",
    title: "tuTerminator",
    genre: { _id: "sftyulsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "iuiltdfjsf",
    title: "iiTerminator",
    genre: { _id: "sflyuisadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "rqwltdfjsf",
    title: "uioTerminator",
    genre: { _id: "sflsadfytuikjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
];
export function getMovies(){
    return movies;

}
export function getMovie(id) {
    return movies.find(m=>m._id===id);
   
}
