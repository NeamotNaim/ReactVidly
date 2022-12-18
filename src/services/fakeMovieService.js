import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "ltdfjsf",
    title: "Terminator",
    genre: { _id: "sflsadfkjsa", name: "Romantic" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
    liked: true,
  },
  {
    _id: "ltdfdsfjsf",
    title: "sdfTerminator",
    genre: { _id: "sflsadfkjsa", name: "Romantic" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "sdafsdfltdfjsf",
    title: "eTeerminator",
    genre: { _id: "sflsadfkjsa", name: "Romantic" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "sdafsdfsfltdfjsf",
    title: "RReTeerminator",
    genre: { _id: "sflsadfkjsa", name: "Romantic" },
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
    genre: { _id: "serqflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "iuiltdfjsf",
    title: "iiTerminator",
    genre: { _id: "serqflsadfkjsa", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "rqwltdfjsf",
    title: "uioTerminator",
    genre: { _id: "thrill", name: "Thrill" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-4-30",
  },
  {
    _id: "rqwltdsdffjsf",
    title: "tttuioTerminator",
    genre: { _id: "thrill", name: "Thrill" },
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

